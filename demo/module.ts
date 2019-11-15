/*

    模块的概念：

        我们可以把一些公共的功能单独抽离成一个文件作为一个模块。
        模块里面的变量 函数 类等默认是私有的，如果我们要在外部访问模块里面的数据（变量、函数、类），
        我们需要通过export暴露模块里面的数据（变量、函数、类...）。
        暴露后我们通过 import 引入模块就可以使用模块里面暴露的数据（变量、函数、类...）。

*/


// import { MysqlDb } from '../module/db'

// import { MysqlDb, MongoDb } from '../module/db'

// import MysqlDb from '../module/db';

// class User {
//     username: string | undefined;
//     password: string | undefined;
// }


// var u = new User();
// u.username = '张三2222';
// u.password = '123456';

// var oMssql = new MysqlDb<User>();
// oMssql.add(u);