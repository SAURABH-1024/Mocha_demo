// var Myclass = require('../src/myclass');
// var myObj = new Myclass();
// var chai = require('chai');
// var expect = chai.expect;

// describe('test', function () {
//     it('test the add func', function () {
//         expect(myObj.add(2, 3)).to.be.equal(5);
//     })
// })


var sinon = require('sinon')


var MyClass = require('../src/MyClass.js');
var myObj = new MyClass();
var chai = require('chai')
var expect = chai.expect;

describe('parent1', function () {
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
})

describe('parent2', function () {
    it('testing the spy method', function () {
        var spy = sinon.spy(myObj, 'multiply');
        var arg1 = 10;
        var arg2 = 20;

        myObj.callAnotherFn(arg1, arg2);
        sinon.assert.calledOnce(spy);
        expect(spy.calledOnce).to.be.true
        // expect(spy.calledWith(10, 20)).to.be.true;
})
})


