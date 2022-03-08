function UserCheck(userName, userType){
    const firstLetter = userName.charAt(0);
    const userLength = userName.length;
    const isValidLength = userLength >= 5 && userLength <= 10;
    const isASuperUser = userType === "admin" || userType === "manager"

    if(isASuperUser){
        return "Username valid"
    }

    else if(firstLetter === firstLetter.toUpperCase() && isValidLength){
        return "Username valid"
    }else{
        return "Username invalid"
    }
}

console.log(UserCheck("Jorgelina","admin" ));