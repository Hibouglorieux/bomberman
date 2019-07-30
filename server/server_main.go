package main

import (
	"fmt"
	"log"
	"net/http"

	socketio "github.com/googollee/go-socket.io"
)

func main() {
	mainserver, err := socketio.NewServer(nil)
	if err != nil {
		fmt.Println("fatal error with NewServer", err)
		log.Fatal(err)
	}
	mainserver.OnEvent("/", "testGo", func(s socketio.Conn, msg string) {
		fmt.Println("notice:", msg)
		s.Emit("log", "have " + msg)
	})
	mainserver.OnError("/", func(e error) {
		fmt.Println("meet error:", e)
	})
	mainserver.OnDisconnect("/", func(s socketio.Conn, msg string) {
		fmt.Println("closed", msg)
	})
	go mainserver.Serve()
	defer mainserver.Close()

	http.Handle("/socket.io/", mainserver)
	http.Handle("/", http.FileServer(http.Dir("..")))
	log.Println("Serving at localhost:11337...")
	log.Fatal(http.ListenAndServe(":11337", nil))
}
