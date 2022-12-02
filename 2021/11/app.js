function shouldBuyFidelity(times) {
    const entrada = 12 * times;
    let card = 250;

    for (let i = 1; i <= times; i++) {
        card += 12 * Math.pow(0.75, i);
    }

    return entrada > card;
}

console.log(shouldBuyFidelity(100));
