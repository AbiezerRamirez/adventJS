function canReconfigure(from, to) {
    if (from.length !== to.length) {
        return false;
    }

    for (let i = 0; i < to.length; i++) {
        const characterFrom = from[i];
        const characterTo = to[i];

        const indexesFrom = [
            ...from.matchAll(new RegExp(characterFrom, 'g'))
        ].map((a) => a.index);

        const indexesTo = [
            ...to.matchAll(new RegExp(characterTo, 'g'))
        ].map((a) => a.index);

        if (indexesFrom.toString() !== indexesTo.toString()) {
            return false;
        }
    }

    return true;
}

const from = 'XBOX';
const to = 'XOBX';

console.log(canReconfigure(from, to));