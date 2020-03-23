
/*

    阅读下面ts代码，我们看到我们为参数a明确了类型。
    参数a类型映射为一个Person的接口，其中必须有name和age参数。
    且name参数类型为string，age参数类型为number。
    通过这样明确的类型定义，我们不去看方法体，就能了解方法的作用已经传参方式。
    这样可以在编译前，更轻松的找到我们代码种错误所在。

*/


interface Person {
    name: string;
    age: number;
}

function sortName(a: Person[]) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });
    return result;
}

sortName([]);