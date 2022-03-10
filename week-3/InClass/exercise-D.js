function magician(yourFunc) {
    console.log(
      "I am magician! Watch as I mutate an array of strings to your heart's content!"
    );
    const namesArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const magicOutput = yourFunc(namesArray);
  
    return magicOutput;
  }

  function nameMayusculas(persona) {
      return persona.toUpperCase()
  }

  function manipulateArray(array) {
      const result = [];
      for (let index = 0; index < array.length; index++) {
          const element = array[index];
          result.push(nameMayusculas(element))
      }
      return result.sort();
  }

  console.log(magician(manipulateArray));