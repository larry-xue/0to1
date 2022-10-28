package app

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/larry-xue/banking/domain"
	"github.com/larry-xue/banking/service"
)

func Start() {
	router := mux.NewRouter()

	// writing
	// handlers := CustomerHandlers{service: service.NewCustomerService(domain.NewCustomerRepositoryStub())}
	handlers := CustomerHandlers{service: service.NewCustomerService(domain.NewCustomerRepositoryDb())}

	router.HandleFunc("/customers", handlers.getAllCustomers).Methods(http.MethodGet)
	router.HandleFunc("/customers/{customer_id:[0-9]+}", handlers.getCustomer).Methods(http.MethodGet)

	log.Fatal(http.ListenAndServe("localhost:3000", router))
}
