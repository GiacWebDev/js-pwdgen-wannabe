
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito23


// 1. salvare le variabili
// 2. creare stringa output
// 3. effettuare innerHTML dell'output nel tag designato 


// 1.
const name = prompt (`inserisci il tuo nome`);
const lastName = prompt (`inserisci il tuo cognome`);
const color = prompt (`inserisci il tuo colore preferito`);

console.log(name, lastName, color)

// 2.
// prendo un id dal doc html in cui riportare il risultato

const password = `${name + lastName + color}23`

document.getElementById('output').innerHTML = password