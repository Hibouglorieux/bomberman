package main

import (
	"fmt"
	"net/http"
//	"io/ioutil"
	"log"
	"bytes"
//	"html"
)

//var INDEX_HTML []byte
//var value string = "hell"

func main(){
	fmt.Printf("starting server on http://localhost:8000/\n")
//	http.HandleFunc("/", IndexHandler)
	fs := http.FileServer(http.Dir(".."))
	http.Handle("/", fs)
	http.HandleFunc("/post", PostHandler)
	http.ListenAndServe(":8000", nil)
}

//func IndexHandler(w http.ResponseWriter, r *http.Request){
//	log.Println("GET /")
//	w.Write(INDEX_HTML)
//}

func PostHandler(w http.ResponseWriter, r *http.Request){
//	r.ParseForm()
	buf := new(bytes.Buffer)
	buf.ReadFrom(r.Body)
	log.Printf("hello Nathan %s\n", buf.String())
//	var value = r.FormValue("textfield")
	w.Write([]byte("hell"))
}
//func init(){
//	INDEX_HTML, _ = ioutil.ReadFile("../index.html")
//}
