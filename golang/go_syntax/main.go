package main

import (
	"fmt"
	"time"
)

var quit = make(chan string)

func fib(c chan float64) float64 {
	x, y := 1.0, 1.0
	for {
		select {
		case <-quit:
			x, y = y, x+y
			c <- x
		}
		x, y = y, x+y
	}
}

func main() {
	start := time.Now()
	command := ""
	data := make(chan float64)

	go fib(data)

	for {
		fmt.Scanf("%s", &command)
		if command == "quit" {
			break
		}
		quit <- "message"
		fmt.Printf("%f", <-data)
	}

	elapsed := time.Since(start)
	fmt.Printf("Done! It took %v seconds!\n", elapsed.Seconds())
}
