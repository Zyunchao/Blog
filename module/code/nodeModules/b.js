
const a = require('./a.js')
clearRequireCache('./a')
const a1 = require('./a.js')
clearRequireCache('./a')
const a2 = require('./a.js')

// console.log('require cache：', require.resolve('./a.js'));

function clearRequireCache(path) {
    path = require.resolve(path)
    delete require.cache[path]
}

console.log(require.cache);

console.log('a at moduleB.time：', a.time);
console.log('a1 at moduleB.time：', a1.time);
console.log('a2 at moduleB.time：', a2.time);

/**
 * 
 * 加载规则：
 * 1. require 方法可以读入并执行一个 JavaScript 文件，然后返回该模块的 exports 对象，
 *   由于 exports 是存在于模块本身的，如果模块中代码没有明确写出暴露的资源，那么一个空的 exports 将会被加载
 * 
 * 2. 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载就直接读取缓存结果了
 *  如上，a/a1/a2 输出结果一致
 * 
 * 3. 加载的模块的值，实际上是模块所暴露出的值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值
 *     经试验，如果在模块内硬性改变 moedule.exports 的值，在其他模块能够拿到改变过后对应的值
 *     但是模块内试图改变某个已经暴露出的值时，模块外将拿不到模块内更新的值
 *  内部数据的确是发生变化了，但是外部并不会获取到最新的值
 *  原始类型的值，会被缓存，除非写成一个函数，才能得到内部变动后的值
 */

// const { counter, inCounter, getCounter } = require('./a.js')
// console.log('counter：', counter, ' getCounter：', getCounter());
// inCounter()
// inCounter()
// console.log('counter：', counter, ' getCounter：', getCounter());


// setTimeout(() => {
//     console.log('3. moduleB counter：', counter);
// }, 4000);



// setTimeout(() => {
//     console.log('3. mdouleB Log moduleA.time：', a.time);

//     console.log('a at moduleB：', a);
//     console.log('a1 at moduleB：', a1);
//     console.log('a2 at moduleB：', a2);
// }, 4000);

module.exports = {
    name: 'moduleB'
}


/**
 * 总结 CommonJS 规范：
 * CommonJS 规定 每个 js 文件就是一个模块，每个模块由单独的作用域，互不影响，不污染全局作用域
 *
 * 暴露：
 *  exports.b = 'xxxx'
 *  module.exports.a = 'xxxx'
 *  module.exports = value
 *
 *  CommonJS 模块内，有一个 module 对象用来标识当前模块，这个 module 下面有一个 exports 字段，也是一个对象
 *  这个 exports 就是对外的接口。加载某个模块，其实就是加载该模块的 module.exports 属性
 *
 * 加载：
 *  const a = require('xxx') // 如果模块为第三方模块，则是模块名；如果是自定义模块，则填入模块的路径
 *  const a1 = require('xxx')
 *
 *  CommonJS 规范使用 require 函数来加载模块
 *   require 方法能够读入并执行一个 JavaScript 文件，然后返回该模块的 exports 对象。如果没有发现指定模块，会报错。
 *   模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果，要想让模块再次运行，必须清除缓存。
 *   CommonJS 模块的加载机制是，输入的是被输出的值的拷贝。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值了。
 *
 */