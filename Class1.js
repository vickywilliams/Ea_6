class Vehicle{
    constructor(name,engine){
        this.name = name;
        this.engine = engine;
    }
}

const bike = new Vehicle('jawa 42.2.1','350cc');
const bike1 = new Vehicle('bajaj','150cc' );

console.log(bike.name);
console.log(bike.engine);

console.log(bike1.name);
console.log(bike1.engine);