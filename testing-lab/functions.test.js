

const functions = require('./functions.js')

describe('returnTwo', () => {
    test('returnTwo should equal 2', () => {
        expect(functions.returnTwo(2)).toBe(2)
    });
})

describe('greeting', (name) => {
    test(`greeting should say "Hello, ${name}."`, () => {
        expect(functions.greeting('John')).toBe('Hello, John.')
    })
})

describe('add', (num1, num2) => {
    test('add should add num1 and num2 together', () => {
        expect(functions.add(1, 1)).toBe(2)
    })
})