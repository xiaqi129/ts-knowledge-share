/*

    TypeScript中为了使编码更规范，更有利于维护，增加了类型效验，在TypeScript中主要给我们提供了以下数据类型


        布尔类型（boolean）
        数字类型（number）
        字符串类型（string）
        数组类型（array）
        元组类型（tuple）
        枚举类型（enum）
        任意类型（any）
        null 和 undefined
        void 类型
        never类型

*/

// var flag:boolean = true;
// flag = 123;

// var num:number = 123;
// num = '123';

// var str:string = '123';
// str = false;

// 数组类型

    // var array = ['1','2'];    //ES5定义数组

    // ts 中定义数组的第一种方法
    // var array: number[] = [11, 22, 33];

    // ts 中定义数组的第二种方法
    // var array1: Array<number> = [11, 22, 33];

// 元组类型:Tuple(给数组中每一个位置指定一个类型，属于数组的一种)

    let arr: [number, string] = [123, 'ts'];

/*
    枚举类型
        随着计算机的不断普及，程序不仅只用于数值计算，还更广泛地用于处理非数值的数据。
        例如：性别、月份、星期几、颜色、单位名、学历、职业等，都不是数值类型。
        在其他程序设计语言中，一般用一个数值代表一个状态，这种处理方法不直观、易读性差、
        如果能在程序中用自然语言中相应含义的单词来代表某一状态，则程序就很容易阅读和理解。
        也就是说，事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示它的每一个值，
        这种方法成为枚举方法，用这种方法定义的类型称为枚举类型。


        enum 枚举名 {
            标识符[=整型常数],
            标识符[=整型常数],
            ...
            标识符[=整型常数],
        };

*/

    // enum Flag { success = 1, error = 2 };
    // let s: Flag = Flag.success;
    // console.log(s);

        
    // enum Color { red, blue, 'orange' };
    // let c: Color = Color.blue;
    // console.log(c);            // 如果标识符没有赋值，它的值就是下标


    // enum Color { red, blue = 3, 'orange' };
    // let c: Color = Color.blue;
    // console.log(c);            
    // console.log(Color.orange);   


// 任意类型（any）

    // var num: any = 123;
    // num = '1';
    // num = true;

    // 任意类型的用法

        // var oBox:any = document.getElementById('box');
        // oBox.style.color = 'red';


// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。

    // var a:number // 错误用法

    
    // var a:undefined //正确用法
    
    // console.log(a);
    // var a: number | undefined

    // var a: number | null | undefined


// void类型： typeScript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值

    // function run(): void {
    //     console.log('run');
    // }
    // run();

// never类型：是其他类型（包括null和undefined）的子类型，代表从不会出现的值。

// 这意味着声明never的变量只能被never类型所赋值。

    // var nev: never;

    // nev = 123;  //错误的用法

    // 匿名自执行函数
    // nev = (() => {
    //     throw Error('error');
    // })()