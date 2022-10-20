var budget = 100;
var product = prompt ("prijs product");
var tekst = document.getElementById ("budget")

if (budget > product) {
    tekst.innerText = "U heeft genoeg geld!"
}

else {
    tekst.innerText = "Helaas, te weinig geld"
}