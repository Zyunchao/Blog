/**
 * 在 commonJS 中，每个文件都是一个模块，模块由单独的作用域，不能直接访问模块内部的变量
 *  暴露模块使用 exports 或 module.exports 
 *      - exports 是 module.exports 的简写，
 *      - exports 与 module.exports 指向同一个地址，如果将 module.exports 的指向改变，那么 exports 将会失效
 *      - 模块内部都有一个 module 对象，代表当前模块
 *      - 暴露出去的其实就是 模块 内 module 对象的 exports 属性
 * 
 *  引入使用 require 函数
 *      - require 函数的作用是读入、并执行一个 js 文件，最终返回 模块的 exports 属性
 *      - 在执行完一个js文件后，就会将该模块缓存在当前模块中，如果后续再有 require 该模块的地方，将不会再执行，而是返回 缓存中的模块的 exports 属性
 *      - 缓存存在于当前模块的 require.cache 属性中，一个对象，key 是模块文件的 完整的名字(完整的路径 + 文件名)，value 是 js 文件的 module 对象
 *      - 如果想要让 require 再次执行文件 则需要清除缓存，使用 delete 关键字删除掉 require.cache 中对应模块的属性就可以了
 * 
 *  - 在 require 引入模块时，引入的实际上是被引入模块的缓存 module 对象，也就是存在于 require.cache 中的对应模块的 module 对象，那么 模块内部的变化也就不能再实时的反应给加载该模块的地方了
 *  - 后续再次 require 的模块，都将是缓存中 module 对象。
 *  - 引入多次模块时，用来接收模块的多个变量，也就指向了同一个地址
 *  - 使用多次变量引用该模块，通过任一变量操作该模块时，也就是操作了 缓存中的 模块，那么所有的变量引用的模块都将发生变化，因为都是同一地址
 * 
 * 
 */

 const m1 = require('./modules/module1')
//  clearCache('./modules/module1')
 const m2 = require('./modules/module1')

 m1.person.name = 'Lyy'

 console.log('m1：', m1);
 console.log('m2：', m2);
 console.log(m2 === m1);


 function clearCache(path) {
     path = require.resolve(path)
     delete require.cache[path]
 }