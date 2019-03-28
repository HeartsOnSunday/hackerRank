'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const N = parseInt(readLine(), 10);
    //console.log(N);
    if (N % 2 == 0 && N > 20) {
        console.log("Not Weird");
    } else if (N % 2 == 0 && N <= 20 && N >= 6){
console.log("Not Weird");
    } else if (N % 2 == 0 && N <= 5 && N >=2) {
console.log("Not Weird");
    } else if (!N % 2 == 0) {
        console.log("Weird", N);
    }
}

//Test N w console.log();
//sort N if(even) or if (odd) w conditionals using % and 2
//test with console.log();
//test conditional to print 'Weird' w console.log() for even numers over 20
//test conditional to sort even numbers greater than 6 and less than 20
//test conditional to sort even numbers less than or equal to 5 and greater than or equal to 2

