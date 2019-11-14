interface People {
    name: string;
    age: number;
}

function sortName(a: People[]) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });
    return result;
}

sortName([]);