package main

import (
	"fmt"
	"log"
	"strconv"
	"net/http"
	"github.com/gorilla/websocket"
	"time"
	"math/rand"
)

const ID_REQ = 'i'
const DEATH = 'D'
const BOMB = 'B'
const NEW_ID = 'n'
const BLOCK_DESTROYED = 'b'
const CHAIN_EXPLOSION = 'E'
const MOVEMENT = 'M' //easier to read to detect messages and reduce size of packages
const STOP_ANIM = 'l'
const NOTHING = 0
const FLAME_UP = 4
const BOMB_UP = 5
const BOMB_P = 6
const SPEED_UP = 7
const ARMOR = 8

var seed = rand.NewSource(time.Now().UnixNano())

var const_power_up_list = []int {
	FLAME_UP, FLAME_UP, FLAME_UP, FLAME_UP, FLAME_UP, FLAME_UP, FLAME_UP, FLAME_UP, FLAME_UP, FLAME_UP, //10
	FLAME_UP, FLAME_UP, FLAME_UP, FLAME_UP, FLAME_UP, FLAME_UP, FLAME_UP, FLAME_UP, FLAME_UP, FLAME_UP, //10
	BOMB_UP, BOMB_UP, BOMB_UP, BOMB_UP, BOMB_UP, BOMB_UP, BOMB_UP, BOMB_UP, BOMB_UP, BOMB_UP, //10
	BOMB_UP, BOMB_UP, BOMB_UP, BOMB_UP, BOMB_UP, BOMB_UP, BOMB_UP, BOMB_UP, BOMB_UP, BOMB_UP, //10
	BOMB_P, BOMB_P, BOMB_P, BOMB_P, BOMB_P, //5
	SPEED_UP, SPEED_UP, SPEED_UP, SPEED_UP, SPEED_UP, SPEED_UP, SPEED_UP, SPEED_UP, SPEED_UP, SPEED_UP, //10
	SPEED_UP, SPEED_UP, SPEED_UP, SPEED_UP, SPEED_UP, SPEED_UP, SPEED_UP, SPEED_UP, SPEED_UP, SPEED_UP, //10
	ARMOR, ARMOR, // 2
	NOTHING, NOTHING, NOTHING, NOTHING, NOTHING, NOTHING, NOTHING, NOTHING, NOTHING, NOTHING, //10
	NOTHING, NOTHING, NOTHING, NOTHING, NOTHING, NOTHING, NOTHING, NOTHING, NOTHING, NOTHING, //10
	NOTHING, NOTHING, NOTHING, NOTHING, NOTHING, NOTHING, NOTHING, NOTHING, NOTHING, NOTHING, //10
	NOTHING, NOTHING, NOTHING, NOTHING}//4
// 67 total items
// 34 nothing
// 101 blocks

var power_ups []int

type clts struct{
	id int
	conn *websocket.Conn
}
var Clients []clts // global with all clients registered

var upgrader = websocket.Upgrader{ // this sets the parameters for websockets
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

//func	treated_string(str string) string{ // UNUSED FOR NOW
//	if (str[0] == ID_REQ) {
//		return ""
//	}
//	return ""
//}

func	send_all(str string) {

	for _, elem := range Clients {
			elem.conn.WriteMessage(1, []byte(str));
	}
}

func	send_all_but_self(str string, id_of_self int) {

	for _, elem := range Clients{
		if (elem.id != id_of_self){
			elem.conn.WriteMessage(1, []byte(str))
		}
	}
}

func	get_a_new_powerup(str string) string{

	var random int = rand.Int() % len(power_ups)
	var ret int = power_ups[random]
	power_ups[random] = power_ups[len(power_ups) - 1]
	power_ups = power_ups[:len(power_ups) - 1]

	fmt.Println(len(power_ups))
	return str + ":" + strconv.Itoa(ret)
}

func set_id (id int) int {
	for _, elem := range Clients{
		if (elem.id == id){
			return (set_id(id + 1))
		}
	}
	return (id)
}

func remove_client(id int) {
	var key int
	for k, elem := range Clients{
		if (elem.id == id){
			key = k
		}
	}
	Clients[key] = Clients[len(Clients)-1]
	Clients = Clients[:len(Clients) - 1]
}

func	add_all_players(conn *websocket.Conn, id int) {
	for _, elem := range Clients{
		if (elem.id != id){
			conn.WriteMessage(1, []byte("Add" + strconv.Itoa(elem.id)))
		}
	}
	conn.WriteMessage(1, []byte("ID" + strconv.Itoa(id)))
}

func reader(conn *websocket.Conn) { // read all messages as goroutines, whenever something is interesting you can answer to client or all client with .WriteMessage method
	var id int
	id = set_id(0)
	Clients = append(Clients, clts{id, conn})
	for {
		var new_msg string = "";
		messageType, p, err := conn.ReadMessage() // read in a message
		if err != nil {
			remove_client(id)
			log.Println(err)
			return
		}
		if (string(p)[0] != MOVEMENT){
			fmt.Println(string(p)) // print out the message received for clarity / debug
		}

		if (string(p)[0] == BOMB){
			send_all_but_self(string(p), id);
			continue ;
		}
		if (string(p)[0] == CHAIN_EXPLOSION || string(p)[0] == STOP_ANIM){
			send_all_but_self(string(p), id);
			continue ;
		}
		if (string(p)[0] == BLOCK_DESTROYED){
			send_all(get_a_new_powerup(string(p)))
			continue ;
		}
		if (string(p)[0] == ID_REQ) {
			add_all_players(conn, id)
			continue ;
		}
		if (string(p)[0] == NEW_ID) {
			send_all("Add" + string(p)[3:])
			continue ;
		}
		if (string(p)[0] == DEATH){
			send_all(string(p));
			continue ;
		}
		if (string(p)[0] == MOVEMENT) {
			send_all_but_self(string(p)[0:2] + strconv.Itoa(id) + string(p)[2:], id)
			continue ;
		}
		if (new_msg != ""){
			if err := conn.WriteMessage(messageType, []byte(new_msg)); err != nil { // writes in message, if error removes client from Clients
				remove_client(id)
				log.Println(err)
				return
			}
		}
	}
}

func wsEndpoint(w http.ResponseWriter, r *http.Request) { // javascript code connects there with its websocket and launchs a goroutine on 'reader' which never ends until the connection is closed

	upgrader.CheckOrigin = func(r *http.Request) bool { return true }
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
	}

	log.Println("Client Connected")
	err = ws.WriteMessage(1, []byte("Hi Client!"))
	if err != nil {
		log.Println(err)
	}
	reader(ws)
}

func setupRoutes() {
	http.HandleFunc("/ws", wsEndpoint)
	http.Handle("/", http.FileServer(http.Dir("..")))
}

func main() {
	power_ups = const_power_up_list[:]
	fmt.Println("Hello World")
	setupRoutes()
	log.Fatal(http.ListenAndServe(":11337", nil))
}
