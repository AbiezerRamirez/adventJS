const carta = 'bici coche  balón _playstation bici coche peluche';

function listGifts(letter) {
    const gifts = letter
        .split(' ')
        .filter((item) => !/^_/.test(item) && item)
        .reduce((count, value) => {
            count[value] = (count[value] || 0) + 1;
            return count;
        }, {});

    return gifts;
}

console.log(listGifts(carta));
