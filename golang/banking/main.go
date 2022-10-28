package main

// app 放到包里面以后要导入
import (
	"log"

	"github.com/larry-xue/banking/app"
)

func main() {
	log.Println("Starting out application")
	app.Start()
}
