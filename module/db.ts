
var dbUrl='xxxxxx';


export function getData():any[]{

    console.log('获取数据库的数据');

    return [

        {

            title:'121312'
        },
        {

            title:'121312'
        }
    ]
}



export function save(){

    console.log('保存数据成功');
}

// export { dbUrl, getData, save }

/*

export default 默认导出
每个模块都可以有一个default导出。默认导出使用default关键字标记，并且一个模块只能够有一个default导出。需要使用一种特殊的导入形式来导入


*/


// export default getData;