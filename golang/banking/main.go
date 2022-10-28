package main

import (
	"github.com/larry-xue/banking/app"
	"github.com/larry-xue/banking/logger"
)

// app 放到包里面以后要导入

func main() {
	logger.Info("Starting the application")
	app.Start()
}
