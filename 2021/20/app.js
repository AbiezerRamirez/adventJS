function pangram(letter) {
    let abc = 'abcdefghijklmnñopqresuvwxyz';

    letter = letter
        .replace(/[áä]/gi, 'a')
        .replace(/[éë]/gi, 'e')
        .replace(/[íï]/gi, 'i')
        .replace(/[óö]/gi, 'o')
        .replace(/[úü]/gi, 'u');

    return abc
        .split('')
        .every((element) => letter.toLowerCase().includes(element));
}

console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho'));
