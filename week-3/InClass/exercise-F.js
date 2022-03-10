const puedeConducir = 17
const añoActual = 2022

function devuelveEdad(year, yearBirth) {
    return añoActual - year
}

function yearBorn(year) {
    if( devuelveEdad >= puedeConducir){
        return `Born in ${year} can drive`
    }else{
        return `Born in ${year} can drive in {x} years`
    }
}

console.log(añoActual - 1992);


