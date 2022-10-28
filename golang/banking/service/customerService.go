package service

import (
	"github.com/larry-xue/banking/domain"
	"github.com/larry-xue/banking/errs"
)

type CustomerService interface {
	GetAllCustomer() ([]domain.Customer, *errs.AppError)
	GetCustomer(id string) (*domain.Customer, *errs.AppError)
}

type DefultCustomerService struct {
	repo domain.CustomerRepository
}

func (s DefultCustomerService) GetAllCustomer() ([]domain.Customer, *errs.AppError) {
	return s.repo.FindAll()
}

func NewCustomerService(reposity domain.CustomerRepository) DefultCustomerService {
	return DefultCustomerService{repo: reposity}
}

func (s DefultCustomerService) GetCustomer(id string) (*domain.Customer, *errs.AppError) {
	return s.repo.ById(id)
}
