function checkSledJump(heights) {
    if (heights.lenght < 3) {
        return false;
    }

    const maxHeight = Math.max(...heights);
    const maxHeightIndex = heights.indexOf(maxHeight);

    if (heights[heights.length - 1] === maxHeight) {
        return false;
    }

    for (let i = 1; i < heights.length; i++) {
        const prevElement = heights[i - 1];
        const element = heights[i];

        if (i < maxHeightIndex && prevElement >= element) {
            return false;
        }

        if (i > maxHeightIndex && element >= prevElement) {
            return false;
        }
    }

    return true;
}

console.log(checkSledJump([1, 2, 3, 2, 1]));
