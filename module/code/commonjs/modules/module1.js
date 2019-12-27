person = {
    name: 'Zyc',
    age: 18,
    sex: 'man'
}

function pointPerson() {
    console.log('point person at module1.js：', person);
}

exports.person = person
module.exports.pointPerson = pointPerson