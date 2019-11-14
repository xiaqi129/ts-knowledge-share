"use strict";
/*

    typeScript中的泛型

    1.泛型的定义
    2.泛型函数
    3.泛型类
    4.泛型接口



*/
/*1、泛型的定义

    泛型，在软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。
    组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

    在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。
    这样用户就可以以自己的数据类型来使用组件。

    通俗理解，泛型就是解决 类、接口、方法的复用性，以及对不特定数据类型的支持。

*/
//2、泛型函数
//只能返回string类型的数据
// function getData(value:string):string {
//     return value;
// }
//同时返回string类型和number类型   
//两个方法实现返回string和number(造成代码冗余的问题)
// function getData1(value:string):string {
//     return value;
// }
// function getData2(value:number):number {
//     return value;
// }
// any可以实现返回string和number类型（但是any放弃了类型检查，导致传入参数类型和返回参数类型不一致）
// function getData(value:any):any {
//     return 'hahhaha';
// }
// getData(123);
// getData('str');
// 那么当我想实现传入参数和返回参数一致的问题的时候，泛型就派上了用场。
//T表示泛型，具体什么类型，是调用这个方法的时候决定的。
// function getData<T>(value:T):T {
//     return value;
// }
// getData(<number>123);
//3、泛型类：泛型可以帮助我们避免重复的代码以及对不特定数据类型的支持（类型效验）
//比如有个最小堆算法，需要同时支持返回数字和字符串(a - z)两种类型。通过类的泛型来实现
// 标准的类实现返回数字最小
// class MinClass {
//     public list:number[] = [];
//     add(num:number) {
//         this.list.push(num);
//     }
//     min():number {
//         var minNum = this.list[0];
//         for (let i = 0; i < this.list.length; i++) {
//             if(minNum > this.list[i]) {
//                 minNum = this.list[i];
//             }
//         }
//         return minNum;
//     }
// }
// var m = new MinClass();
// m.add(2);
// m.add(22);
// m.add(23);
// m.add(13);
// console.log(m.min());
//类的泛型
// class MinClass<T> {
//     public list:T[]= [];
//     add(value:T):void {
//         this.list.push(value);
//     }
//     min():T {
//         var minNum = this.list[0];
//         for (let i = 0; i < this.list.length; i++) {
//             if(minNum > this.list[i]) {
//                 minNum = this.list[i];
//             }
//         }
//         return minNum;
//     }
// }
// var m1 = new MinClass<number>();    /*  实例化类  并且指定了类的T代表类型是number  */
// m1.add(2);
// m1.add(1);
// m1.add(3);
// console.log(m1.min());
// var m2 = new MinClass<string>();    /*  实例化类  并且指定了类的T代表类型是string  */
// m2.add('v');
// m2.add('a');
// m2.add('c');
// console.log(m2.min());
//4、泛型接口
//函数类型接口
// interface ConfigFn {
//     (value1: string,value2: string):string
// }
// var setData:ConfigFn = function(value1:string,value2:string):string {
//     return value1 + value2;
// }
// console.log(setData('name:','xiaqi'));
// 泛型接口
// interface ConfigFn <T>{
//     (value:T):T;
// }
// function getData<T>(value:T):T {
//     return value;
// }
// getData(<string>'张三');  // 正确写法
// getData(<string>123);    //错误写法
// var myGetData:ConfigFn<string> = getData;
// myGetData('20');          // 正确写法
// myGetData(20);            // 错误写法
//5、深入理解泛型类，下面我们看看把类当作参数的泛型类
/*

1.定义个类
2.把类作为参数来约束数据传入的类型

*/
/*
    定义一个User的类，这个类的作用就是映射数据库字段
    然后定义一个MysqlDB的类，这个类用于操作数据库
    然后把User类作为参数传入到MysqlDb中


    var user = new User({
        username: 'xiaqi',
        password: '123456'
    })

    var Db = new MysqlDb();
    Db.add(user);


 */
//把类作为参数来约束数据传入的类型
// class User {
//     username:string | undefined;
//     password:string | undefined;
// }
// class Article {
//     title:string | undefined;
//     desc:string | undefined;
//     status:number  | undefined;
// }
// class MysqlDb {
//     add(user:User):boolean {
//         console.log(user);
//         return true;
//     }
//     // add(info:Article):boolean {
//     //     console.log(info);
//     //     return true;
//     // }
// }
// var Db = new MysqlDb();
// var u = new User();
// u.username = 'xiaqi';
// u.password = '123456';
// Db.add(u);
// // var a = new Article();
// // a.title = '国内新闻';
// // a.desc = '新闻内容';
// // a.status = 1;
// // Db.add(a);
// 操作数据库的泛型类
// class MysqlDb<T> {
//     add(info:T):boolean {
//         console.log(info);
//         return true;
//     }
// }
//想给User表增加数据
// 1、定义一个User类，和数据库进行映射
// class User {
//     username:string | undefined;
//     password:string | undefined;
// }
// var u = new User();
// u.username = 'xiaqi';
// u.password = '123456';
// var Db = new MysqlDb();
// Db.add(u);
// Db.add('1231')
//2、定义一个ArticleCate类，和数据库进行映射
// class ArticleCate {
//     title:string | undefined;
//     desc:string | undefined;
//     status:number  | undefined;
//     constructor(
//         params:{
//         title:string | undefined,
//         desc:string | undefined,
//         status?:number | undefined,
//     }
//     ){
//         this.title = params.title;
//         this.desc = params.desc;
//         this.status = params.status;
//     }
// }
// var a = new ArticleCate({
//     title:'分类',
//     desc:'111111',
// })
// // 类当作参数的泛型类
// var db = new MysqlDb<ArticleCate>();
// db.add(a);
