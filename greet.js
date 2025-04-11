//greet for function calling

function greet(){
    console.log("Hello js");
}
greet();

//function with  default parameter

function calculation(a,b){
    var c=a*b;
    console.log(c);
}
  calculate(6);


  //template literals
  (function calculation() {
    var z=x/y;
    console.log(`result of two number is ${z}`);
  })
  (20,12);