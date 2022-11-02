package dto

import (
	"strings"

	"github.com/larry-xue/banking/errs"
)

type NewAccountRequest struct {
	CustomerId  string  `json:"customer_id"`
	AccountType string  `json:"account_type"`
	Amount      float64 `json:"amount"`
}

func (r NewAccountRequest) Validate() *errs.AppError {
	if r.Amount < 5000 {
		return errs.NewValidationError("To open a new account you need to deposit atleast 5000.00")
	}
	if accountType := strings.ToLower(r.AccountType); accountType != "saving" && accountType != "checking" {
		return errs.NewValidationError("Account type should be cheking or saving.")
	}
	return nil
}
