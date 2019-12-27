exports.foo = function () {
    console.log('foo() module3');
}

let arr = [1, 2, 3, 4, 2, 3, 2]

exports.arr = arr
exports.push = function (param, obj) {
    arr.push(param)

    obj && console.log(obj === arr);
}

exports.log = function() {
    console.log('module3 log arr：', arr);
}