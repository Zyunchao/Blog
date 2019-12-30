person = {
    name: 'Jack',
    age: 18,
    sex: 'man'
}

function pointPerson() {
    console.log('point person at module1.js：', person);
}

exports.person = person
module.exports.pointPerson = pointPerson

console.log('module.exports === exports：', module.exports === exports); // true
// console.log('module1：', module);

// exports = { index: 1 }
// exports.a = 'aaa'
// console.log('module.exports === exports：', module.exports === exports); // false

// console.log('module1：', module);

module.exports = exports = {
    count: 123
}

console.log('module.exports === exports：', module.exports === exports); // true
console.log('module1：', module);