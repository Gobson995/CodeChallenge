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

function plusMinus(n, arr) {
    let pos = 0, neg = 0, zeros = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) pos++;
        else if (arr[i] < 0) neg++;
        else zeros++;
    }

    console.log((pos / n).toFixed(6));
    console.log((neg / n).toFixed(6));
    console.log((zeros / n).toFixed(6));

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(n, arr);
}
