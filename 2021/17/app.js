const carriers = [
    ['dapelu', 5, ['midu', 'jelowing']],
    ['midu', 2, []],
    ['jelowing', 2, []],
];

const carriers2 = [
    ['lolivier', 8, ['camila', 'jesuspoleo']],
    ['camila', 5, ['sergiomartinez', 'conchaasensio']],
    ['jesuspoleo', 4, []],
    ['sergiomartinez', 4, []],
    ['conchaasensio', 3, ['facundocapua', 'faviola']],
    ['facundocapua', 2, []],
    ['faviola', 1, []],
];

function countPackages(carriers, carrierID) {
    const carrier = carriers.find((element) => element[0] === carrierID);
    return carrier[2].reduce((count, element) => {
        return count + countPackages(carriers, element);
    }, carrier[1]);
}

console.log(countPackages(carriers2, 'camila'));
