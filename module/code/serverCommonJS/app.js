let uniq = require('uniq')
let m1 = require('./modules/module1')
let m2 = require('./modules/module2')
let m3 = require('./modules/module3')

// console.log('m1：', m1);
// console.log('m2：', m2);
// console.log('m3：', m3);
// console.log('uniq：', uniq);

// m1.foo()
// m2()
// m3.foo()
// console.log(uniq(m3.arr));

// 如果是简单类型的值，es5模块输出的则是该值的拷贝
// 如果是复杂类型的数据，es5 模块输出的则是该值的引用的拷贝
// m3.push(1)
// m3.push(11)
// m3.push(12, m3.arr)

// const m3CacheExports = require.cache[require.resolve('./modules/module3')].exports

delete require.cache[require.resolve('./modules/module3')]

let cacheM3 = require('./modules/module3') // 证明是引用的拷贝

// console.log(m3 === cacheM3);
// console.log(m3);

// console.log('m3 === m3CacheExports = ', m3 === m3CacheExports, 'cacheMe === m3CacheExports = ', cacheM3 === m3CacheExports);


console.log('m3.arr：', m3.arr);
console.log('cacheM3.arr：', cacheM3.arr);

m3.arr = ['q', 'w', 'e', 'r']

console.log('m3.arr 断链：', m3.arr);
console.log('cacheM3 未断链：', cacheM3.arr);
m3.log()

/**
 * module 在输出模块时，如果是简单类型的数据，输出的将是值的拷贝
 * 如果数据是引用类型的，输出的则是引用的拷贝
 * 在一个模块多次加载某一个模块时，如果不清除缓存，加载的都是缓存中的同一个 模块对象
 * 改变某一个载荷变量的值，其他该模块的载荷变量值都将会发生改变
 *  - 清除缓存则不会发生该情况
 */