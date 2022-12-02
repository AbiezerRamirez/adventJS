function groupBy(collection, it) {
    return collection.reduce((prev, cur) => {
        const value = typeof it === 'function' ? it(cur) : cur[it];
        prev[value] = value in prev ? [...prev[value], cur] : [cur];
        return prev;
    }, {});
}

console.log(
    groupBy([1397639141184, 1363223700000], (timestamp) =>
        new Date(timestamp).getFullYear()
    )
);
