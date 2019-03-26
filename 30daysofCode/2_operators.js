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

// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
    let totalCost = Math.round(parseFloat(meal_cost) + (parseFloat(tip_percent / 100).toFixed(2) * meal_cost) + (parseFloat(tax_percent / 100).toFixed(2) * meal_cost));
    console.log(totalCost);
    return totalCost
    


    
   /* let totalCost = parseFloat((mealTipTax).toFixed(2))
    console.log(totalCost);
    */

}

function main() {
    const meal_cost = parseFloat(readLine());

    const tip_percent = parseInt(readLine(), 10);

    const tax_percent = parseInt(readLine(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}
