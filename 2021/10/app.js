function getCoins(change) {
    const coins = [50, 20, 10, 5, 2, 1];
    const count = [0, 0, 0, 0, 0, 0];

    while (change !== 0) {
        const coin = coins.find((coin) => change - coin >= 0);
        count[coins.indexOf(coin)] += 1;
        change -= coin;
    }

    return count.reverse();
}

console.log(getCoins(16));
