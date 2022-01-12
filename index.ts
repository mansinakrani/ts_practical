let result = <HTMLInputElement>document.getElementById("inputtext");

type num = number | string;// Union type
//taking input and showing the numbers 1-10 and operators such as pi , e , mod etc
//Convert string input into number
let stringtonum = () => {
  return parseInt(result.value)
};
let calculate = (number:num) => {
    result.value += number
}
// equal operator
let Answer = () => {
    //condition checks the value contains ^ if yes then it will perform x^y
    if(result.value.indexOf("^")!== -1){
      let temp:num = result.value;
      //let x = temp.split("^")[0];
      //let y = temp.substring(temp.indexOf("^") + 1);
      let x = parseInt(temp.split("^")[0]); 
      let y = parseInt(temp.substring(temp.indexOf("^") + 1)); 
      result.value = String(Math.pow(x,y));
      return result.value;
    }
    try {
      result.value = eval(result.value);
    } 
    catch (err) {
      alert("Enter the valid Input");
    }  
}

//Clear value 
let clr = () => {
  result.value = "";
}

//function radian to degree
let deg = () => {
  let rad: number = stringtonum();
  let degr: number = (rad*180)/Math.PI;
  result.value = String(degr); 
}

//function for F-E -> ('F-E' stands for 'fixed to exponent') 
let f_e = () => {  
    result.value = String(Math.pow(10,stringtonum()));
    return result.value;
}

let ms: Array<number> = [];
let index:number = 0;
// function memory save
let memorysave = () =>{
  ms.push(parseInt(result.value));
  result.value = "";
}

//function memory plus (M+)
let memoryplus = () => {
  if (ms.length == 0) {
    alert("Nothing is stored in memory");
  } else {
    let sum: number = ms.reduce(function (num1: number, num2: number) {
      return num1 + num2;
    }, 0);
    return result.value = String(sum);
}
}

//function memory minus
let memoryminus = () => {
  if (ms.length == 0) {
    alert("Nothing is stored in memory");
  } 
}

//function memory recall 
let memoryrecall = () => {
      if (ms.length == 0) {
        alert("Nothing is stored in memory");
      } else {
        index %= ms.length;
        result.value = String(ms[index]);
        index++;
      }
}

//function memory clear
let memoryclear = () => {
    ms.splice(0, ms.length);
    result.value = "";
}

/* Trigonometry functions : */
//sin function 
let sin = () => { 
    result.value = String(Math.sin(stringtonum()));
    return result.value;
}

//cos function 
let cos = () => { 
    result.value = String(Math.cos(stringtonum()));
    return result.value;
}

//tan function 
let tan = () => { 
    result.value = String(Math.tan(stringtonum()));
    return result.value;
}

//asin function 
let asinh = () => { 
    result.value = String(Math.asin(stringtonum()));
    return result.value;
}

//acos function 
let acosh = () => { 
    result.value = String(Math.acos(stringtonum()));
    return result.value;
}

//atan function 
let atanh = () => { 
    result.value = String(Math.atan(stringtonum()));
    return result.value;
}

/* fumctions : */
//floor function 
let floor = () => { 
    result.value = String(Math.floor(stringtonum()));;
    return result.value;
}

//ceil function 
let ceil = () => { 
    result.value = String(Math.ceil(stringtonum()));
    return result.value;
}

//random function 
let random = () => { 
    result.value = String(Math.random());
    return result.value;
}

/* */
//x^3 or xpow3() function 
let xpow3 = () => { 
    result.value = String(Math.pow(stringtonum(),3));
    return result.value;
}

//2^x or powof2x() function 
let powof2x = () => { 
    result.value = String(Math.pow(2,stringtonum()));
    return result.value;
}

/* */
//delete function 
let del = () => { 
    result.value = result.value.slice(0,-1);
    return result.value;
}

/* */
//square function 
let square = () => { 
    result.value = String(Math.pow(stringtonum(),2));
    return result.value;
}

//reciprocal function 
let reciprocal = () => { 
    result.value = String(1/stringtonum());
    return result.value;
}

//abs() or | x | function 
let abs = () => { 
    result.value = String(Math.abs(stringtonum()));
    return result.value;
}

//exp() function 
let exp = () => { 
    result.value = String(Math.exp(stringtonum()));
    return result.value;
}

/* */
//square root or sqrt() function 
let sqrt = () => { 
    result.value = String(Math.sqrt(stringtonum()));
    return result.value;
}

//factorial function 
let fact = () => {
  let n: number = stringtonum();
  let ft: number = 1;
    if(n == 0 || n == 1) {
      ft = 1;
    }
    else {
      for(let i=n;i>=1;i--)
      {
        ft = ft*i;
      }
    } 
  result.value = String(ft);
}

//function 10 pow x
let powx = () => { 
    result.value = String(Math.pow(10,stringtonum()));
    return result.value;
}

//function logarithm or log
let log = () => { 
    result.value = String(Math.LOG10E); //
    return result.value;
}

/* */
//function ln
let ln = () => { 
    result.value = String(Math.log(stringtonum()));
    return result.value;
}

//function of +/-
let pm = () => { 
    result.value = String(-result.value);
    return result.value;
}


//function for taking input from keyboard (event:{ which: any; key: any; })
let inputKey = (event: any) => {
  let unicode= event.which;
  if (unicode>=48 && unicode <=57 || unicode==94 || unicode==40 || unicode==41  || unicode==42 || unicode==43  || unicode==45 || unicode==47  ){
  calculate(event.key);
  }
  else{ }
  if (unicode==13){ Answer();}
  if (unicode == 46) { del();} 
}
