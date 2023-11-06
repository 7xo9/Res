
let vat = document.getElementById("vat")
let cal = document.getElementById("cal")

let cal2 = document.getElementById("cal2")

cal.addEventListener("click", ()=>{
    let Num = document.getElementById("form12")
    let vt = Num.value * 0.15
    vat.innerText = +Num.value + +vt
})

cal2.addEventListener("click", ()=>{

    let price = document.getElementById("price")
    let ppl = document.getElementById("ppl")
    let pr = document.getElementById("pr")

    let final = price.value/ppl.value
    pr.innerText = final;
    
})