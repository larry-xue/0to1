package errs

import "net/http"

type AppError struct {
	Code    int    `json:",omitempty"`
	Message string `json:"message"`
}

func (e AppError) AsMessage() *AppError {
	return &AppError{
		Message: e.Message,
	}
}

func NewNotFoundError(msg string) *AppError {
	return &AppError{
		Code:    http.StatusNotFound,
		Message: msg,
	}
}

func NewUnexpectedError(msg string) *AppError {
	return &AppError{
		Message: msg,
		Code:    http.StatusInternalServerError,
	}
}

func NewValidationError(msg string) *AppError {
	return &AppError{
		Message: msg,
		Code:    http.StatusUnprocessableEntity,
	}
}
