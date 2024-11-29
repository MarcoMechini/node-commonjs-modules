// 1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.
// 2. Esporta la funzione dal file.

const getAllHobby = (hobbyOne, hobbyTwo, hobbyThree) => {
    hobbyOne = "dormire";
    hobbyTwo = "mangiare";
    hobbyThree = "giocare";

    return { hobbyOne, hobbyTwo, hobbyThree }
}

module.exports = {
    getAllHobby
};

