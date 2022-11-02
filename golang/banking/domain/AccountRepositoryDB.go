package domain

import (
	"strconv"

	"github.com/jmoiron/sqlx"
	"github.com/larry-xue/banking/errs"
	"github.com/larry-xue/banking/logger"
)

type AccountRepositoryDb struct {
	client *sqlx.DB
}

func (db AccountRepositoryDb) Save(a Account) (*Account, *errs.AppError) {
	sqlInsert := "INSERT INTO accounts (customer_id, opening_date, account_type, amount, status) VALUES (?, ?, ?, ?, ?);"
	result, err := db.client.Exec(sqlInsert, a.CustomerId, a.OpeningDate, a.AccountType, a.Amount, a.Status)
	if err != nil {
		logger.Error(err.Error())
		return nil, errs.NewUnexpectedError("unexpected error from database")
	}

	id, err := result.LastInsertId()
	if err != nil {
		logger.Error(err.Error())
		return nil, errs.NewUnexpectedError("unexpected error from database")
	}

	a.AccountId = strconv.FormatInt(id, 10)
	return &a, nil
}

func (db AccountRepositoryDb) Update(a Account) *errs.AppError {
	sqlUpdate := "UPDATE accounts SET amount= ?  where account_id = ?;"
	result, err := db.client.Exec(sqlUpdate, a.Amount, a.AccountId)
	if err != nil {
		logger.Error(err.Error())
		return errs.NewUnexpectedError("unexpected error from database")
	}
	_, err = result.RowsAffected()
	if err != nil {
		logger.Error(err.Error())
		return errs.NewUnexpectedError("unexpected error from database")
	}
	return nil
}

func NewAccountRepositoryDb(db *sqlx.DB) AccountRepositoryDb {
	return AccountRepositoryDb{
		client: db,
	}
}
