const randomNumber = Math.floor(Math.random() * 100) + 1;

while (true) {

    const userNumber = prompt("Indovina il numero tra 1 e 100:");

    if (userNumber == randomNumber) {
       
        document.getElementById("result").innerHTML = (`Numero Fortunato Estratto: ${randomNumber}!!`);
        
        break; 

    } else if (userNumber > randomNumber) {
      
        alert("Riprova. Spoiler: numero troppo alto!!");

    } else {

        alert("Riprova. Spoiler: numero troppo basso!!");

    }
}