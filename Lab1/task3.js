// let string = "  123   a b aaa b 11 1             444 je       1";
let string = prompt();

/*
let w = Array.from(new Set(string.split(' ')));
document.write(w.join(' '));
*/

function getWord(string, begin) {
    let i = begin;
    let word = "";
    while (i < string.length && string[i] != " ") {
        word += string[i];
        i++;
    }
    return word;
}

function skipWhiteSpace(string, begin) {
    let i = begin;
    while(i < string.length && string[i] == " ") {
        i++;
    }
    return i;
}

let ns = "";
let i = 0;
while (i < string.length) {
    i = skipWhiteSpace(string, i);
    let word = getWord(string, i);

    let j = i + 1;
    j = skipWhiteSpace(string, j);
    
    let flag = true;
    while (j < string.length && flag) {
        let w = getWord(string, j);
        if (word === w) {
            flag = false;
        }
        j += w.length;
        j = skipWhiteSpace(string, j);
    }

    if (flag) {
        ns += word + " ";
    }

    i += word.length;
}

console.log(ns);