// 1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// 2. Esporta la funzione dal file.

const getFullName = (firstName, lastName) => {
    firstName = "Marco"
    lastName = "Mechni"
    return { firstName, lastName }
}

module.exports = {
    getFullName
};
