let personas =["Amy", "Jorgelina", "Wilmer"]

function secondMatchesAmy(array) {
  if (array[0] === "Amy") {
    return "Second index matched!";
  }
  return "Second index not matched";
}

console.log(secondMatchesAmy(personas));