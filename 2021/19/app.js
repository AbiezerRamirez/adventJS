function learn(time, courses) {
    let maxHorus = 0;
    let result = null;

    courses.forEach((hours, index, arr) => {
        for (let i = index + 1; i < courses.length; i++) {
            const hours2 = courses[i];
            if (hours + hours2 > maxHorus && hours + hours2 <= time) {
                maxHorus = hours + hours2;
                result = [index, i];

                if (maxHorus === time) {
                    arr.length = index + 1;
                }
            }
        }
    });

    return result;
}

console.log(learn(5, [5, 5, 5]));
