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


function staircase(n) {
    let space = n - 1, hashtag = 1;
    while(n--) {
        let line = '';

        for (let i = 0; i < space; i++) {
            line += ' ';
        }
        for (let j = 0; j < hashtag; j++) {
            line += '#';
        }
        console.log(line);
        
        space--;
        hashtag++;
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}