package service

import "github.com/larry-xue/banking/domain"

type CustomerService interface {
	GetAllCustomer() ([]domain.Customer, error)
	GetCustomer(id string) (*domain.Customer, error)
}

type DefultCustomerService struct {
	repo domain.CustomerRepository
}

func (s DefultCustomerService) GetAllCustomer() ([]domain.Customer, error) {
	return s.repo.FindAll()
}

func NewCustomerService(reposity domain.CustomerRepository) DefultCustomerService {
	return DefultCustomerService{repo: reposity}
}

func (s DefultCustomerService) GetCustomer(id string) (*domain.Customer, error) {
	return s.repo.ById(id)
}
