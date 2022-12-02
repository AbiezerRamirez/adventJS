function missingReindeer(ids) {
    for (let i = 0; i <= Math.max(...ids) + 1; i++) {
        if (!ids.includes(i)) {
            return i;
        }
    }
}

console.log(missingReindeer([0, 1]));
