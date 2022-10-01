//SOprator
//นำสมาชิกใน nawArr ต่อ กัน ใน data
const nawArr = [100,200,300]

const data =[10,20,...nawArr]
console.log(data);

console.log(data.length);

const color =["rad","blue"]
const allcolor =["black","green",...color]

console.log(allcolor);

//push array
const allcolor2 =["black","green",...color]
const newcolor = ["Gary"]
allcolor2.push(...newcolor) //ต้องใส่จุดถ้าไม่ใส่ ... ก็ส่งไปแบบ arr แบบเดิม
console.log(allcolor2);
