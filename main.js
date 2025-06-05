//Hàm kiểm tra string
function isString(value) {
    return typeof value === "string" && value.trim().length > 0;
};
console.log("Ví dụ kiểm tra string: ");
console.log(isString("Học lập trình")); //true
console.log(isString(2)); //false
console.log(isString(undefined)); //false
console.log(isString("    ")); //false

//Hàm kiểm tra number
function isNumber(value) {
    return typeof value === "number" && !Number.isNaN(value);
};
console.log("Ví dụ kiểm tra number: ");
console.log(isNumber(1)); //true
console.log(isNumber(undefined)); //false
console.log(isNumber(null)); //false
console.log(isNumber(NaN)); //false

//Hàm kiểm tra BigInt
function isBigInt(value) {
    return typeof value === "bigint";
};
console.log("Ví dụ kiểm tra bigint: ");
console.log(isBigInt(1)); //false
console.log(isBigInt(NaN)); //false
console.log(isBigInt(undefined)); //false
console.log(isBigInt(null)); //false
console.log(isBigInt(1n)); //true

//Hàm kiểm tra isBoolean
function isBoolean(value) {
    return typeof value === "boolean";
};
console.log("Ví dụ kiểm tra boolean: ");
console.log(isBoolean(true)); //true
console.log(isBoolean(false)); //true
console.log(isBoolean(1)); //false
console.log(isBoolean(0)); //false
console.log(isBoolean(NaN)); //false

//Hàm kiểm tra Null
function isNull(value) {
    return value === null; //Không sử dụng typeof vì typeof của null là object
};
console.log("Ví dụ kiểm tra null: ");
console.log(isNull(null)); //true
console.log(isNull(undefined)); //false
console.log(isNull(1)); //false
console.log(isNull(0)); //false
console.log(isNull("a")); //false

//Hàm kiểm tra của undefined
function isUndefined(value) {
    return typeof value === "undefined";
};
console.log("Ví dụ kiểm tra undefined: ");
console.log(isUndefined(undefined)); //true
console.log(isUndefined(null)); //false
console.log(isUndefined(1)); //false
console.log(isUndefined(1n)); //false
console.log(isUndefined("undefined")); //false

//Hàm kiểm tra của symbol
function isSymbol(value) {
    return typeof value === "symbol";
};
console.log("Ví dụ kiểm tra Symbol: ");
console.log(isSymbol(Symbol())); //true
console.log(isSymbol(undefined)); //false
console.log(isSymbol("*")); //false
console.log(isSymbol(1n)); //false
console.log(isSymbol("   ")); //false

//Hàm kiểm tra của object
function isObject(value) {
    return typeof value === "object" && !isNull(value) && !Array.isArray(value); //Tận dụng hàm isNull
};
console.log("Ví dụ kiểm tra object: ");
console.log(isObject({id: 1, class: "1A"})); //true
console.log(isObject(null)); //false
console.log(isObject(1)); //false
console.log(isObject([1, 2, 3])); //false
console.log(isObject(undefined)); //false

//Hàm kiểm tra của array
function isArray(value) {
    return Array.isArray(value);
};
console.log("Ví dụ kiểm tra array: ");
console.log(isArray({id: 1, class: "1A"})); //false
console.log(isArray(null)); //false
console.log(isArray([])); //true
console.log(isArray([1, 2, 3])); //true
console.log(isArray(undefined)); //false

//Hàm kiểm tra của function
function isFunction(value) {
    return typeof value === "function";
};
var sum = () => {};
var minus = function() {};
console.log("Ví dụ kiểm tra function: ");
console.log(isFunction({id: 1, class: "1A"})); //false
console.log(isFunction(null)); //false
console.log(isFunction(isFunction)); //true
console.log(isFunction([1, 2, 3])); //false
console.log(isFunction(undefined)); //false
console.log(isFunction(sum)); //true
console.log(isFunction(minus)); //true


