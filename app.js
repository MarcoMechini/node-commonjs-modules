const argoments = process.argv
console.log(argoments);


const functionsName = require('./function/name');
const functionsHobbies = require('./function/hobbies');

// 1. Importa la tua funzione da names.js
// 2. Importa la tua funzione da hobbies.js
// 3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName e hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.


const person = () => {
    const firstName = functionsName.getFullName().firstName;
    const lastName = functionsName.getFullName().lastName;
    const fullName = { firstName, lastName }

    const firstHobby = functionsHobbies.getAllHobby().hobbyOne
    const secondHobby = functionsHobbies.getAllHobby().hobbyTwo
    const thirdHobby = functionsHobbies.getAllHobby().hobbyThree
    const hobbies = { firstHobby, secondHobby, thirdHobby }
    return { fullName, hobbies }
}

console.log(person());
