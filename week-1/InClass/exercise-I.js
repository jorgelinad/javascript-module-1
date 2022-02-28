function bornDate(age) {
    return 2022 - age
}

function nameAge(personName, age){
    return "Hola mi nombre es " + personName + " y naci en " + bornDate(age)
}

console.log(nameAge("Jorgelina",29));