function myFunction(msg,n){
    //parameter -> input
    console.log(msg);
}

myFunction("I love JS",100); //argument

//fuction -> 2 number,sum

function sum(x,y){
    console.log(x+y);
}

//return statement
function add(x,y){
    a = x+y;
    return a;
}
let val = add(4,9);
console.log(val);

//count vowels are not
function countVowels(str){
    let count = 0;
 for(const char of str){
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        count++;
    }
 }
 return count;
}

//return vowels by arrow function
const countVow = (str) => {

    let coun = 0;
    for(const char of str){
       if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
           coun++;
       }
    }
    return coun;
   };