package dto

type TransactionResponse struct {
	Balance       string `json:"balance"`
	TransactionId string `json:"transaction_id"`
}
