package dto

type TransactionRequest struct {
	AccountId       string  `json:"account_id"`
	TransactionType string  `json:"transaction_type"`
	Amount          float64 `json:"amount"`
}
