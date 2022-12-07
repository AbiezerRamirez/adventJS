function fitsInOneBox(boxes) {
    return boxes
        .sort((a, b) => b.l - a.l)
        .every((box, index) => {
            if (index === 0) {
                return true;
            }

            const prevBox = boxes[index - 1];

            return box.l < prevBox.l && box.w < prevBox.w && box.h < prevBox.h;
        });
}

console.log(
    fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
    ])
); // true
