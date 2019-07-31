package main

import (
	"fmt"
	"log"
	"net/http"
	"strconv"

	socketio "github.com/googollee/go-socket.io"
)

func main() {

	var id int = 0;
	Clients := make([]socketio.Conn, 0);

	mainserver, err := socketio.NewServer(nil)
	if err != nil {
		fmt.Println("fatal error with NewServer", err)
		log.Fatal(err)
	}

	mainserver.OnConnect("/", func(s socketio.Conn) error {
		//s.Emit("id", strconv.Itoa(id))// wrong place
		s.SetContext("")
		if (id < 4) {
		Clients = append(Clients, s);
//			if (id > 0){
//			for _, element := range Clients{
//				element.Emit("new_id", strconv.Itoa(id))
//			}
//		}
		id++
	}else{
		s.Close()
	}
	//maybe add page with too many players or just watch
	fmt.Println("new connection:", s.ID())
	return nil
})

	mainserver.OnEvent("/", "move", func(s socketio.Conn, msg string){
		nb,_ := strconv.Atoi(s.ID())
		nb -= 1;
		for _, elem := range Clients{
			elem.Emit("move",  strconv.Itoa(nb) + msg)
		}
	})

 mainserver.OnEvent("/", "rady", func(s socketio.Conn, msg string){
	nb,_ := strconv.Atoi(s.ID())
	nb -= 1
	fmt.Println("received rady")
	fmt.Println("sending: ", nb, "to all clients")
	s.Emit("id", strconv.Itoa(nb))// wrong place
		for _, element := range Clients{
			element.Emit("new_id", strconv.Itoa(nb))
		}
})



 mainserver.OnError("/", func(e error) {
	id--;
	fmt.Println("meet error:", e)
})
 mainserver.OnDisconnect("/", func(s socketio.Conn, msg string) {
	id--;
	fmt.Println("closed", msg)
})
go mainserver.Serve()
defer mainserver.Close()

http.Handle("/socket.io/", mainserver)
http.Handle("/", http.FileServer(http.Dir("..")))
log.Println("Serving at localhost:11337...")
log.Fatal(http.ListenAndServe(":11337", nil))
}
