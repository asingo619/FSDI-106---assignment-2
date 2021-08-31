

function sayHello(name){
    console.log("Hi there!" + name);
}

function testFns(){

    sayHello("Andrew");

}

function Dog(name,age) {
    this.name = name;
    this.age = age;
}

class Cat {
    constructor(name,age,color) {
    this.name = name;
    this.age = age;
    this.color = color;
    }
}

function testObj(){

    // 3 different ways to create an object:
    //     -object literal - can only be used for 1 object.
            let lola = {
                name:"lola",
                age:"3",
            };
    //     -object constructor - is a function to create multiple objects.
           let fido = new Dog("fido", 4);
           let shilo = new Dog("shilo", 5);
           console.log(fido);
           console.log(shilo);
    //     -class - similar to object constructor. easier option to to include function.
            let simba = new Cat("Simba", 3, "Black");
            console.log(simba);
        
}



