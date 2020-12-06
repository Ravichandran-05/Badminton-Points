let n1 = document.getElementById('num1');
let sum1 = 0;

function plus1() {

    sum1 += 1;
    n1.innerHTML = sum1;
}

function minus1() {
    sum1 -= 1;
    n1.innerHTML = sum1;
}

let n2 = document.getElementById('num2');
let sum2 = 0;

function plus2() {
    sum2 += 1;
    n2.innerHTML = sum2;
}

function minus2() {
    sum2 -= 1;
    n2.innerHTML = sum2;
}

let n11 = document.getElementById('num11');
let sum11 = 0;

function plus11() {
    sum11 += 1;
    n11.innerHTML = sum11;
}

function minus11() {
    sum11 -= 1;
    n11.innerHTML = sum11;
}

let n21 = document.getElementById('num21');
let sum21 = 0;

function plus21() {
    sum21 += 1;
    n21.innerHTML = sum21;
}

function minus21() {
    sum21 -= 1;
    n21.innerHTML = sum21;
}

let n12 = document.getElementById('num12');
let sum12 = 0;

function plus12() {
    sum12 += 1;
    n12.innerHTML = sum12;
}

function minus12() {
    sum12 -= 1;
    n12.innerHTML = sum12;
}

let n22 = document.getElementById('num22');
let sum22 = 0;

function plus22() {
    sum22 += 1;
    n22.innerHTML = sum22;
}

function minus22() {
    sum22 -= 1;
    n22.innerHTML = sum22;
}


let tabledata = 0;
let n = 1;

function displayDetails(event) {
    event.preventDefault();
    var match = document.getElementById("match-points")
    var num1 = sum1;
    var num2 = sum2;

    var table = document.getElementById("myrow");
    var row = table.insertRow(n);

    var cell1 = row.insertCell(0);
    cell1.innerHTML = num1;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = num2;
    cell1.style.textAlign = "center";
    cell2.style.textAlign = "center";
     if (num1 > num2) {
        var dif1 = num1 - num2;
        alert("Team A won the match by " + dif1 + " points...");
    } else {
        var dif2 = num2 - num1;
        alert("Team B won the match by " + dif2 + " points...");
    }
    tableData++;
    n++;
    match.reset();

}

function resett() {
    document.getElementById("num1").innerHTML = "0";
    document.getElementById("num2").innerHTML = "0";
    sum1 = 0;
    sum2 = 0;
}




function displayDetails1(event) {
    event.preventDefault();
    var match = document.getElementById("match-points1")
    var num11 = sum11;
    var num21 = sum21;

    var table = document.getElementById("myrow1");
    var row = table.insertRow(n);

    var cell1 = row.insertCell(0);
    cell1.innerHTML = num11;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = num21;
    cell1.style.textAlign = "center";
    cell2.style.textAlign = "center";
     if (num11 > num21) {
        var dif11 = num11 - num21;
        alert("Team B won the match by " + dif11 + " points...");
    } else {
        var dif21 = num21 - num11;
        alert("Team C won the match by " + dif21 + " points...");
    }
    tableData++;
    n++;
    match.reset();

}

function resett1() {
    document.getElementById("num11").innerHTML = "0";
    document.getElementById("num21").innerHTML = "0";
    sum11 = 0;
    sum21 = 0;
}




function displayDetails2(event) {
    event.preventDefault();
    var match = document.getElementById("match-points2")
    var num12 = sum12;
    var num22 = sum22;

    var table = document.getElementById("myrow2");
    var row = table.insertRow(n);

    var cell1 = row.insertCell(0);
    cell1.innerHTML = num12;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = num22;
    cell1.style.textAlign = "center";
    cell2.style.textAlign = "center";
 if (num12 > num22) {
        var dif12 = num12 - num22;
        alert("Team C won the match by " + dif12 + " points...");
    } else {
        var dif22 = num22 - num12;
        alert("Team A won the match by " + dif22 + " points...");
    }
    tableData++;
    n++;
    match.reset();

}

function resett2() {
    document.getElementById("num12").innerHTML = "0";
    document.getElementById("num22").innerHTML = "0";
    sum12 = 0;
    sum22 = 0;
}

function junction() {
    var i=5;
    var randomNumber = Math.floor(Math.random() * i) + 1;

    if (randomNumber == 1) {
        document.getElementById("submitt").src = "odd.png";

    } else {
        document.getElementById("submitt").src = "even.png";
    }
}

function junction1() {
    document.getElementById("submitt").src = "toss.jpg";
}
