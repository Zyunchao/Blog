let person = {
    name: 'Zyc',
    age: 18,
    sex: 'man'
}

// Object.defineProperties({
//     name: {
//         set(newValue) {
//             console.log();
//         }
//     }
// })

Object.keys(person).forEach(key => {
    let val = person[key]
    Object.defineProperty(person, key, {
        set(newVal) {
            console.log(`dataM --- ${key} on set：`, newVal);
            val = newVal
        },
        get() {
            console.log(`dataM --- ${key} on get`);
            return val
        }
    })
})

exports.logPerson = function () {
    console.log('dataM-local person：', person);
}

// console.log(eval('('+module+')'), '------');

exports.person = person

// let Module = {
//     id:
//         'C:\\Users\\Zyc\\Desktop\\serve\\module\\serverCommonJS\\modules\\data-module.js',
//     exports: { logPerson: [Function] },
//     parent:
//         Module {
//             id: '.',
//             exports: { },
//             parent: null,
//             filename:
//         'C:\\Users\\Zyc\\Desktop\\serve\\module\\serverCommonJS\\index.js',
//             loaded: false,
//             children: [[Circular]],
//             paths:
//             [ 'C:\\Users\\Zyc\\Desktop\\serve\\module\\serverCommonJS\\node_modules',
//             'C:\\Users\\Zyc\\Desktop\\serve\\module\\node_modules',
//             'C:\\Users\\Zyc\\Desktop\\serve\\node_modules',
//             'C:\\Users\\Zyc\\Desktop\\node_modules',
//             'C:\\Users\\Zyc\\node_modules',
//             'C:\\Users\\node_modules',
//             'C:\\node_modules' ] },
//     filename:
//         'C:\\Users\\Zyc\\Desktop\\serve\\module\\serverCommonJS\\modules\\data-module.js',
//     loaded: false,
//     children: [],
//     paths:
//         ['C:\\Users\\Zyc\\Desktop\\serve\\module\\serverCommonJS\\modules\\node_modules',
//             'C:\\Users\\Zyc\\Desktop\\serve\\module\\serverCommonJS\\node_modules',
//             'C:\\Users\\Zyc\\Desktop\\serve\\module\\node_modules',
//             'C:\\Users\\Zyc\\Desktop\\serve\\node_modules',
//             'C:\\Users\\Zyc\\Desktop\\node_modules',
//             'C:\\Users\\Zyc\\node_modules',
//             'C:\\Users\\node_modules',
//             'C:\\node_modules'] }