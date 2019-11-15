

/*

    1.属性类接口
    2.函数类接口
    3.可索引接口
    4.类类型接口
    5.接口扩展


*/


/** 接口的作用：
 *    在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范。
 *    在程序设计里面，接口起到了一种限制和规范的作用。接口定义了某一批类所需要遵循的规范。
 *    接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。
 *    TypeScript中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。       
 */

 //1、属性接口   对json的约束
    
    // function printLabel(labelInfo:{label:string}):void {
    //     console.log(labelInfo.label)
    // }

    // printLabel('label');    //错误写法

    // printLabel({name:'张三'}); // 错误写法

    // printLabel({label:'张三'});    //正确写法

    //对批量方法传入参数进行约束。

    //接口，行为和动作的规范，对批量方法进行约束


        // // // 就是传入对象的约束   属性接口
        // interface FullName {
        //     firstName:string;
        //     lastName:string;
        // }
    
        // function printName(name:FullName) {

        //     //必须传入对象 firstName  secondName

        //     console.log(name.firstName + '--' + name.lastName);
        // }

        // var obj = {
        //     age:20,
        //     firstName:'张',
        //     lastName:'三',
        // }

        // printName(obj);

//2、接口可选属性

    // interface FullName {

    //     firstName:string;
    //     lastName?:string;


    // }

    // function getInfo(name:FullName) {
    //     console.log(name.firstName + '---' + name.lastName);
    // }

    // getInfo({
    //     firstName:'张',
    //     lastName:'三',
    // })

    /*
    
        ts 接口封装ajax

        $.ajax ({
            type: "GET",
            url: "test.json",
            data: {},
            dataType: "json"
        })
    
    */

    // interface Config {
        
    //     type:string;
        
    //     url:string;

    //     data?:string;

    //     dataType:string;

    // }

    // function ajax(config:Config) {
        
    //     var xhr = new XMLHttpRequest();

    //     xhr.open(config.type, config.url, true);

    //     xhr.send(config.data);

    //     xhr.onreadystatechange = function() {
    //         if(xhr.readyState === 4 && xhr.status === 200) {
    //             console.log('succed')

    //             if(config.dataType === 'json') {
    //                 console.log(JSON.parse(xhr.responseText));
    //             } else {
    //                 console.log(xhr.responseText);
    //             }
    //         }
    //     }
    // }

    // ajax({
    //     type: 'get',
    //     url:'http://a.itying.com/api/productlist',
    //     dataType:'json',
    // })

//3、函数类型接口：对方法传入的参数  以及返回值进行约束

// 拼接字符串方法的函数类型接口

    // interface Joint {
        
    //     (key:string,value:string):string;

    // }

    // var join:Joint = function(key:string,value:string):string {

    //     return key + value;

    // }

    // console.log(join('名字:', '张三'));

//4、可索引接口：对数组、对象的约束（不常用）

    //对数组的约束
        // interface UserArr {
            
        //     [index:number]:string

        // }

        // var arr:UserArr = ['123','234'];
        // console.log(arr[0]);
    
    //对对象的约束
        
        // interface UserObj {
            
        //     [index:string]:string;

        // }

        // var arr:UserObj = {name:'张三'};       // 正确
        // var arr:UserObj = {name:'张三',age:20};// 错误
    
//5、类类型接口：对类的约束  和抽象类有点相似

    // interface Animal {

    //     name:string;
        
    //     eat(str:string):void;

    // }

    // class Dog implements Animal {
        
    //     name:string;
    //     constructor(name:string){
    //         this.name = name;
    //     }

    //     eat():void {
    //         console.log(this.name + '吃狗粮');
    //     }

    // }

    // var d = new Dog('小黑');
    // d.eat();


    // class Cat implements Animal {
        
    //     name:string;
    //     constructor(name:string){
    //         this.name = name;
    //     }

    //     eat(food:string):void {
    //         console.log(this.name + '吃' + food);
    //     }

    // }

    // var c = new Cat('小花');
    // c.eat('猫粮');
        
//6、接口扩展，接口可以继承接口

    interface Animal {

        eat():void;

    }

    interface Person extends Animal {

        work():void;

    }

    class Programmer {

        name:string
        constructor(name:string) {
            this.name = name;
        }

        coding() {
            console.log(this.name + '正在写ts');
        }

    }


    class  Web extends Programmer implements Person {

        // public name:string;
        constructor(name:string) {
            // this.name = name;
            super(name);
        }

        eat():void{
            console.log(this.name + '在吃饭');
        }

        work():void {
            console.log(this.name + '在工作');
        }

    }

    var w = new Web('齐祥');
    w.work();
    w.eat();
    w.coding();