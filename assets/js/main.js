//Trasformo la prima versione del esercizio in un commento per sviluppare una mia versione custom
/*
let name = prompt("Scrivi qui il tuo nome")
let surname = prompt("Scrivi qui il tuo cognome")
let color = prompt("Scrivi qui il tuo colore preferito")

let password = name + surname + color + 21
console.log(password)

document.getElementById('Password').innerHTML = 'Questa è la insicurissima password per te generata : ' + password
*/

function myPassword() {
    let name = prompt("Scrivi qui il tuo nome");
    let surname = prompt("Scrivi qui il tuo cognome");
    let color = prompt("Scrivi qui il tuo colore preferito");
    let password = name + surname + color + 21
    document.getElementById('Password').innerHTML = 'Questa è la insicurissima password per te generata 🤌: ' + password
}



