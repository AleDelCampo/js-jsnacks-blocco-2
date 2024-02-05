let userNumber = prompt("Inserisci un numero:");

userNumber = parseInt(userNumber);

if (userNumber % 2 === 0) {

    document.getElementById("result").innerHTML = (`Ecco il tuo numero: ${userNumber}`);

} else {

    document.getElementById("resultino").innerHTML = (`Ma se ti dico PARI, vuol dire PARI no?? :). <br> Beccati questo: ${userNumber + 1}`);
    
}