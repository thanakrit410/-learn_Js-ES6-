
//multiline str ใช้กับข้อความยาวๆ
const address =  `ชื่อลูกค้า : ออม สิน 
ที่อยู่ 340 บางบอน กรุงเทพ 10150 
เบอร์ 064-046-6786  `
console.log(address);

//Interpolation แทรกค่าตัวแปรลงใน string  ข้อความ
let customerName = "เด็กชายอิม"
let city = "บางแค กรุงเทพ 10150"
let tel = "096-051-0388"
const address2 =  `ชื่อลูกค้า : ${customerName}
ที่อยู่ ${city}
เบอร์ ${tel}  `
console.log(address2);
