const puedeConducir = 17
const añoActual = 2022

function devuelveEdad(birthYear) {
    return añoActual - birthYear
}

function getDriving(birthYear) {
    const age = devuelveEdad(birthYear)
    if( age >= 17){
        return `Born in ${birthYear} can drive`
    }else{
        const yearsToDrive = 17 - age
        return `Born in ${birthYear} can drive in ${yearsToDrive} years`
    }
}

 const birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919]
 const adults = birthYear.map(age).filter(age => age > 17)


console.log(`These are the birth years of people who can drive: ${adults});