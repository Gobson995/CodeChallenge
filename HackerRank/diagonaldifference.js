'use strict';

const fs = require('fs');

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


function diagonalDifference(arr) { 
    const tam = arr.length;
    
    let col = 0, lin = 0;

    let diagp = 0, diags = 0;

    for (let i = 0; i < tam; i++) {
        diagp += arr[lin][col];

        col++;
        lin++;
    }

    col = tam - 1;
    lin = 0;

    for (let i = 0; i < tam; i++) {
        diags += arr[lin][col];

        lin++;
        col--;
    }

    const result = Math.abs(diagp - diags);

    return result;
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
