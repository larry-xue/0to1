package main

import (
	"database/sql"
	"fmt"
	"time"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Doctor struct {
	ID      int64
	Name    string
	Age     int
	Sex     int
	AddTime time.Time `gorm:"column:addTime"`
}

func main() {
	// 用户名:密码@tcp(数据库IP:端口)/数据库名?charset=utf8&parseTime=True
	dsn := "root:WJzuoyi123#@tcp(127.0.0.1:3306)/azoux?charset=utf8&parseTime=True&loc=Local"
	sqlDB, err := sql.Open("mysql", dsn)
	gormDB, err := gorm.Open(mysql.New(mysql.Config{
		Conn: sqlDB,
	}))
	if err != nil {
		fmt.Println("数据库连接错误！", err)
		return
	}

	gormDB.AutoMigrate()

	// docter := Doctor{ID: 1, Name: "d1", Age: 39, Sex: 0, AddTime: time.Now()}
	// result := gormDB.Create(&docter)
	// fmt.Println(result)

}

func singleQuery(db *sql.DB) {
	var doc Doctor
	// execute single query
	row := db.QueryRow("select * from doctor_tb where id = ?", 1)
	// 赋值
	row.Scan(&doc.ID, &doc.Name, &doc.Age, &doc.Sex, &doc.AddTime)
	fmt.Println("single data result: ", doc)
}

func addItem(db *sql.DB) {

}

func (Doctor) TableName() string {
	return "doctor_infos"
}

func setTableNameTest(db *sql.DB) {

}
