function daysToXmas(date) {
    const xmas = new Date('Dec 25, 2021');
    return Math.ceil((xmas.getTime() - date.getTime()) / (1000 * 3600 * 24));
}

console.log(daysToXmas(new Date('Dec 26, 2021')));
