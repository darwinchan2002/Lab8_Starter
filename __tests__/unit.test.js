// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Test for isPhoneNumber()
test('123456-7890 is a valid phone number', () => {
    expect(functions.isPhoneNumber('123456-7890')).toBe(true)
})

test('(123)456-7890 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true)
})

test('1234567890 is not a valid phone number', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false)
})

test('12345 is not a valid phone number', () => {
    expect(functions.isPhoneNumber('12345')).toBe(false)
})

// Test for isEmail()
test('abc@gmail.com is a valid email', () => {
    expect(functions.isEmail('abc@gmail.com')).toBe(true)
})

test('123456789@random.hi is a valid email', () => {
    expect(functions.isEmail('123456789@random.hi')).toBe(true)
})

test('@hi.com is not a valid email', () => {
    expect(functions.isEmail('@hi.com')).toBe(false)
})

test('boom123.com is not a valid email', () => {
    expect(functions.isEmail('boom123.com')).toBe(false)
})

// Test for isStrongPassword()
test('abcdefg is a strong password', () => {
    expect(functions.isStrongPassword('abcdefg')).toBe(true)
})

test('a0000_000c is a strong password', () => {
    expect(functions.isStrongPassword('a0000_000c')).toBe(true)
})

test('12345 is not a strong password', () => {
    expect(functions.isStrongPassword('12345')).toBe(false)
})

test('ab is not a strong password', () => {
    expect(functions.isStrongPassword('ab')).toBe(false)
})

// Test for isDate()
test('12/31/2021 is a valid date', () => {
    expect(functions.isDate('12/31/2021')).toBe(true)
})

test('1/1/2021 is a valid date', () => {
    expect(functions.isDate('1/1/2021')).toBe(true)
})

test('122/313/2021 is not a valid date', () => {
    expect(functions.isDate('122/313/2021')).toBe(false)
})

test('12/31/20 is not a valid date', () => {
    expect(functions.isDate('12/31/20')).toBe(false)
})

// Test for isHexColor
test('abc is a valid hex code', () => {
    expect(functions.isHexColor('abc')).toBe(true)
})

test('000fff is a valid hex code', () => {
    expect(functions.isHexColor('000fff')).toBe(true)
})

test('ghijkl is not a valid hex code', () => {
    expect(functions.isHexColor('ghijkl')).toBe(false)
})

test('12345 is not a valid hex code', () => {
    expect(functions.isHexColor('12345')).toBe(false)
})