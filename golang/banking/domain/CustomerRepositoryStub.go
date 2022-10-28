package domain

type CustomerRepositoryStub struct {
	customers []Customer
}

// 定义类型的方法
func (s CustomerRepositoryStub) FindAll() ([]Customer, error) {
	return s.customers, nil
}

func NewCustomerRepositoryStub() CustomerRepositoryStub {
	customers := []Customer{
		{Id: "10001", Name: "aou", City: "Tokyo", Zipcode: "123123", DateofBirth: "2000-12-12", Status: "0"},
		{Id: "10002", Name: "aou", City: "Tokyo", Zipcode: "123123", DateofBirth: "2000-12-12", Status: "0"},
	}
	// 类型转换？或者说是构造
	return CustomerRepositoryStub{customers: customers}
}
