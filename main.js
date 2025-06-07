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


//Hàm welcomeUser
function welcomeUser(name) { //Toán tử 3 ngôi, điều kiện đúng trả về giá trị đầu tiên, sai trả về giá trị thứ 2
    return isString(name) ? `Chào mừng ${name}` : "Tên không hợp lệ";
};
console.log(welcomeUser("Nguyễn Chí Thanh")); //Chào mừng Nguyễn Chí Thanh
console.log(welcomeUser(1)); //Tên không hợp lệ
console.log(welcomeUser(" ")); //Tên không hợp lệ

//Hàm calculateAge
function calculateAge(currentYear, birthYear) {
    if(isNumber(currentYear) && isNumber(birthYear)) {
        return currentYear - birthYear;
    };
    return 1;
};
console.log(calculateAge(2025, 2012)); //13
console.log(calculateAge("2025", 2012)); //1

//Hàm getElementAtIndex
function getElementAtIndex(array, index) {
    let valueNotArray = !isArray(array);
    let valueNotNumber = !isNumber(index);
    if(!valueNotArray) {
        arrayLength = array.length;
    };
    if(valueNotArray || valueNotNumber || index < 0 || index >= arrayLength) {
        return null;
    };
    return array[index];
};

console.log(getElementAtIndex([1,2,3], 2)); //3
console.log(getElementAtIndex("b", 2)); //null
console.log(getElementAtIndex(null, 2)); //null
console.log(getElementAtIndex(undefined, 2)); //null

//Hàm checkEmpty
function checkEmpty(value) {
    let valueNull = isNull(value);
    let valueUndefined = isUndefined(value);
    if(valueNull || valueUndefined) {
        return "Trống";
    };
    return "Không trống";
};
console.log(checkEmpty(null)); //Trống
console.log(checkEmpty(undefined)); //Trống
console.log(checkEmpty("undefined")); //Không trống
console.log(checkEmpty(1)); //Không trống
console.log(checkEmpty(1n)); //Không trống
console.log(checkEmpty("   ")); //Không trống


//Hàm convertDatatype
function convertDatatype(value, type) {
    switch (type){
        case "number":
            value = Number(value);
            break;
        case "string":
            value = String(value);
            break;
        case "boolean":
            value = Boolean(value);
            break;
        default:
            value = "Invalid type";
    };
    return value;
};
console.log("Kiểm tra hàm convertDatatype: ");
console.log(convertDatatype(123, "boolean")); //true
console.log(convertDatatype(123, "undefined")); //Invalid type
console.log(convertDatatype("abc", "boolean")); // true
console.log(convertDatatype("123", "number")); //123
console.log(convertDatatype("two", "number")); //NaN
console.log(convertDatatype("undefined", "number")); //NaN

//Hàm calculate 
function calculate(a, b, operator) {
    let result;
    a = convertDatatype(a, "number");
    b = convertDatatype(b, "number");

    if(!isNaN(a) && !isNaN(b)) { //Không dùng toán tử so sánh !== vì NaN không bằng bất kỳ giá trị nào kể cả chính nó
        switch (operator) {
            case "add":
                result = a + b;
                break;
            case "subtract":
                result = a - b;
                break;
            case "multiply":
                result = a * b;
                break;
            case "divide":
                if(b != 0) {
                    result = a / b;
                } else {
                    result = "Cannot divide by zero";
                };
                break;
            default:
                result = "Invalid operator";
        };
    } else {
        result = "Invalid input number";
    };

    return result;
};
console.log("Kiểm tra hàm calculate");
console.log(calculate(1, 2, "add")); //3
console.log(calculate(1, 0, "divide")); //Cannot divide by zero
console.log(calculate(1, "2", "subtract")); -1
console.log(calculate("1", 2, "add")); //3
console.log(calculate(1, 2, "sqrt")); //Invalid operator
console.log(calculate("ones", "two", "add")); //Invalid input number