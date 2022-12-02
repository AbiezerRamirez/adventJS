function maxProfit(prices) {
    let profit = -1;

    prices.forEach((currentPrice, index) => {
        for (let i = index + 1; i < prices.length; i++) {
            const nextPrice = prices[i];

            if (nextPrice > currentPrice && profit < nextPrice - currentPrice) {
                profit = nextPrice - currentPrice;
            }
        }
    });

    return profit;
}

console.log(maxProfit([18, 15, 12, 11, 9, 7]));
