const b = require('./b.js')

let a = 123
let time = new Date().getTime()

let counter = 3

function inCounter() {
    counter ++
}

function getCounter() {
    return counter
}



/**
 * exports && module.exports 的关系与区别
 * 
 * exports 与 module.exports 指向的是同一个对象
 * 而模块最终暴露出去的是 module.exports 属性
 *  在添加所要暴露的属性时，使用点的方式添加，无论是使用 exports. 还是 module.exports. 都将添加到同一个对象上 -- 即要暴露出去的对象上面
 *  
 * 无论是给 exports 直接赋值，还是给 module.exports 直接赋值
 * 也就是 exports = {} 或者 module.exports = {}
 * 这两种方式都将使得 exports 与 module.exports 断开连接
 * 在 exports 断链后，再在 exports 添加属性将不能添加 给 module.exports 也就不能达到暴露出去的目的
 * 在 exports 断链前，所添加给 module.exports 的属性，将继续存在
 * 而最终暴露出去的是 module.exports 属性，所以 module.exports 是拥有最终决策权的
 * 
 * module.exports 是 module 的一个属性，module 用来代表当前模块信息
 *  exports 也就是当前模块所想要暴露出去的数据，外部加载时，实际上也是加载的该模块的 module.exports 属性
 * 
 */

// setTimeout(() => {
//     time = new Date().getTime()
//     console.log('1. mdouleA time onchange：', time);
// }, 2000);


module.exports.c = 1234
exports.a = 789

// exports = {
//     name: 'moduleA'
// }

// module.exports 与 exports 断链
module.exports = {
    name: 'moduleA',
    time,
    counter,
    inCounter,
    getCounter
}

exports.xixi = '嘻嘻'

// module.exports = exports

// console.group('exports：');
// console.log(exports);
// console.groupEnd()

// console.group('module.exports：');
// console.log(module.exports);
// console.groupEnd()


// console.log('exports === module.exports --- ', exports === module.exports);



// setTimeout(() => {
//     console.log('1. mdouleA counter change ? ：', counter);

//     console.log('2. moduleA.exports.counter：', module.exports.counter);
// }, 3000);

// setTimeout(() => {
//     module.exports.time = time
//     console.log('2. mdouleA.exports.time：', module.exports.time);
// }, 3000);

// console.log(module.children[0]);

