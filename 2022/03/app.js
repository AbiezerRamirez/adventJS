function distributeGifts(packOfGifts, reindeers) {
    const packageWeight = packOfGifts.reduce(
        (weight, gift) => gift.length + weight,
        0
    );

    const reindeersCapacity = reindeers.reduce(
        (capacity, reindeer) => reindeer.length * 2 + capacity,
        0
    );

    return Math.floor(reindeersCapacity / packageWeight);
}

const packOfGifts = ['book', 'doll', 'ball'];
const reindeers = ['dasher', 'dancer'];

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

console.log(distributeGifts(packOfGifts, reindeers)); // 2
