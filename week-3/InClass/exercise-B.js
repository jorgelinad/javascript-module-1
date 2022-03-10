let arrayEspañol = ["Linda", "Vanessa", "Laeken", "Jorgelina", "Yennifer"]

let arrayIngles = ["Gloria", "Mathew", "Damian", "Rachid", "Deniz"]

let arrayEspañolIngles = arrayEspañol.concat(arrayIngles)

console.log(arrayEspañolIngles.sort());

function nameVerificar (name, array) {
    if(!array.includes(name)){
        return name + " is not at the class with " + array
    } else{
        return name + " is at the class with " + array
    }
}
 
console.log(nameVerificar("Linda", arrayIngles));
