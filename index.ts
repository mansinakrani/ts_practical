let result:any = <HTMLInputElement>document.getElementById("inputtext");

//taking input and showing the numbers 1-10 and operators such as pi , e , mod etc
let calculate = (number:any) => {
    result.value += number;
};

// equal operator
let Answer = () => {
    //condition checks the value contains ^ if yes then it will perform x^y
    if(result.value.includes("^")){
      let temp = result.value;
      let x = temp.split("^")[0];
      let y = temp.substring(temp.indexOf("^") + 1);
    result.value = Math.pow(x,y);
    }
      let ans = result.value;
      console.log("ans_ch",ans);
      ans=String(ans);
      let ans_new=ans.slice(-1);
      console.log("ans_new",ans_new);
      let numberBefore:any;
      if(isNaN(ans_new)){
          ans=ans.substring(0, ans.length - 1);
          numberBefore=ans
          console.log("numberBefore",numberBefore);
      }
      else{
          numberBefore = result.value;
      }

  numberBefore=<HTMLInputElement>document.getElementById("sm"); // displaying operations
  result.value = eval(numberBefore);// for calculating basic math operations
  let numberAfter;
  let num;
  numberAfter = result.value;
  num = numberAfter;
};

//Clear value 
function clr() {
  //result.value = "";
  let cl = <HTMLInputElement>document.getElementById("sm");
  cl.innerHTML="";
  result.value = "";
}

//function radian to degree
let deg = () => {
    let rad:any;
    let degr:any;
    rad = result.value;
    degr = (rad*180)/Math.PI;
    result.value = degr; 
}

//function for F-E -> ('F-E' stands for 'fixed to exponent') 
function f_e() {
  return function() {  
    result.value = Math.pow(10,result);
    return result.value;
  };
}


const ms:any = [];
var index = 0;
// function memory save
let memorysave = () =>{
  ms.push(parseInt(result.value));
  result.value = "";
  console.log(ms);
}

//function memory plus (M+)
let memoryplus = () => {
  if (ms.length == 0) {
    alert("Nothing is stored in memory");
  } else {
    var sum = ms.reduce(function (a: any, b: any) {
      return a + b;
    }, 0);
    console.log("total " + sum);
    result.value = sum;
}
}

//function memory minus
let memoryminus = () => {
    let temp = "-" + result.value;
    ms.push(parseInt(temp));
    result.value += temp;
   
}

//function memory recall 
let memoryrecall = () => {
      if (ms.length == 0) {
        alert("Nothing is stored in memory");
      } else {
        index %= ms.length;
        result.value = ms[index];
        index++;
      }
}

//function memory clear
let memoryclear = () => {
    ms.splice(0, ms.length);
    result.value = "";
    console.log(ms);
}

/* Trigonometry functions : */
//sin function 
let sin = () => result.value = Math.sin(result.value);

//cos function 
let cos = () => result.value = Math.cos(result.value);

//tan function 
let tan = () => result.value = Math.tan(result.value);

//asin function 
let asinh = () => result.value = Math.asin(result.value);

//acos function 
let acosh = () => result.value = Math.acos(result.value);

//atan function 
let atanh = () => result.value = Math.atan(result.value);

/* fumctions : */
//floor function 
let floor = () => result.value = Math.floor(result.value);

//ceil function 
let ceil = () => result.value = Math.ceil(result.value);

//random function 
let random = () => result.value = Math.random();

//trunc function 
//let trunc = () => result.value = Math.trunc(result.value);

/* */
//x^3 or xpow3() function 
let xpow3 = () => result.value = Math.pow(result.value,3);

//2^x or powof2x() function 
let powof2x = () => result.value = Math.pow(2, result.value);

//cuberoot or cbrt() function 
//let cbrt = () => result.value = Math.cbrt(result.value);

/* */
//delete function 
let del = () => result.value = result.value.slice(0,-1);

/* */
//square function 
let square = () => result.value = Math.pow(result.value , 2);

//reciprocal function 
let reciprocal = () => result.value = 1/result.value;

//abs() or | x | function 
let abs = () => result.value = Math.abs(result.value);

//exp() function 
let exp = () => result.value = Math.exp(result.value);

/* */
//square root or sqrt() function 
let sqrt = () => result.value = Math.sqrt(result.value);

//factorial function 
let fact = () => {
  let n = result.value;
  let ft = 1;
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
let powx = () => result.value = Math.pow(10,result.value); 

//function logarithm or log
let log = () => result.value = Math.LOG10E; //

/* */
//function ln
let ln = () => result.value = Math.log;

//function of +/-
let pm = () => result.value = -result.value;

//function for taking input from keyboard (event:{ which: any; key: any; })
let inputKey = (event: any) => {
  let unicode= event.which;
  console.log("event",event)
  console.log(unicode);
  if (unicode>=48 && unicode <=57 || unicode==94 || unicode==40 || unicode==41  || unicode==42 || unicode==43  || unicode==45 || unicode==47  ){
  console.log("event1",event)
  calculate(event.key);
  }
  else{
  }
  if(unicode==13){
      Answer();
  }
  if (unicode == 46 ) {
      del();
  } 
}
