const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*'],
];

const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*'],
];

function canMouseEat(direction, game) {
    const mousePosition = game.reduce(
        (position, subArray, index) =>
            subArray.indexOf('m') !== -1
                ? { y: index, x: subArray.indexOf('m') }
                : position,
        { y: -1, x: -1 }
    );

    let newPosition = null;

    if (direction === 'up') {
        newPosition = game[mousePosition.y - 1]?.[mousePosition.x];
    } else if (direction === 'down') {
        newPosition = game[mousePosition.y + 1]?.[mousePosition.x];
    } else if (direction === 'right') {
        newPosition = game[mousePosition.y]?.[mousePosition.x + 1];
    } else if (direction === 'left') {
        newPosition = game[mousePosition.y]?.[mousePosition.x - 1];
    }

    return newPosition === '*';
}

console.log(canMouseEat('up', room)); // false
console.log(canMouseEat('down', room)); // true
console.log(canMouseEat('right', room)); // false
console.log(canMouseEat('left', room)); // false

console.log(canMouseEat('up', room2)); // false
console.log(canMouseEat('down', room2)); // false
console.log(canMouseEat('right', room2)); // true
console.log(canMouseEat('left', room2)); // false
