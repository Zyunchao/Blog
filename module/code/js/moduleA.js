(function(window) {
    let data = 'www.baidu.com'

    function foo() {
        console.log(`foo() ${data}`);
    }

    function bar() {
        console.log(`bar() ${data}`);
        other()
    }

    function other() {
        console.log('other()');
    }

    window.myModule = {foo, bar}
})(window)