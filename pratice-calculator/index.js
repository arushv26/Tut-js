let num1 = 8
let num2 = 2
let sumEl = document.getElementById("sum-el")
document.getElementById("num-el1").textContent = num1
document.getElementById("num-el2").textContent = num2

function add(){
    let result = num1 + num2
    sumEl.textContent = "Sum : " + result
}
function subtract(){
    let result = num1 - num2
    sumEl.textContent = "Sum : " + result

}
function divide(){
    let result = num1/num2
    sumEl.textContent = "Sum : " + result

}
function multiply(){
    let result = num1*num2
    sumEl.textContent = "Sum : " + result
}