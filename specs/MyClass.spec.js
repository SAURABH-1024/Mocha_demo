// var Myclass = require('../src/myclass');
// var myObj = new Myclass();
// var chai = require('chai');
// var expect = chai.expect;

// describe('test', function () {
//     it('test the add func', function () {
//         expect(myObj.add(2, 3)).to.be.equal(5);
//     })
// })





var MyClass = require('../src/MyClass.js');
var myObj = new MyClass();
var chai = require('chai')
var expect = chai.expect;


describe('test', () => {
    it('test the add func', () => {
        expect(myObj.add(14, 25)).to.be.equal(39)
    })
})

describe('multiplyTest', () => {
    it('test the multiply func', () => {
        expect(myObj.multiply(5, 4)).to.be.equal(20)
    })
})