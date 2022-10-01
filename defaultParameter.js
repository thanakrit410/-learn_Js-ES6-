//default parameter การระบุค่าเริ่มต้นให้ parameter
                                                //แบบใช้ default parameter//
getDatacustomer=(customerName,customerAddress = "สมุทรปราการ")=>{
    //แบบปกติ
    /*if(!customerAddress){
        customerAddress = "สมุทรปราการ"
    }*/
    const address = `ชื่อลูกค้า : ${customerName}
    ที่อยู่ ${customerAddress}`
    return address
}
console.log(getDatacustomer("ออมสิน","กรุงเทพ"));
//param ส่งไปแค่ตัวเดียว (ค่าออกมา undifind) ใช้ default เพื่อไม่ให้ undefind
console.log(getDatacustomer("ออมสิน"));