let heroes = ["ironman","thor","hulk","shaktiman","spiderman","antman"]
//using for loop
for(let idx=0; idx<heroes.length; idx++){
    console.log(heroes[idx]);
}

//for of
// let heroes = ["ironman","thor","hulk","shaktiman","spiderman","antman"]
// for (let heroes of heroes){
//     console.log(heroes);
// }

//for of loop 2
let cities = ["delhi","pune","mumbai","hyderabad","gurgaon"];

for(let city of cities){
    console.log(city.toUpperCase());
}

//find average mark of st. in array
let marks = [85,97,44,37,76,60];

let sum = 0;

for(let val of marks){
    sum += val;
}
let avg = sum/marks.length;
console.log(`avg marks of class = ${avg}`); //tamplate

//traking of each index indirectly by for of loop 
let items = [250,645,300,900,50];

let i = 0;
for(let val of items){
    let offer = val/10;
    items[i] = items[i] - offer;
    console.log(`value after offer  = ${items[i]}`);
    i++;
}
//by using for loop
let item = [250,645,300,900,50];

for (let i = 0; i<item.length; i++){
    let offer = item[i]/10;
    item[i] -= offer;
}

console.log(item);
