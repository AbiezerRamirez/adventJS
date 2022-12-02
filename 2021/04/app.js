function createXmasTree(height) {
    let tree = '';

    for (let index = 1; index <= height; index++) {
        tree +=
            '_'.repeat(height - index) +
            '*'.repeat(index * 2 - 1) +
            '_'.repeat(height - index) +
            '\n';
    }

    tree += '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1) + '\n';
    tree += '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);

    return tree;
}

console.log(createXmasTree(5));
