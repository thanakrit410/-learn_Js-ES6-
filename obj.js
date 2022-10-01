//obj
//ตัวแปรเก็บข้อมูล

const Username = "thanakrit"
const Age = 21
const Address = "bangbon"
const customer = {
    Username,
    Age,
    Address,
    showData(){
        console.log("ข้อมูลลูกค้า ="+Username)
    }
}
customer.showData()