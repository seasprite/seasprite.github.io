/*

Julia Delightly
Professor Sampson
CSD360
Module 4: Operator REDO
06 November 2022

*/

/*
The purpose of this program:
1: Start with the following two lines of JavaScript
    *var i = 842;
    *document.write(i + i % 3 / 7 - 2 + 7 ** 3);
2: Use parentheses to modify the output line to alter the result of 
    1183.2857142857142 to the following list of outputs.
    *341.14285714285717
    *1185.4
    *842.0011574074074
    *113.28571428571433
	*343.2
	*841.75 
*/

var i = 842;
//document.write(i + i % 3 / 7 - 2 + 7 ** 3);


function firstFunction(){
    let equationOne = "((i + i) % (3 / 7) - 2 + (7 ** 3))"
    let answerOne = ((i + i) % (3 / 7) - 2 + (7 ** 3));

    document.getElementById('equation').innerHTML = equationOne;
    document.getElementById('answer').innerHTML = answerOne;
}

function secondFunction(){
    let equationTwo = "(i + (i % 3) / (7 - 2) + 7 ** 3)";
    let answerTwo = (i + (i % 3) / (7 - 2) + 7 ** 3);

    document.getElementById('equation').innerHTML = equationTwo;
    document.getElementById('answer').innerHTML = answerTwo;
}

function thirdFunction(){
    let equationThree = "(i + (i % 3) / ((7 - 2) + 7) ** 3)"
    let answerThree = (i + (i % 3) / ((7 - 2) + 7) ** 3);

    document.getElementById('equation').innerHTML = equationThree;
    document.getElementById('answer').innerHTML = answerThree;
}

function fourthFunction(){
    let equationFour = "((i + i % 3 / 7) - (2 + 7) ** 3)";
    let answerFour = ((i + i % 3 / 7) - (2 + 7) ** 3);

    document.getElementById('equation').innerHTML = equationFour;
    document.getElementById('answer').innerHTML = answerFour;
}

function fifthFunction(){
    let equationFive = "((i + i) % 3 / (7 - 2) + 7 ** 3)";
    let answerFive = ((i + i) % 3 / (7 - 2) + 7 ** 3);

    document.getElementById('equation').innerHTML = equationFive;
    document.getElementById('answer').innerHTML = answerFive;
}

function sixthFunction(){
    let equationSix = "i + i % 3 / (7 - (2 + 7)) ** 3";
    let answerSix = i + i % 3 / (7 - (2 + 7)) ** 3;

    document.getElementById('equation').innerHTML = equationSix;
    document.getElementById('answer').innerHTML = answerSix;
}

function seventhFunction(){
    let originalEquation = "(i + i % 3 / 7 - 2 + 7 ** 3)";
    let originalAnswer = (i + i % 3 / 7 - 2 + 7 ** 3);

    document.getElementById('equation').innerHTML = originalEquation;
    document.getElementById('answer').innerHTML = originalAnswer;
}