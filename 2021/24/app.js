const tree = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null },
};

const tree2 = {
    value: 1,
    left: {
        value: 3,
        left: { value: 2, left: null, right: null },
        right: null,
    },
    right: {
        value: 5,
        left: null,
        right: { value: 4, left: null, right: null },
    },
};

function checkIsSameTree(treeA, treeB) {
    return (treeA?.value === treeB?.value) 
        ? !treeA && !treeB || 
            checkIsSameTree(treeA.left, treeB.left) && 
            checkIsSameTree(treeA.right, treeB.right)
        : false
}

console.log(checkIsSameTree(tree, tree)); // true
console.log(checkIsSameTree(tree, tree2)); // false
console.log(checkIsSameTree(tree2, tree2)); // true
