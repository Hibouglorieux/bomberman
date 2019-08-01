package main

import (
    "fmt"
    "log"
	"strconv"
    "net/http"
	"github.com/gorilla/websocket"
)

const ID_REQ = 'i'
const NEW_ID = 'n'
const MOVEMENT = 'M' //easier to read to detect messages and reduce size of packages

var Clients []*websocket.Conn // global with all clients registered

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
		elem.WriteMessage(1, []byte(str));
	}
}

func	send_all_but_self(str string, id_of_self int) {

	for id, elem := range Clients{
		if (id != id_of_self){
			fmt.Println("send to: ", id, "\nmessage: ", str)
			elem.WriteMessage(1, []byte(str))
		}
	}
}

func	remove_client(index int){
	Clients = append(Clients[:index], Clients[index+1:]...)
}

func reader(conn *websocket.Conn) { // read all messages as goroutines, whenever something is interesting you can answer to client or all client with .WriteMessage method
	Clients = append(Clients, conn)
	var id int;
	for k, elem := range Clients{
		if (elem == conn) {
			id = k
			break
		}
	}
	for {
		var new_msg string = "";
		messageType, p, err := conn.ReadMessage() // read in a message
		if err != nil {
			log.Println(err)
			return
		}

		fmt.Println(string(p)) // print out the message received for clarity / debug

		if (string(p)[0] == ID_REQ) {
			new_msg = "ID" + strconv.Itoa(id)
		}
		if (string(p)[0] == NEW_ID) {
			send_all("Add" + string(p)[3:])
		}
		if (string(p)[0] == MOVEMENT) {
			send_all_but_self(string(p)[0:2] + strconv.Itoa(id) + string(p)[2:], id)
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
//this is a test

func setupRoutes() {
	http.HandleFunc("/ws", wsEndpoint)
	http.Handle("/", http.FileServer(http.Dir("..")))
}

func main() {
	fmt.Println("Hello World")
	setupRoutes()
	log.Fatal(http.ListenAndServe(":11337", nil))
}
