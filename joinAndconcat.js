//join=แปลง arr to str,concat
const data = [100,200,300]
const data2 = [400,500]
console.log(data)
//แปลง arr เป็น str join
const result = data.join()
console.log("แปลง : "+result)
console.log(data)//แปลงแล้วโครงสร้างเดิมยังอยู่
//concat
const alldata = data.concat(data2)
console.log(alldata)
