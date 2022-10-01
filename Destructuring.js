  //destructuring คือ การสลายโครงสร้าง array -> varieble
  //array

  const color =["เขียว","แดง","เหลือง"]
  //แบบปกติ
  /*const green = color[0]
  const red = color[1]
  const yellow = color[2]*/

  //แบบ destructuring
  const color2 =["เขียว","แดง","เหลือง"]
  const[green,,yellow]=color2
  console.log(green)
  console.log(yellow)

  //object
  const product = {
    productName : "คอมพิวเตอร์",
    price:3000,
    stock:10
  }
  //แบบปกติ
  /*const productname = product.productName
  const price = product.price
  const stock = product.stock*/

//แบบ destructuring
        /*obj*/    /*variebles*/
const {productName:n,price:p,stock:s} = product
console.log(n)
  console.log(p)  
  console.log(s)