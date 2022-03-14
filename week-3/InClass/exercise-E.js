const añoActual = 2022

function devuelveEdad(birthYear) {
    return añoActual - birthYear
}

birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919]

const arrayEdad = birthYears.map(devuelveEdad)

console.log(birthYears);
console.log(arrayEdad);
