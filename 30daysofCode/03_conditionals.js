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
    console.log(N);
    console.log(N);
    if (N % 2 == 0) {
       // console.log("N is even:", N);
    } else if (!N % 2 == 0) {
        console.log("Weird");
    }
}

//Test N w console.log();
//sort N if(even) or if (odd) w conditionals using % and 2
//test with console.log();
//odd numbers will print 'Weird' w console.log()