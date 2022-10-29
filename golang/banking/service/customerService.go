package service

import (
	"github.com/larry-xue/banking/domain"
	"github.com/larry-xue/banking/dto"
	"github.com/larry-xue/banking/errs"
)

type CustomerService interface {
	GetAllCustomer() ([]dto.CustomerResponse, *errs.AppError)
	GetCustomer(id string) (*dto.CustomerResponse, *errs.AppError)
}

type DefultCustomerService struct {
	repo domain.CustomerRepository
}

func (s DefultCustomerService) GetAllCustomer() ([]dto.CustomerResponse, *errs.AppError) {
	customers, err := s.repo.FindAll()
	if err != nil {
		return nil, err
	}
	response := make([]dto.CustomerResponse, len(customers))
	for i := 0; i < len(customers); i++ {
		response[i] = customers[i].ToDto()
	}
	return response, nil
}

func (s DefultCustomerService) GetCustomer(id string) (*dto.CustomerResponse, *errs.AppError) {
	c, err := s.repo.ById(id)
	if err != nil {
		return nil, err
	}
	response := c.ToDto()
	return &response, nil
}

func NewCustomerService(reposity domain.CustomerRepository) DefultCustomerService {
	return DefultCustomerService{repo: reposity}
}
