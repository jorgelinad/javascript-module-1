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

 const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919]

birthYears.map(getDriving).forEach(status => console.log(status));