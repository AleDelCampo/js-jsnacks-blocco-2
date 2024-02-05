let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6, 7, 8];

let difference = (secondArray.length - firstArray.length);

while (firstArray.length < secondArray.length) {
    firstArray.push(difference + firstArray.length -1);
}

document.getElementById("result").innerHTML = (`Ecco la tua somma: ${firstArray}`);
document.getElementById("resultino").innerHTML = (`Ecco la tua somma: ${secondArray}`);