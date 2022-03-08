function VerificadorEstadoDeAnimo(Animo) {
    if (Animo === "happy") {
      return "Good job, you're doing great!";
    } else if (Animo === "sad") {
      return "Every cloud has a silver lining";
    } else if (typeof Animo === "number") {
      return "Beep beep boop";
    } else {
      return "I'm sorry, I'm still learning about feelings!";
    }
  }

  console.log(VerificadorEstadoDeAnimo("happy"));
  console.log(VerificadorEstadoDeAnimo("sad"));
  console.log(VerificadorEstadoDeAnimo(20));
  console.log(VerificadorEstadoDeAnimo("20"));
  