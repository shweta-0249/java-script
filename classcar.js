class classcar{
    constructor(name,year,model){
        this.year=year;
        this.name=name;
        this.model=model;
    }
    display(){
        console.log(`Car name is ${this.name}, ${this.year}
            and model is ${this.model}`);
    }
}
let car=new classcar("Suzuki",2024,"Swift");

car.display();