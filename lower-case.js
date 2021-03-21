function convertAllToLowerCase(obj) {
    var output = {};
    const test = JSON.stringify(obj).toLowerCase();
    return JSON.parse(test);
};

function convertKeysToLowerCase(obj) {
    let input = JSON.stringify(obj);
    let convertedInput = input.replace(/"([^"]+)"\s*:/g, function($0, $1) { return ('"' + $1.toLowerCase() + '":'); });
    return JSON.parse(convertedInput);
};

function convertValuesToLowerCase(obj) {
    for (var prop in obj) {
        if (typeof obj[prop] === 'string') {
            obj[prop] = obj[prop].toLowerCase();
        }
        if (typeof obj[prop] === 'object') {
            convertValuesToLowerCase(obj[prop]);
        }
    }
    return obj;
}

function extractKeysToLowerCase(target, keysArr) {
    if (typeof target === 'object') {
        for (const key in target) {
            if (key && isNaN(key)) {
                keysArr.push(key.toLowerCase());
            }
            extractKeysToLowerCase(target[key], keysArr);
        }
    }
    return keysArr;
}

function extractValuesToLowerCase(obj, resultObj) {
    for (var prop in obj) {
        if (typeof obj[prop] === 'string' && obj[prop].length > 0) {
            resultObj.push(obj[prop].toLowerCase());
        }
        if (typeof obj[prop] === 'object') {
            extractValuesToLowerCase(obj[prop], resultObj);
        }
        if (!isNaN(obj[prop])) {
            resultObj.push(obj[prop])
        }
    }
    return resultObj;
}

module.exports = {
    /**
     * Check whether the Given string value is lowercased or not.
     * @param {String} value 
     * @returns Boolean 
     */
    isLowerCased: (value) => {
        if (value != null || value.trim().length > 0 && (typeof myVar === 'string' || myVar instanceof String)) {
            return (value === value.toLowerCase());
        }
        return false;
    },

    /**
     * Converts given value to lowercase .
     * @param {String} value 
     * @returns Lowercased String value
     */
    getStringLowerCased: (value) => {
        if (value != null || value.trim().length > 0 && (typeof myVar === 'string' || myVar instanceof String)) {
            return value.toLowerCase();
        }
        return value;
    },

    /**
     * Converts specific words in the String to lower case based on from and to index 
     * @param {String} value 
     * @param {Int} from 
     * @param {Int} to 
     * @returns Lowercased String value for specific indexes.
     */
    getStringLowerCasedWithPos: (value, from, to) => {
        if (value != null || value.trim().length > 0 && (typeof myVar === 'string' || myVar instanceof String) && (from != to && from == null)) {
            if (to == null) {
                value = value.replace(value.substring(from, value.length), value.substring(from, value.length).toLowerCase());
            } else if (to > from) {
                value = value.replace(value.substring(from, to), value.substring(from, to).toLowerCase());
            }
        }
        return value;
    },

    /**
     * Convert the entire JSON Object to lowercase
     * @param {JSON} input 
     * @returns 
     */
    getObjectLowerCased: (input) => {
        const isEmpty = (input == null || !(Object.keys(input) || input).length);
        if (isEmpty) {
            return input;
        }
        return convertAllToLowerCase(input);
    },

    /**
     * Convert KEYS in the given JSON object to lowercase
     * @param {JSON} input 
     * @returns JSON Object with All KEYS converted to lowercase.
     */
    getObjectKeysLowercased: (input) => {
        const isEmpty = (input == null || !(Object.keys(input) || input).length);
        if (isEmpty) {
            return input;
        }
        return convertKeysToLowerCase(input);
    },

    /**
     * Convert VALUES in the given JSON object to lowercase
     * @param {JSON} object 
     * @returns JSON Object with All VALUES converted to lowercase.
     */
    getObjectvaluesLowercased: (object) => {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return convertValuesToLowerCase(object);
    },

    /**
     * Convert Keys in the object to lowercase.
     * @param {JSON} object 
     * @returns Array of Lowercased Object Keys.
     */
    getKeysLowerCased: (object) => {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return extractKeysToLowerCase(object, []);
    },

    /**
     * Convert Values in the object to lowercase.
     * @param {JSON} object 
     * @returns Array of Lowercased Object Values
     */
    getValuesLowerCased: (object) => {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return extractValuesToLowerCase(object, []);
    },

    /**
     *  Convert all values in the array to lowercase
     * @param {Array} input 
     * @returns Array of Lowercased values
     */
    getArrayLowercased: (input) => {
        if (Array.isArray(input)) {
            var stringfied = JSON.stringify(input);
            return JSON.parse(stringfied.toLowerCase());
        }
        return input;
    },

    /**
     * Convert specific index value in the array to lowercase
     * @param {Array} input 
     * @param {Int`} index 
     * @returns Array of values with lowercased for specific index.
     */
    getArrValLowerCasedByIndex: (input, index) => {
        if (Array.isArray(input)) {
            if (~index) {
                console.log(input[index]);
                input[index] = JSON.parse(JSON.stringify(input[index]).toLowerCase());
            }
        }
        return input;
    }
}