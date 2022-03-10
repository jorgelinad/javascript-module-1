const añoActual = 2022

function devuelveEdad(year, yearBirth) {
    return añoActual - year
}

const array = [1964, 2008, 1999, 2005, 1978, 1985, 1919]

const arrayEdad = array.map(devuelveEdad)

console.log(array);
console.log(arrayEdad);