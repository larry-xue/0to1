package service

import (
	"time"

	"github.com/larry-xue/banking/domain"
	"github.com/larry-xue/banking/dto"
	"github.com/larry-xue/banking/errs"
)

type AccountService interface {
	NewAccount(dto.NewAccountRequest) (*dto.NewAccountResponse, *errs.AppError)
}

type DefaultAccountService struct {
	repo domain.AccountRepository
}

func (s DefaultAccountService) NewAccount(req dto.NewAccountRequest) (*dto.NewAccountResponse, *errs.AppError) {
	err := req.Validate()
	if err != nil {
		return nil, err
	}

	a := domain.Account{
		CustomerId:  req.CustomerId,
		AccountType: req.AccountType,
		Amount:      req.Amount,
		OpeningDate: time.Now().Format("2006-01-02 15:04:05"),
		Status:      "1",
	}
	newAccount, err := s.repo.Save(a)
	if err != nil {
		return nil, err
	}

	response := newAccount.ToNewAccountResponseDto()
	return &response, nil
}

func Transaction() {}

func NewAccountService(repo domain.AccountRepository) DefaultAccountService {
	return DefaultAccountService{repo: repo}
}
