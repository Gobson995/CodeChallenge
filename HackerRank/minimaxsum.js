'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function miniMaxSum(arr) {
    let sum = 0;

    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i < 5; i++) {
        sum += arr[i];

        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    console.log((sum - max) + ' ' + (sum - min));
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
