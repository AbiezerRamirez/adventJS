function wrapGifts(gifts) {
    if (gifts.length === 0) {
        return [];
    }

    const giftsWrap = gifts.map((gift) => `*${gift}*`);
    const cover = '*'.repeat(giftsWrap[0].length);

    return [cover, ...giftsWrap, cover];
}

console.log(wrapGifts(['🏈🎸', '🎮🧸']));
