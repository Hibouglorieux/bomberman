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
const MOVEMENT = 'M'

var Clients []*websocket.Conn

var upgrader = websocket.Upgrader{
    ReadBufferSize:  1024,
    WriteBufferSize: 1024,
}

func	treated_string(str string) string{ // UNUSED FOR NOW
	if (str[0] == ID_REQ) {
		return ""
	}
	return ""
}

func	send_all(str string) {

	for _, elem := range Clients {
		elem.WriteMessage(1, []byte(str));
	}
}

func	send_all_but_self(msg []byte, id_of_self int) {

	for id, elem := range Clients{
		if (id != id_of_self){
			elem.WriteMessage(1, msg)
		}
	}
}

func reader(conn *websocket.Conn) {
	Clients = append(Clients, conn)
	var id int;
	for k, elem := range Clients{
		if (elem == conn) {
			id = k
			break
		}
	}
	for {
		var new_msg string;
		// read in a message
		messageType, p, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}
		fmt.Println(messageType)
		// print out that message for clarity
		fmt.Println(string(p))

		if (string(p)[0] == ID_REQ) {
			new_msg = "ID" + strconv.Itoa(id)
		}
		if (string(p)[0] == NEW_ID) {
			send_all("Add" + string(p)[3:])
		}
		if (string(p)[0] == MOVEMENT) {
			send_all_but_self([]byte(string(p) + strconv.Itoa(id)), id)
		}
		if err := conn.WriteMessage(messageType, []byte(new_msg)); err != nil {
			for k, elem := range Clients{
				if (elem == conn) {
					Clients[k] = Clients[len(Clients) - 1]
					Clients = Clients[:len(Clients) - 1]
					break
				}
			}
			log.Println(err)
			return
		}

	}
}

func wsEndpoint(w http.ResponseWriter, r *http.Request) {
	// remove the previous fmt statement
	// fmt.Fprintf(w, "Hello World")
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
	fmt.Println("Hello World")
	setupRoutes()
	log.Fatal(http.ListenAndServe(":11337", nil))
}
