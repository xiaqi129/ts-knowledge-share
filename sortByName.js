
/*
    阅读下面这个JS方法，我们知道它获得一个参数a。
    那么关于这个参数a的任何信息，我们都不清楚。
    我们只能通过去阅读这个方法，来推测这个参数a的类型格式。

*/


function sortName(a) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });
    return result;
}

sortName([]);
