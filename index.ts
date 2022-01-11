let result:any = <HTMLInputElement>document.getElementById("inputtext");

//type num = number | string // Union type
//taking input and showing the numbers 1-10 and operators such as pi , e , mod etc
const calculate = (number:number) => {
    result.value += number;
};

// equal operator
const Answer = () => {
    //condition checks the value contains ^ if yes then it will perform x^y
    if(result.value.indexOf("^")!== -1){
      let temp = result.value;
      let x = temp.split("^")[0];
      let y = temp.substring(temp.indexOf("^") + 1);
      result.value = Math.pow(x,y);
    }
    try {
      result.value = eval(result.value);
    } catch (err) {
      alert("Enter the valid Input");
    }   
};

//Clear value 
const clr = () => {
  result.value = "";
}

//function radian to degree
const deg = () => {
    let rad:number;
    let degr: number;
    rad = result.value;
    degr = (rad*180)/Math.PI;
    result.value = degr; 
}

//function for F-E -> ('F-E' stands for 'fixed to exponent') 
const f_e = () => {
  return function() {  
    result.value = Math.pow(10,result);
    return result.value;
  };
}


const ms: Array<number> = [];
let index:number = 0;
// function memory save
const memorysave = () =>{
  ms.push(parseInt(result.value));
  result.value = "";
  console.log(ms);
}

//function memory plus (M+)
const memoryplus = () => {
  if (ms.length == 0) {
    alert("Nothing is stored in memory");
  } else {
    let sum: number = ms.reduce(function (num1: number, num2: number) {
      return num1 + num2;
    }, 0);
    result.value = sum;
}
}

//function memory minus
const memoryminus = () => {
    let temp = "-" + result.value;
    ms.push(parseInt(temp));
    result.value = result.value + temp;
}

//function memory recall 
const memoryrecall = () => {
      if (ms.length == 0) {
        alert("Nothing is stored in memory");
      } else {
        index %= ms.length;
        result.value = String(ms[index]);
        index++;
      }
}

//function memory clear
const memoryclear = () => {
    ms.splice(0, ms.length);
    result.value = "";
    console.log(ms);
}

/* Trigonometry functions : */
//sin function 
const sin = () => result.value = Math.sin(result.value);

//cos function 
const cos = () => result.value = Math.cos(result.value);

//tan function 
const tan = () => result.value = Math.tan(result.value);

//asin function 
const asinh = () => result.value = Math.asin(result.value);

//acos function 
const acosh = () => result.value = Math.acos(result.value);

//atan function 
const atanh = () => result.value = Math.atan(result.value);

/* fumctions : */
//floor function 
const floor = () => result.value = Math.floor(result.value);

//ceil function 
const ceil = () => result.value = Math.ceil(result.value);

//random function 
const random = () => result.value = Math.random();

/* */
//x^3 or xpow3() function 
const xpow3 = () => result.value = Math.pow(result.value,3);

//2^x or powof2x() function 
const powof2x = () => result.value = Math.pow(2, result.value);

/* */
//deconste function 
const del = () => result.value = result.value.slice(0,-1);

/* */
//square function 
const square = () => result.value = Math.pow(result.value , 2);

//reciprocal function 
const reciprocal = () => result.value = 1/result.value;

//abs() or | x | function 
const abs = () => result.value = Math.abs(result.value);

//exp() function 
const exp = () => result.value = Math.exp(result.value);

/* */
//square root or sqrt() function 
const sqrt = () => result.value = Math.sqrt(result.value);

//factorial function 
const fact = () => {
  let n: number = result.value;
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
  result.value = ft;
}

//function 10 pow x
const powx = () => result.value = Math.pow(10,result.value); 

//function logarithm or log
const log = () => result.value = Math.LOG10E; //

/* */
//function ln
const ln = () => result.value = Math.log;

//function of +/-
const pm = () => result.value = -result.value;

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
