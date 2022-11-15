function decodeNumber(symbols) {
    const values = {
        '.': 1,
        ',': 5,
        ':': 10,
        ';': 50,
        '!': 100,
    };

    return symbols.split('').reduce((value, symbol, index, symbolsArray) => {
        const nextSymbol = symbolsArray[index + 1];

        return nextSymbol && values[symbol] < values[nextSymbol]
            ? (value -= values[symbol])
            : (value += values[symbol]);
    }, 0);
}

console.log(decodeNumber('...'));
