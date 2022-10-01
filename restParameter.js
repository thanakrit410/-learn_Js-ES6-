//ส่งค่า parameter เข้าไปทำงานใน Function(ใช้ ...)
//แบบปกติ
summation=(x,y,z,w)=>x+y+z+w

console.log(summation(50,100));
console.log(summation(500,1000,500));//ค่าไม่ออก

//แบบ rest parm ส่งค่ามาคำนวณแบบ arr
summation2=(...numberArr)=>{
    let total = 0
    for(let number of numberArr)
    {
    total += number
    }
    return total

}

console.log(summation2(500,1000));

console.log(summation2(500,1000,800,500));