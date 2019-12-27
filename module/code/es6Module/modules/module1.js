
// export const firstName = 'Michael'
// export const lastName = 'Jackson'
// export const year = 1996

const firstName = 'Michael'
const lastName = 'Jackson'
const year = 1996
const time = new Date().getTime()

let count = 1
function add(param) {
    console.log(param == count);
    // count ++
}
// export 命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系
// export 1
// const m = 1
// export m

const person = {
    name: 'zyc',
    age: 18,
    sex: 'man'
}
// Object.freeze(person)

export {
    firstName,
    lastName,
    year,
    time as nowTime,
    time as timeNum,
    count,
    add as numAdd,
    person
}

export function multipal(x, y) {
    return x * y
}

export function aaa() {
    console.log('aaa()', new Date().getTime());
}

/**
 * export 命令用于规定对外的接口
 * export 命令是在编译时运行的
 * export 可以出现在模块的任意位置，但必须是模块的顶级作用域，不能出现在块级作用域，及任何语句内，否则就会报错
 *  - 如果出现在任何块级作用域内，也就是会在代码运行时才能够确定要暴露出去的接口，这样就没有办法做静态优化了
 *
 * export 必须和内部的变量建立对应关系
 * - 有以下几种方式暴露接口
 * > export var prop = value
 * > export {prop1, prop2, prop3}
 * > export {prop1 as changeNmae}
 * > export function name() {}
 *
 * export 输出的接口，与其对应的值是动态绑定关系，通过接口，可以取到模块内部实时的值
 */