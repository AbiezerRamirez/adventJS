const almacen = {
    estanteria1: {
        cajon1: {
            producto1: 'coca-cola',
            producto2: 'fanta',
            producto3: 'sprite',
        },
    },
    estanteria2: {
        cajon1: 'vacio',
        cajon2: {
            producto1: 'pantalones',
            producto2: 'camiseta',
        },
    },
};

function contains(store, product) {
    let finded = false;

    for (let key in store) {
        if (typeof store[key] === 'object') {
            finded = contains(store[key], product);
        } else {
            if (product === store[key]) {
                return true;
            }
        }
    }
    return finded;
}

console.log(contains(almacen, 'camiseta'));
