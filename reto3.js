let letter = 'bici coche coche (peluche';

function isValid(letter) {
    if (/\(\)/.test(letter) || /\(.*(\[|\]|\{|\}).*\)/.test(letter)) {
        return false;
    }

    return /\(.*\)/.test(letter);
}

console.log(isValid(letter));
