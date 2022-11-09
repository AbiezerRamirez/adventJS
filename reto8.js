function maxProfit(prices) {
    let maxValue = Math.max(...prices);

    return maxValue;
}

console.log(maxProfit([39, 18, 29, 25, 34, 32, 5]));
