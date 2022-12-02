function canCarry(capacity, trip) {
    const stops = trip.reduce((stops, element) => {
        for (let i = element[1]; i < element[2]; i++) {
            stops[i] = stops[i] + element[0] || element[0];
        }

        return stops;
    }, {});

    return Object.values(stops).every((stop) => stop <= capacity);
}

console.log(
    canCarry(4, [
        [2, 5, 8],
        [3, 6, 10],
    ])
);
