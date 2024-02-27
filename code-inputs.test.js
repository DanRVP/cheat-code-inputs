const CheatCodes = require('./index.js').CheatCodes;
const CheatCode = require('./index.js').CheatCode;
const KeyCodes = require('./index.js').KeyCodes;

test('Test single cheat code in collection (valid)', () => {
    let res = 0;
    const codes = new CheatCodes([new CheatCode([KeyCodes.ARROWUP, KeyCodes.ARROWDOWN], () => res = 1, 1)]);
    [KeyCodes.ARROWUP, KeyCodes.ARROWDOWN].forEach(key_code => codes.checkKeyPress(key_code));

    expect(res).toBe(1);
    expect(codes.code_key).toBe(0);
    expect(codes.valid_codes.length).toBe(0);
});

test('Test single cheat code in collection (invalid)', () => {
    let res = 0;
    const codes = new CheatCodes([new CheatCode([KeyCodes.ARROWUP, KeyCodes.ARROWDOWN], () => res = 1, 1)]);
    [KeyCodes.ARROWUP, KeyCodes.ARROWUP].forEach(key_code => codes.checkKeyPress(key_code));

    expect(res).toBe(0);
    expect(codes.code_key).toBe(0);
    expect(codes.valid_codes.length).toBe(0);
});

test('Test multiple cheat codes in collection (1 valid)', () => {
    let res = 0;
    const codes = new CheatCodes([
        new CheatCode([KeyCodes.ARROWUP, KeyCodes.ARROWUP], () => res = 1, 1),
        new CheatCode([KeyCodes.ARROWUP, KeyCodes.ARROWDOWN], () => res = 2, 2),
    ]);

    [KeyCodes.ARROWUP, KeyCodes.ARROWDOWN].forEach(key_code => codes.checkKeyPress(key_code));

    expect(res).toBe(2);
    expect(codes.code_key).toBe(0);
    expect(codes.valid_codes.length).toBe(0);
});

test('Test multiple cheat codes in collection (all valid/duplicates)', () => {
    let res = 0;
    const codes = new CheatCodes([
        new CheatCode([KeyCodes.ARROWUP, KeyCodes.ARROWDOWN], () => res = 1, 1),
        new CheatCode([KeyCodes.ARROWUP, KeyCodes.ARROWDOWN], () => res = 2, 2),
    ]);

    [KeyCodes.ARROWUP, KeyCodes.ARROWDOWN].forEach(key_code => codes.checkKeyPress(key_code));

    expect(res).toBe(1);
    expect(codes.code_key).toBe(0);
    expect(codes.valid_codes.length).toBe(0);
});

test('Test multiple cheat codes in collection (invalid)', () => {
    let res = 0;
    const codes = new CheatCodes([
        new CheatCode([KeyCodes.ARROWDOWN, KeyCodes.ARROWDOWN], () => res = 1, 1),
        new CheatCode([KeyCodes.ARROWDOWN, KeyCodes.ARROWDOWN], () => res = 2, 2),
    ]);

    [KeyCodes.ARROWUP, KeyCodes.ARROWUP].forEach(key_code => codes.checkKeyPress(key_code));

    expect(res).toBe(0);
    expect(codes.code_key).toBe(0);
    expect(codes.valid_codes.length).toBe(0);
});

test('Test multiple cheat codes in collection (second key press of first code is match)', () => {
    let res = 0;
    const codes = new CheatCodes([
        new CheatCode([KeyCodes.ARROWDOWN, KeyCodes.ARROWDOWN], () => res = 1, 1),
        new CheatCode([KeyCodes.ARROWLEFT, KeyCodes.ARROWUP], () => res = 2, 2),
    ]);

    [KeyCodes.ARROWUP, KeyCodes.ARROWDOWN].forEach(key_code => codes.checkKeyPress(key_code));

    expect(res).toBe(0);
    expect(codes.code_key).toBe(1);
    expect(codes.valid_codes.length).toBe(1);
});

test('Test removing code from codes collection (key exists)', () => {
    const codes = new CheatCodes([
        new CheatCode([KeyCodes.ARROWDOWN, KeyCodes.ARROWDOWN], () => res = 1, 1),
        new CheatCode([KeyCodes.ARROWLEFT, KeyCodes.ARROWUP], () => res = 2, 2),
    ]);

    codes.removeCode(1);
    expect(codes.possible_codes.length).toBe(1);
});

test('Test removing codes with same ID from codes collection', () => {
    const codes = new CheatCodes([
        new CheatCode([KeyCodes.ARROWDOWN, KeyCodes.ARROWDOWN], () => res = 1, 1),
        new CheatCode([KeyCodes.ARROWLEFT, KeyCodes.ARROWUP], () => res = 2, 1),
    ]);

    codes.removeCode(1);
    expect(codes.possible_codes.length).toBe(0);
});

test('Test adding code to collection', () => {
    const codes = new CheatCodes([
        new CheatCode([KeyCodes.ARROWDOWN, KeyCodes.ARROWDOWN], () => res = 1, 1),
    ]);

    codes.addCode(new CheatCode([KeyCodes.ARROWLEFT, KeyCodes.ARROWUP], () => res = 2, 2));
    expect(codes.possible_codes.length).toBe(2);
});
