class MyClass {
    constructor() {
        console.log("new test");
    }


    add(arg1, arg2) {
        var result = arg1 + arg2;
        return result;
    }


    multiply(arg1, arg2) {
        var result = arg1 * arg2;
        return result;
    }

}

module.exports = MyClass;