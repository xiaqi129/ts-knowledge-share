"use strict";
/*

功能：定义一个操作数据库的库  支持 Mysql  MongoDb

要求1：Mysql  MongoDb功能一样  都有 add  update  delete  get方法

注意：约束统一的规范、以及代码重用

解决方案：需要约束规范所以要定义接口 ，需要代码重用所以用到泛型

    1、接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范

    2、泛型 通俗理解：泛型就是解决 类 接口 方法的复用性、


*/
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.get = function (id) {
        console.log(id);
        var list = [
            {
                title: 'XXXXXXXXXXXXXXXXX',
                desc: 'CCCCCCCCCCCCCCC',
            },
            {
                title: 'XXXXXXXXXXXXXXXXX',
                desc: 'CCCCCCCCCCCCCCC',
            }
        ];
        return list;
    };
    return MysqlDb;
}());
var MongoDb = /** @class */ (function () {
    function MongoDb() {
    }
    MongoDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MongoDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MongoDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MongoDb.prototype.get = function (id) {
        console.log(id);
        var list = [
            {
                title: 'XXXXXXXXXXXXXXXXX',
                desc: 'CCCCCCCCCCCCCCC',
            },
            {
                title: 'XXXXXXXXXXXXXXXXX',
                desc: 'CCCCCCCCCCCCCCC',
            }
        ];
        return list;
    };
    return MongoDb;
}());
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var p = new Person();
p.username = 'xiaqi';
p.password = '123253474';
var oMysql = new MysqlDb();
oMysql.add(p);
var list = oMysql.get(3);
console.log(list);
