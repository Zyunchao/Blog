// import module1 from "./modules/module1"

import { count, numAdd, aaa } from './modules/module1'



/**
 * import 使用来导入模块的接口
 * import 命令接受一个大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须要与被导入模块对外接口的名称相同
 * import 命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口
 *  - 在这里 涉及到了 接口的这样一个概念
 *  - 所谓的接口，也就是两个模块用来交换数据的通道，要想获取到指定的数据，必须要有这个数据的接口才行
 *  - 在使用 export 导出变量时，我们可以称其为导出接口（为外部提供该变量的接口，以供外部导入）
 *  - 在使用 import 导入变量时，我们可以称其为导入接口（通过模块已暴露出的指定的接口，来拿到需要的数据）
 * 
 * 在 import 时，导入的变量 本质意义上来说，是导入接口，应该不允许在其导入后改变
 * 相反，在 export 时，接口是可以改变的，也就是说 某个接口的主导权是掌握在 被导入模块的
 * 
 * 对于简单类型的数据 接口不可以被改变
 * 对于引用类型的数据 对象下的字段依旧可以改变，对于这个接口来说，导出导入的都是 这个数据的应用地址而已
 */

import { firstName as surname } from './modules/module1'

console.log('surname：', surname);

// surname = 'Zyc' // --- 报错
// console.log('surname：', surname);

import { person } from './modules/module1'

console.log('person：', person);

// person = {}
person.age = 24
console.log('person：', person);


/* 证明被导入的数据与模块内绑定，能够获取到 模块内部实时的数据 */
// console.log('before --- ', count);
// // console.log('numAdd：', numAdd);
// numAdd(count)
// // numAdd()
// // numAdd()
// console.log('after --- ', count);