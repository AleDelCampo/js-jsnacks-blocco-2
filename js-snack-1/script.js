let myArray = [];

let sum = 0;

while (sum < 50) {

    let userNumber = prompt("Inserisci un numero:");

    userNumber = parseInt(userNumber);

    myArray.push(userNumber);

    sum = 0;
    for (let i = 0; i < myArray.length; i++) {
        sum += myArray[i];
    }
}

document.getElementById("result").innerHTML = (`Ecco i tuoi numeri: ${myArray}`);
document.getElementById("sum").innerHTML = (`Ecco la tua somma: ${sum}`);