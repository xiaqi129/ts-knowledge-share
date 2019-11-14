/*

功能：定义一个操作数据库的库  支持 Mysql  MongoDb

要求1：Mysql  MongoDb功能一样  都有 add  update  delete  get方法

注意：约束统一的规范、以及代码重用

解决方案：需要约束规范所以要定义接口 ，需要代码重用所以用到泛型

    1、接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范

    2、泛型 通俗理解：泛型就是解决 类 接口 方法的复用性、


*/

    interface DBI<T> {

        add(info:T):boolean;
        update(info:T, id:number):boolean;
        delete(id:number):boolean;
        get(id:number):any[];

    }

    class MysqlDb<T> implements DBI<T> {
        add(info: T): boolean {
            console.log(info);
            return true;
        }        
        update(info: T, id: number): boolean {
            throw new Error("Method not implemented.");
        }
        delete(id: number): boolean {
            throw new Error("Method not implemented.");
        }
        get(id: number): any[] {
            console.log(id);
            var list = [
                {
                    title:'XXXXXXXXXXXXXXXXX',
                    desc:'CCCCCCCCCCCCCCC',
                },
                {
                    title:'XXXXXXXXXXXXXXXXX',
                    desc:'CCCCCCCCCCCCCCC',
                }
            ]

            return list;
        }
    }

    class MongoDb<T> implements DBI<T> {
        add(info: T): boolean {
            console.log(info);
            return true;
        }        
        update(info: T, id: number): boolean {
            throw new Error("Method not implemented.");
        }
        delete(id: number): boolean {
            throw new Error("Method not implemented.");
        }
        get(id: number): any[] {
            console.log(id);
            var list = [
                {
                    title:'XXXXXXXXXXXXXXXXX',
                    desc:'CCCCCCCCCCCCCCC',
                },
                {
                    title:'XXXXXXXXXXXXXXXXX',
                    desc:'CCCCCCCCCCCCCCC',
                }
            ]

            return list;
        }
    }

    class Person {

        username:string | undefined;
        password:string | undefined;

    }

    var p = new Person();
    p.username = 'xiaqi';
    p.password = '123253474';

    var oMysql = new MysqlDb();
    oMysql.add(p);
    var list = oMysql.get(3);
    console.log(list);