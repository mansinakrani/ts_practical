var result = document.getElementById("inputtext");
//taking input and showing the numbers 1-10 and operators such as pi , e , mod etc
//Convert string input into number
var stringtonum = function () {
    return parseInt(result.value);
};
var calculate = function (number) {
    result.value += number;
};
// equal operator
var Answer = function () {
    //condition checks the value contains ^ if yes then it will perform x^y
    if (result.value.indexOf("^") !== -1) {
        var temp = result.value;
        //let x = temp.split("^")[0];
        //let y = temp.substring(temp.indexOf("^") + 1);
        var x = parseInt(temp.split("^")[0]);
        var y = parseInt(temp.substring(temp.indexOf("^") + 1));
        result.value = String(Math.pow(x, y));
        return result.value;
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
    var rad = stringtonum();
    var degr = (rad * 180) / Math.PI;
    result.value = String(degr);
};
//function for F-E -> ('F-E' stands for 'fixed to exponent') 
var f_e = function () {
    result.value = String(Math.pow(10, stringtonum()));
    return result.value;
};
var ms = [];
var index = 0;
// function memory save
var memorysave = function () {
    ms.push(parseInt(result.value));
    result.value = "";
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
        return result.value = String(sum);
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
var sin = function () {
    result.value = String(Math.sin(stringtonum()));
    return result.value;
};
//cos function 
var cos = function () {
    result.value = String(Math.cos(stringtonum()));
    return result.value;
};
//tan function 
var tan = function () {
    result.value = String(Math.tan(stringtonum()));
    return result.value;
};
//asin function 
var asinh = function () {
    result.value = String(Math.asin(stringtonum()));
    return result.value;
};
//acos function 
var acosh = function () {
    result.value = String(Math.acos(stringtonum()));
    return result.value;
};
//atan function 
var atanh = function () {
    result.value = String(Math.atan(stringtonum()));
    return result.value;
};
/* fumctions : */
//floor function 
var floor = function () {
    result.value = String(Math.floor(stringtonum()));
    ;
    return result.value;
};
//ceil function 
var ceil = function () {
    result.value = String(Math.ceil(stringtonum()));
    return result.value;
};
//random function 
var random = function () {
    result.value = String(Math.random());
    return result.value;
};
/* */
//x^3 or xpow3() function 
var xpow3 = function () {
    result.value = String(Math.pow(stringtonum(), 3));
    return result.value;
};
//2^x or powof2x() function 
var powof2x = function () {
    result.value = String(Math.pow(2, stringtonum()));
    return result.value;
};
/* */
//delete function 
var del = function () {
    result.value = result.value.slice(0, -1);
    return result.value;
};
/* */
//square function 
var square = function () {
    result.value = String(Math.pow(stringtonum(), 2));
    return result.value;
};
//reciprocal function 
var reciprocal = function () {
    result.value = String(1 / stringtonum());
    return result.value;
};
//abs() or | x | function 
var abs = function () {
    result.value = String(Math.abs(stringtonum()));
    return result.value;
};
//exp() function 
var exp = function () {
    result.value = String(Math.exp(stringtonum()));
    return result.value;
};
/* */
//square root or sqrt() function 
var sqrt = function () {
    result.value = String(Math.sqrt(stringtonum()));
    return result.value;
};
//factorial function 
var fact = function () {
    var n = stringtonum();
    var ft = 1;
    if (n == 0 || n == 1) {
        ft = 1;
    }
    else {
        for (var i = n; i >= 1; i--) {
            ft = ft * i;
        }
    }
    result.value = String(ft);
};
//function 10 pow x
var powx = function () {
    result.value = String(Math.pow(10, stringtonum()));
    return result.value;
};
//function logarithm or log
var log = function () {
    result.value = String(Math.LOG10E); //
    return result.value;
};
/* */
//function ln
var ln = function () {
    result.value = String(Math.log(stringtonum()));
    return result.value;
};
//function of +/-
var pm = function () {
    result.value = String(-result.value);
    return result.value;
};
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
