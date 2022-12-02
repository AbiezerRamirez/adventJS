function getMinJump(obstacles) {
    if (obstacles.length === 0) {
        return 1;
    }

    for (let i = 2; i <= Math.max(...obstacles) + 1; i++) {
        if (obstacles.every((obstacle) => obstacle % i !== 0)) {
            return i;
        }
    }
}

console.log(getMinJump([2, 4, 6, 8, 10]));
