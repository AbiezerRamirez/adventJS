function wrapping(gifts) {
    return gifts.map((gift) => {
        const tb = '*'.repeat(gift.length + 2);
        return `${tb}\n*${gift}*\n${tb}`;
    });
}

const gifts = ['book', 'game', 'socks'];
const wrapped = wrapping(gifts);

console.log(wrapped);
/* [
     "******\n*book*\n******",
     "******\n*game*\n******",
     "*******\n*socks*\n*******"
   ] */
