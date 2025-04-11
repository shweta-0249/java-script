// function first(){
//     console.log("Print First");
// }
// function second(){
//     console.log("Print Second");
// }
// function third(){
//     console.log("Print Third");
// }
// first();
// second();
// third();
// function display(res){
//     console.log(`Addition of two number is ${res}`);
// }
// function calculation(a,b){
//     let sum=(a+b);
//     display(sum);
// }
// calculation(3,3);

// function display(res){
//     console.log(`Addition of two number is ${res}`);
// }
// function calculation(a,b,callback){
//     let sum=a+b;
//     callback(sum);
// }
// calculation(4,3,display);

function first(){
    console.log("Print First");
}
function second(){
        console.log("Print Second");
     }
     function third(){
        console.log("Print Third");
     }
first();
setTimeout(second,2000);
third();
//second method
function first(){
    console.log("Print First");
}

     function third(){
        console.log("Print Third");
     }
first();
setTimeout(function second(){
    console.log("Print Second");
 },2000);
third();
