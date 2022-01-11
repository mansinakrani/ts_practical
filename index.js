var result = document.getElementById("inputtext");
//type num = number | string // Union type
//taking input and showing the numbers 1-10 and operators such as pi , e , mod etc
var calculate = function (number) {
    result.value += number;
};
// equal operator
var Answer = function () {
    //condition checks the value contains ^ if yes then it will perform x^y
    if (result.value.includes("^") !== -1) {
        var temp = result.value;
        var x = temp.split("^")[0];
        var y = temp.substring(temp.indexOf("^") + 1);
        result.value = Math.pow(x, y);
    }
    try {
        result.value = eval(result.value);
    }
    catch (err) {
        alert("Enter the valid Input");
    }
};
//Clear value 
var clr = function () {
    result.value = "";
};
//function radian to degree
var deg = function () {
    var rad;
    var degr;
    rad = result.value;
    degr = (rad * 180) / Math.PI;
    result.value = degr;
};
//function for F-E -> ('F-E' stands for 'fixed to exponent') 
var f_e = function () {
    return function () {
        result.value = Math.pow(10, result);
        return result.value;
    };
};
var ms = [];
var index = 0;
// function memory save
var memorysave = function () {
    ms.push(parseInt(result.value));
    result.value = "";
    console.log(ms);
};
//function memory plus (M+)
var memoryplus = function () {
    if (ms.length == 0) {
        alert("Nothing is stored in memory");
    }
    else {
        var sum = ms.reduce(function (num1, num2) {
            return num1 + num2;
        }, 0);
        result.value = sum;
    }
};
//function memory minus
var memoryminus = function () {
    if (ms.length == 0) {
        alert("Nothing is stored in memory");
    }
};
//function memory recall 
var memoryrecall = function () {
    if (ms.length == 0) {
        alert("Nothing is stored in memory");
    }
    else {
        index %= ms.length;
        result.value = String(ms[index]);
        index++;
    }
};
//function memory clear
var memoryclear = function () {
    ms.splice(0, ms.length);
    result.value = "";
};
/* Trigonometry functions : */
//sin function 
var sin = function () { return result.value = Math.sin(result.value); };
//cos function 
var cos = function () { return result.value = Math.cos(result.value); };
//tan function 
var tan = function () { return result.value = Math.tan(result.value); };
//asin function 
var asinh = function () { return result.value = Math.asin(result.value); };
//acos function 
var acosh = function () { return result.value = Math.acos(result.value); };
//atan function 
var atanh = function () { return result.value = Math.atan(result.value); };
/* fumctions : */
//floor function 
var floor = function () { return result.value = Math.floor(result.value); };
//ceil function 
var ceil = function () { return result.value = Math.ceil(result.value); };
//random function 
var random = function () { return result.value = Math.random(); };
/* */
//x^3 or xpow3() function 
var xpow3 = function () { return result.value = Math.pow(result.value, 3); };
//2^x or powof2x() function 
var powof2x = function () { return result.value = Math.pow(2, result.value); };
/* */
//delete function 
var del = function () { return result.value = result.value.slice(0, -1); };
/* */
//square function 
var square = function () { return result.value = Math.pow(result.value, 2); };
//reciprocal function 
var reciprocal = function () { return result.value = 1 / result.value; };
//abs() or | x | function 
var abs = function () { return result.value = Math.abs(result.value); };
//exp() function 
var exp = function () { return result.value = Math.exp(result.value); };
/* */
//square root or sqrt() function 
var sqrt = function () { return result.value = Math.sqrt(result.value); };
//factorial function 
var fact = function () {
    var n = result.value;
    var ft = 1;
    if (n == 0 || n == 1) {
        ft = 1;
    }
    else {
        for (var i = n; i >= 1; i--) {
            ft = ft * i;
        }
    }
    result.value = ft;
};
//function 10 pow x
var powx = function () { return result.value = Math.pow(10, result.value); };
//function logarithm or log
var log = function () { return result.value = Math.LOG10E; }; //
/* */
//function ln
var ln = function () { return result.value = Math.log(result.value); };
//function of +/-
var pm = function () { return result.value = -result.value; };
//function for taking input from keyboard (event:{ which: any; key: any; })
var inputKey = function (event) {
    var unicode = event.which;
    if (unicode >= 48 && unicode <= 57 || unicode == 94 || unicode == 40 || unicode == 41 || unicode == 42 || unicode == 43 || unicode == 45 || unicode == 47) {
        calculate(event.key);
    }
    else { }
    if (unicode == 13) {
        Answer();
    }
    if (unicode == 46) {
        del();
    }
};
