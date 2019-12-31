// console.log('module2.js start：', new Date().getTime());
const person = {
    name: 'Jack',
    age: 18,
    sex: 'man'
}

exports.person = person
// 暴露出去了一个 quote 变量，使它引用了当前模块的 module.exports 属性
exports.quote = module.exports
// console.log('module2.js end：', new Date().getTime());