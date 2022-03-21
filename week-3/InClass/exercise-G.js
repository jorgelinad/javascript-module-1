const puedeConducir = 17
const añoActual = 2022

function devuelveEdad(birthYear) {
    return añoActual - birthYear
}
 const birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919]
 const adults = birthYear.filter(age => devuelveEdad(age) > 17)

console.log(`These are the birth years of people who can drive: ${adults}`);