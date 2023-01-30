var assert = require("assert");

//addition
describe('Calculator', () => {
    describe('Add', () => {
        it("add(5, 2) expected result 7 PASS", () => {
            var result = 5+2;
            assert.equal(result,7)
        });
    });
});

describe('Calculator', () => {
    describe('Add', () => {
        it("add(5, 2) expected result 8 FAIL", () => {
            var result = 5+2;
            assert.equal(result,8)
        });
    });
});

//subtract
describe('Calculator', () => {
    describe('Sub', () => {
        it("sub(5, 2) expected result 3 PASS", () => {
            var result = 5-2;
            assert.equal(result,3)
        });
    });
});

describe('Calculator', () => {
    describe('Sub', () => {
        it("sub(5, 2) expected result 5 FAIL", () => {
            var result = 5-2;
            assert.equal(result,5)
        });
    });
});

//multiply
describe('Calculator', () => {
    describe('Mul', () => {
        it("Mul(5, 2) expected result 10 PASS", () => {
            var result = 5*2;
            assert.equal(result,10)
        });
    });
});

describe('Calculator', () => {
    describe('Mul', () => {
        it("Mul(5, 2) expected result 12 FAIL", () => {
            var result = 5*2;
            assert.equal(result,12)
        });
    });
});

//divide
describe('Calculator', () => {
    describe('Div', () => {
        it("div(10, 2) expected result 5 PASS", () => {
            var result = 10/2;
            assert.equal(result,5)
        });
    });
});

describe('Calculator', () => {
    describe('Div', () => {
        it("div(10, 2) expected result 2 FAIL", () => {
            var result = 10/2;
            assert.equal(result,2)
        });
    });
});

