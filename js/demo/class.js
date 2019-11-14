"use strict";
/*
TypeScript中的类

    1.类的定义
    2.继承
    3.类里面的修饰符
    4.静态属性 静态方法
    5.抽象类 继承 多态

*/
//1、 ts中类的定义
// class Person {
//     name:string;     //属性  前面省略了public关键词
//     constructor(name:string){   // 构造函数    实例化类的时候触发的方法
//         this.name = name;
//     }
//     run():void {
//         console.log(this.name + '在运动');
//     }
//     getName():string {
//         return this.name;
//     }
//     setName(name:string):void {
//         this.name = name;
//     }
// }
// var person = new Person('张三');
// person.run();
// console.log(person.getName());
// person.setName('李四');
// console.log(person.getName());
//2、 ts中实现继承  extend、 super
// class Person {
//         name:string;   
//         constructor(name:string){ 
//             this.name = name;
//         }
//         run():void {
//             console.log(this.name + '在运动');
//         }
//         getName():string {
//             return this.name;
//         }
//         setName(name:string):void {
//             this.name = name;
//         }
//     }
//     var person = new Person('王五');
//     person.run();
//     class Web extends Person {
//         constructor(name:string){
//             super(name);   // super表示调用父类的构造函数
//         }
//     }
//     var w = new Web('李四');
//     w.run();
// 2.1、ts中继承的探讨    父类的方法和子类的方法一致问题
// class Person {
//     name:string;   
//     constructor(name:string){ 
//         this.name = name;
//     }
//     run():void {
//         console.log(this.name + '在运动');
//     }
//     getName():string {
//         return this.name;
//     }
//     setName(name:string):void {
//         this.name = name;
//     }
// }
// class Web extends Person {
//     constructor(name:string){
//         super(name);   // super表示调用父类的构造函数
//     }
//     run():void {
//         console.log(this.name + '在运动.字类');
//     }
//     work():void {
//         console.log(this.name + '在工作');
//     }
// }
// var w = new Web('李四');
// w.work();
// w.run();
//3、 类里面的修饰符  typeScript 里面定义属性的时候给我们提供了 三种修饰符
/*
    public:       公有类型      在类里面、子类、类外面都可以访问
    protected     保护类型      在类里面、子类里面可以访问，在类外部不可以访问
    private       私有类型      在类里面可以访问，子类、类外部都没法访问

    属性如果不加修饰符，默认就是公有（public）

*/
// class Person {
//     public name:string;
//     constructor(name:string){ 
//         this.name = name;
//     }
//     run():void {
//         console.log(this.name + '在运动');
//     }
// }
// class Web extends Person {
//     constructor(name:string){
//         super(name);  
//     }
//     work():void {
//         console.log(this.name + '在工作');
//     }
// }
// var w = new Web('李四');
// w.work();
//  类外部没法访问保护类型的属性
// var person = new Person('王五');
// console.log(person.name);
//4、静态属性  静态方法
// class Person {
//     public name:string;
//     public age:number = 20;
//     static sex = '男';
//     constructor(name:string){ 
//         this.name = name;
//     }
//     run():void {
//         console.log(this.name + '在运动');
//     }
//     static print() {
//         console.log('static function');
//         // console.log(this.sex);
//         // console.log(Person.sex);
//         // console.log(this.age);
//     }
// }
// var person = new Person('王五');
// person.run();                   // 调用实例方法
// Person.print();                 // 调用静态方法，里面没法直接调用类里面的属性
//5、多态：父类定义一个方法不去实现，让继承它的子类去实现  每一个子类有不同的表现
//多态属性继承，是继承的一种表现
// class Animal {
//     name:string
//     constructor(name:string){
//         this.name = name;
//     }
//     eat():void {            // 具体吃什么？继承它的子类去实现，每一个子类的表现不一样
//         console.log('吃的方法');
//     }
// }
// class Dog extends Animal {
//     constructor(name:string) {
//         super(name)
//     }
//     eat():void {
//         console.log(this.name + '吃狗粮');
//     }
// }
// class Cat extends Animal {
//     constructor(name:string) {
//         super(name)
//     }
//     eat():void {
//         console.log(this.name + '吃猫粮');
//     }
// }
//6、抽象方法以及抽象类
//typeScript中的抽象类，它是提供 其他类继承的基类，不能直接被实例化。
//用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现，并且必须再派生类中实现。
//abstract抽象方法只能放在抽象类里面
//抽象类和抽象方法用来定义标准
//例如下面Animal 这个类，要求它的子类必须包含eat方法。
// abstract class Animal {
//     public name:string;
//     abstract eat():any;
//     constructor(name:string) {
//         this.name = name;
//     }
// }
// var a = new Animal();     //错误的写法，抽象类无法被实例化
// class Dog extends Animal {
//     //抽象类的子类必须实现抽象类里面的抽象方法
//     constructor(name:string) {
//         super(name);
//     }
//     eat(){
//         console.log(this.name + '吃狗粮');
//     }
// }
// var d = new Dog('小黑');
// d.eat();
