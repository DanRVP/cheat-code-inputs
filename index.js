class CheatCodes {
    /**
     * Constructor
     *
     * @param {Array.<CheatCode>} codes
     */
    constructor(codes = []) {
        this.possible_codes = codes;
        this.code_key = 0;
        this.valid_codes = [];
    }

    /**
     * Clear the current code attempt
     */
    clear() {
        this.code_key = 0;
        this.valid_codes = [];
    }

    /**
     * Iterate all currently valid cheat codes and check that
     * the pressed key corresponds with the next key in the code.
     *
     * @param {String} key_code
     */
    checkKeyPress(key_code) {
        if (!this.possible_codes.length) {
            return;
        }

        let match = false;
        let code_map = valid_codes[0] == undefined ? this.possible_codes : this.valid_codes;

        for (let i = 0; i < code_map.length; i++) {
              if (key_code == code_map[i]['code'][code_key]) {
                match = true;
                if (code_key + 1 == code_map[i]['code'].length) {
                    code_map[i]['func']();
                    match = false;
                } else {
                    valid_codes.push(code_map[i]);
                }
            }
        }

        if (!match) {
            this.clear();
        } else {
            this.code_key++;
        }
    }

    /**
     * Add a new code to possible codes
     *
     * @param {CheatCode} code
     */
    addCode(code) {
        this.possible_codes.push(code);
    }

    /**
     * Remove a code from the array of possible codes. Will remove duplicates if they exist.
     *
     * @param {String|Number} id The ID of the code we wish to remove.
     */
    removeCode(id) {
        this.possible_codes = this.possible_codes.filter(item => item.id !== id);
    }
}

class CheatCode {
    /**
     * Constructor
     *
     * @param {Array} code Cheat code which must be matched
     * @param {Function} func Function to call when code is matched
     * @param {String|Number} id ID used to remove codes in a CheatCodes collection
     */
    constructor(code, func, id) {
        if (!code instanceof Array) {
            throw new Error('Property "code" must be an instance of Array');
        }

        if (!func instanceof Function) {
            throw new Error('Property "func" must be an instance of Function');
        }

        if (!Number.isInteger(id) && !id instanceof String) {
            throw new Error();
        }

        this.code = code;
        this.func = func;
        this.id = id;
    }
}

const KeyCodes = {
    "0": "Digit0",
    "1": "Digit1",
    "2": "Digit2",
    "3": "Digit3",
    "4": "Digit4",
    "5": "Digit5",
    "6": "Digit6",
    "7": "Digit7",
    "8": "Digit8",
    "9": "Digit9",
    "Q": "KeyQ",
    "W": "KeyW",
    "E": "KeyE",
    "R": "KeyR",
    "T": "KeyT",
    "Y": "KeyY",
    "U": "KeyU",
    "I": "KeyI",
    "O": "KeyO",
    "P": "KeyP",
    "A": "KeyA",
    "S": "KeyS",
    "D": "KeyD",
    "F": "KeyF",
    "G": "KeyG",
    "H": "KeyH",
    "J": "KeyJ",
    "K": "KeyK",
    "L": "KeyL",
    "Z": "KeyZ",
    "X": "KeyX",
    "C": "KeyC",
    "V": "KeyV",
    "B": "KeyB",
    "N": "KeyN",
    "M": "KeyM",
    "F1": "F1",
    "F2": "F2",
    "F3": "F3",
    "F4": "F4",
    "F5": "F5",
    "F6": "F6",
    "F7": "F7",
    "F8": "F8",
    "F9": "F9",
    "F10": "F10",
    "F11": "F11",
    "F12": "F12",
    "ESCAPE": "Escape",
    "HOME": "Home",
    "END": "End",
    "INSERT": "Insert",
    "DELETE": "Delete",
    "BACKSPACE": "Backspace",
    "ENTER": "Enter",
    "SHIFTRIGHT": "ShiftRight",
    "ARROWUP": "ArrowUp",
    "ARROWDOWN": "ArrowDown",
    "ARROWLEFT": "ArrowLeft",
    "ARROWRIGHT": "ArrowRight",
    "TAB": "Tab",
    "CAPSLOCK": "CapsLock",
    "SHIFTLEFT": "ShiftLeft",
    "CONTROLLEFT": "ControlLeft",
    "ALTLEFT": "AltLeft",
    "ALTRIGHT": "AltRight",
    "CONTROLRIGHT": "ControlRight",
    "METALEFT": "MetaLeft",
    "BRACKETLEFT": "BracketLeft",
    "BRACKETRIGHT": "BracketRight",
    "SEMICOLON": "Semicolon",
    "QUOTE": "Quote",
    "BACKSLASH": "Backslash",
    "COMMA": "Comma",
    "PERIOD": "Period",
    "SLASH": "Slash",
    "INTLBACKSLASH": "IntlBackslash",
    "BACKQUOTE": "Backquote"
};

exports.CheatCodes = CheatCodes;
exports.CheatCode = CheatCode;
exports.KeyCodes = KeyCodes;
