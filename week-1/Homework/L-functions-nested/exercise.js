var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function mentorMayuscula(mentor){
    const nombreEnMayuscula = mentor.toUpperCase();
    return nombreEnMayuscula;
}

function saludoAGritos(mentor){
    return "HELLO" + " " + mentorMayuscula(mentor)
}

 console.log(saludoAGritos(mentor1));
 console.log(saludoAGritos(mentor2));
 console.log(saludoAGritos(mentor3));
 console.log(saludoAGritos(mentor4));
 console.log(saludoAGritos(mentor5)); 