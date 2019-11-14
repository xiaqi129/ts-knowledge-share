"use strict";
/*

    typScript中的函数

        1、函数的定义
        2、可选参数
        3、默认参数
        4、剩余参数
        5、函数重载
        6、箭头函数   es6


*/
// 1、函数的定义
/*  以前es5定义函数的方法

    // 函数声明法
    function run() {
        return 'run';
    }

    // 匿名函数
    var run2 = function() {
        return 'run2';
    }

*/
// typeScript定义函数的方法（参数和返回值指定类型）
//函数声明法
//正确写法
// function run():string {   
//     return 'run';
// }
//错误写法
// function run():number {   
//     return 'run';
// }
//匿名函数
// var fun2 = function():number {
//     return 123;
// }
// ts中定义方法传参
// function getInfo(name:string,age:number):string {
//     return `${name} --- ${age}`;
// }
//2、方法可选参数
// es5里面方法的实参和形参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数
// function getInfo(name:string,age?:number):string {
//     if(age) {
//         return `${name} --- ${age}`;
//     } else {
//         return `${name} --- 年龄保密`;
//     }
// }
// 注意：可选参数必须配置到参数的最后面
//3、默认参数
// es5里面没法设置默认参数，es6和ts中都可以设置默认参数
// function getInfo(name:string,age:number=20):string {
//     if(age) {
//         return `${name} --- ${age}`;
//     } else {
//         return `${name} --- 年龄保密`;
//     }
// }
// console.log(getInfo('张三'));
// console.log(getInfo('李四',30));
//4、剩余参数
// function sum(a:number,b:number,c:number,d:number):number {
//     return a + b + c + d;
// }
// console.log(sum(1,2,3,4));
//三点运算符接收形参传过来的值
// function sum(...result:number[]):number {
//     var sum = 0;
//     for (var i = 0; i<result.length;i++) {
//         sum += result[i];
//     }
//     return sum;
// }
// console.log(sum(1,2,3,4));
//另一种剩余参数的写法
// function sum(a:number, b:number, ...result:number[]):number {
//     var sum = a + b;
//     for (var i = 0; i<result.length;i++) {
//         sum += result[i];
//     }
//     return sum;
// }
// console.log(sum(1,2,3,4,5,6));
//5、函数重载
// java 中方法的重载：重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况。
// typeScript 中的重载：通过为同一个函数提供多个函数类型来达到多种功能的目的。
// ts为了兼容es5 以及es6 重载的写法和java中有区别。
// es5中出现同名方法，下面的方法会覆盖上面的方法。
/*
    function css(config) {

    }

    function css(config,value) {

    }

*/
// ts 中的重载
// function getInfo(name:string):string;
// function getInfo(age:number):number;
// function getInfo(str:any):any {
//     if(typeof str === 'string'){
//         return '我叫' + str;
//     } else {
//         return '我的年龄是' + str;
//     }
// }
// console.log(getInfo('张三'));   // 正确
// console.log(getInfo(30));       // 正确
// console.log(getInfo(true));     // 错误
// function getInfo(name:string):string;
// function getInfo(name:string, age:number):string;
// function getInfo(name:any, age?:any):any {
//     if(age) {
//         return `我叫：${name} 我的年龄是 ${age}`;
//     } else {
//         return `我叫：${name}`;
//     }
// }
// console.log(getInfo('张三'));       //正确
// console.log(getInfo('李四', 20));   //正确
// console.log(getInfo(123));          // 错误
//6、箭头函数    es6
// es5 的写法
// setTimeout(function() {
//     console.log('es5');
// }, 1000);
// es6 的箭头函数
// setTimeout(() => {
//     console.log('es6');
// }, 1000);
