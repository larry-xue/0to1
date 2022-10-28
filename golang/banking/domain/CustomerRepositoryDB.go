package domain

import (
	"database/sql"
	"net/http"
	"time"

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
	rows, err := db.client.Query(findAllSql)
	if err != nil {
		logger.Error("Error while querying customers table " + err.Error())
		return nil, &errs.AppError{
			Message: "Error while querying customers table " + err.Error(),
			Code:    http.StatusInternalServerError,
		}
	}

	customers := make([]Customer, 0)
	err = sqlx.StructScan(rows, &customers)
	if err != nil {
		logger.Error("Error while scanning customers " + err.Error())
		return nil, &errs.AppError{
			Message: "Error while scanning customers " + err.Error(),
			Code:    http.StatusInsufficientStorage,
		}
	}
	return customers, nil
}

func (db CustomerRepositoryDb) ById(id string) (*Customer, *errs.AppError) {
	findAllSql := "select customer_id, name, city, zipcode, date_of_birth, status from customers where customer_id = ?"

	row := db.client.QueryRow(findAllSql, id)
	var c Customer
	err := row.Scan(&c.Id, &c.Name, &c.City, &c.Zipcode, &c.DateofBirth, &c.Status)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, errs.NewNotFoundError("Customer not found")
		}
		logger.Error("Error while scanning customer " + err.Error())
		return nil, errs.NewUnexpectedError("unexpected database error")
	}
	return &c, nil
}

func NewCustomerRepositoryDb() CustomerRepositoryDb {
	client, err := sqlx.Open("mysql", "root:123456@tcp(localhost:3306)/banking")
	if err != nil {
		panic(err)
	}
	// See "Important settings" section.
	client.SetConnMaxLifetime(time.Minute * 3)
	client.SetMaxOpenConns(10)
	client.SetMaxIdleConns(10)
	return CustomerRepositoryDb{client: client}
}
