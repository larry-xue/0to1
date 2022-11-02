package app

import (
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/jmoiron/sqlx"
	"github.com/larry-xue/banking/domain"
	"github.com/larry-xue/banking/service"
)

// func sanityCheck() {
// 	if os.Getenv("SERVER_HOST") == "" ||
// 		os.Getenv("SERVER_PORT") == "" {
// 		log.Fatal("Enviroment viriables not defined...")
// 	}
// }

func Start() {
	router := mux.NewRouter()

	// sanityCheck()

	// writing
	// handlers := CustomerHandlers{service: service.NewCustomerService(domain.NewCustomerRepositoryStub())}
	cusomertRepository := domain.NewCustomerRepositoryDb(getDbClient())
	accountRepository := domain.NewAccountRepositoryDb(getDbClient())
	ch := CustomerHandlers{service: service.NewCustomerService(cusomertRepository)}
	ah := AccountHandlers{service: service.NewAccountService(accountRepository)}

	router.HandleFunc("/customers", ch.getAllCustomers).Methods(http.MethodGet)
	router.HandleFunc("/customers/{customer_id:[0-9]+}", ch.getCustomer).Methods(http.MethodGet)
	router.HandleFunc("/customers/{customer_id:[0-9]+}/account", ah.NewAccount).Methods(http.MethodPost)

	// SERVER_HOST := os.Getenv("SERVER_HOST")
	// SERVER_PORT := os.Getenv("SERVER_PORT")
	// logger.Info("service running on: " + SERVER_HOST + " " + SERVER_PORT)
	http.ListenAndServe("localhost:8000", router)
	// log.Fatal(http.ListenAndServe(fmt.Sprint(SERVER_HOST, ":", SERVER_PORT), router))
}

func getDbClient() *sqlx.DB {
	// dbUser := os.Getenv("DB_USER")
	// dbPasswd := os.Getenv("DB_PASSWD")
	// dbAddr := os.Getenv("DB_ADDR")
	// dbPort := os.Getenv("DB_PORT")
	// dbName := os.Getenv("DB_NAME")

	// dataSource := fmt.Sprint("%s:%s@tcp(%s:%s)/%s", dbUser, dbPasswd, dbAddr, dbPort, dbName)

	client, err := sqlx.Open("mysql", "root:123456@tcp(localhost:3306)/banking")
	if err != nil {
		panic(err)
	}
	// See "Important settings" section.
	client.SetConnMaxLifetime(time.Minute * 3)
	client.SetMaxOpenConns(10)
	client.SetMaxIdleConns(10)
	return client
}
