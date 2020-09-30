'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function factorial(x)
{
     var ans=1; 
              
            for (var i = 2; i <= x; i++) 
                ans = ans * i; 
            return ans;
}



function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}