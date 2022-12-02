function fixFiles(files) {
    let names = {};

    return files.map((name) => {
        names[name] = !(name in names) ? 0 : ++names[name];
        return name + (names[name] !== 0 ? `(${names[name]})` : '');
    });
}

console.log(fixFiles(['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']));
