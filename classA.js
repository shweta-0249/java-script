 class classA {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log(`person name is ${ this.name} and is ${this. age}`);
    }
 }
 let myInfo = new classA("shweta",200);
 myInfo.display();