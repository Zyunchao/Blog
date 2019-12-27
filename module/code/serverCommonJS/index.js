/**
 * ES6 中的 模块 module 都是在编译时决定依赖关系，及其输入输出的
 *  export 向外暴露的是内部变量的接口 ---  显示指定输出的代码
 *  import 导入依旧模块暴露出的接口去加载 --- 加载的到底是什么，是代码段吗 ？？ 
 *  import 导入的变量将绑定模块内部输出的变量，也就是能够实时的获取到模块内部的变量
 *  且 import 导入的变量本质意义上来说是接口，es6 不允许改变 使用 import 导入的变量
 * 
 * commonjs 规定每个js 文件就是一个 模块
 *  模块内部有一个 module 对象
 *  是在运行时确定输入输出的
 *  module.export 实际上是将module 的 exports 暴露出去
 *  require 方法能够读入并执行一个 js 文件，并返回这个模块的 moudle.exports 属性
 *  require 导入的实际上模块的 module.exports 的拷贝地址
 * 
 *  在执行导入模块时，实际上是本地模块使用 变量 载体指定模块的module.exports 的
 *      - 所以在本地模块中可以随意更改 载体变量的引用，也不会报错
 *      - 其次，所载体的模块其实是原模块的 module.exports 的拷贝，在本地模块中，直接操作
 */

let dataM = require('./modules/data-module')

let dataM2 = require('./modules/data-module')

let mCacheSelf = require.cache[require.resolve('./modules/data-module')].exports

// console.log("mCacheSelf：", mCacheSelf);

// 在导入 指定的 模块时，require 会返回对应模块的 module.exports 属性，在本地模块使用变量载体其返回的对象
// 这一步操作，对于模块对象的获取，一定是需要在执行时才能获取到的
// 由于只是一个 载体，所以，我在本地模块内是可以随便更改载体的内容

// dataM = {
//     haha: '哈哈哈'
// }

/**
 * 
 * 在 commonjs 中，模块由独立的模块作用域
 *  当使用 exports 暴露出去变量后
 * 
 * 在使用 require 引入模块时，被 引入的模块此时其实是一个闭包的操作，能够通过 模块内的方法操作 模块内部的变量数据
 *  - 正是闭包的特性
 * 
 * require 在首次读取并执行某个模块后，就将这个模块中 module 对象缓存了起来，也就是因为这一步操作，
 *  require 的值其实都是源模块的值的拷贝，简单数据类型拷贝数据，引用类型数据拷贝引用地址
 *  - 缓存 存在于 require.cache 中
 *  - require.cache 是一个对象
 *      - 键名：模块的完整的地址 + 名称
 *      - 值：那个模块的 module -- es5 中的模块中都有一个 module 变量，也就是那个模块的信息
 *  
 *  - 最终require 方法返回的是 那个 module 中的 exports 属性
 * 
 * 而对于后续的 require 相同的模块，实际上拿到的都是缓存中对应的模块
 *  - 也就是说，多次导入的模块即使使用不同的变量去接收，在不清除缓存的情况下，其引用的都是同一个 exports 的地址
 *  - 操作 载体变量，也就相当于操作 缓存中的 模块的 exports 属性
 *  - 操作一个，将会改变所有 载体的内容
 */

// 在这里将本地导入的 dataM 的 person 更换载体，现在看一下 源模块的 person 有没有变化



dataM.person = {}
dataM.logPerson() // 可见并没有发生变化

console.group('dataM 的 person 对象：');
    console.log(dataM.person);
console.groupEnd()

console.group('dataM2 的person 对象：');
    console.log(dataM2.person);
console.groupEnd()

console.group('缓存中的 data 模块 clg的 person 对象：');
    console.log(mCacheSelf.person);
console.groupEnd()
