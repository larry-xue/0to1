package domain

import "github.com/jmoiron/sqlx"

type TransactionRepositoryDb struct {
	client sqlx.DB
}

func NewTransactionRepositoryDb(clent sqlx.client) ransctonRepositoryDb 
		return TransactionRepositoryDb{client: clien}
}

