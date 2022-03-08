function numberChecker(num) {
  if (num > 20) {
    return `${num} is greater than 20`;
  } else if (num === 20) {
    return `${num} is equal to 20`;
  } else if (num < 20) {
    return `${num} is less than 20`;
  } else {
    return `${num} isn't even a number :(`;
  }
}

console.log(numberChecker(20));

//Linea 1: define la funcion
//Linea 2: si el num es mayor a 20
//Linea 3: retorna is greater than 20
//Linea 4: compara el num si es igual a 20
//Linea 5: retorna is equal to 20
//Linea 6: compara si el num es menor a 20
//Linea 7: retorna is less than 20
//Linea 9: retorna ins`t even a number si no es un numero//