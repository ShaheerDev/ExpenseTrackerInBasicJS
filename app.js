function income() {
var income = prompt("What is your income?")
document.getElementById("income").innerHTML = income

if (income == "") {
   alert("Income cannot be empty.")
   location.reload()
}
}

function additem() {
var expensename = document.getElementById("expenseitem").value
var expenseprice = document.getElementById("price").value

var p = document.createElement("p")
p.setAttribute("class", "fonttype")
p.innerHTML = "You added: " + expensename + " with price: " + expenseprice
document.getElementById("items").appendChild(p)

var additionexpense = +document.getElementById("expenses").innerHTML + +expenseprice
document.getElementById("expenses").innerHTML = additionexpense
console.log(additionexpense)
}

setInterval(function(){
   var expenseprice = document.getElementById("price").value 
   var additionexpense = +document.getElementById("expenses").innerHTML + +expenseprice
   var income = document.getElementById("income").innerHTML
   if(expenseprice > income){
      alert("Your expenses have exceeded your income.")
   }
}, 5000)