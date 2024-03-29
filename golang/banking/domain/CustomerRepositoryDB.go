package domain

import (
	"database/sql"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
	"github.com/larry-xue/banking/errs"
	"github.com/larry-xue/banking/logger"
)

type CustomerRepositoryDb struct {
	client *sqlx.DB
}

func (db CustomerRepositoryDb) FindAll() ([]Customer, *errs.AppError) {
	findAllSql := "select customer_id, name, city, zipcode, date_of_birth, status from customers"
	customers := make([]Customer, 0)
	err := db.client.Select(&customers, findAllSql)
	if err != nil {
		logger.Error("Error while querying customers table " + err.Error())
		return nil, &errs.AppError{
			Message: "Error while querying customers table " + err.Error(),
			Code:    http.StatusInternalServerError,
		}
	}

	return customers, nil
}

func (db CustomerRepositoryDb) ById(id string) (*Customer, *errs.AppError) {
	findAllSql := "select customer_id, name, city, zipcode, date_of_birth, status from customers where customer_id = ?"

	var c Customer
	err := db.client.Get(&c, findAllSql, id)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, errs.NewNotFoundError("Customer not found")
		}
		logger.Error("Error while scanning customer " + err.Error())
		return nil, errs.NewUnexpectedError("unexpected database error")
	}
	return &c, nil
}

func NewCustomerRepositoryDb(db *sqlx.DB) CustomerRepositoryDb {
	return CustomerRepositoryDb{client: db}
}
