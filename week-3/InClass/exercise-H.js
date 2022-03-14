const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];

function estaMiNombre (names) {
    if (names.find(nombre => nombre === "Jorgelina")) {
        return "Me!"
    } else {
        return "Not me!"
    }
}

console.log(estaMiNombre(names));