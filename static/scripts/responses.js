function getBotResponse(input) {
    if(input == "rock")
    {
        return "paper";
    }else if(input == "paper"){
        return "scissors";
    }else if(input == "scissors"){
        return "rock";
    }

    if(input == "hello"){
        return "hello there";
    }else if(input == "goodbye"){
        return "talk to your later!!"
    }else {
        return "try asking something else!";
    }
}