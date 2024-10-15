// ===============dom part start===============
let alu = document.querySelector(".input1")
let potol = document.querySelector(".button1")
let law = document.querySelector(".result1")
potol.addEventListener('click' , ()=>{
    console.log(alu.value)
    law.innerHTML = alu.value
})
//console.log(law.innerHTML)
//console.log(clijfk)