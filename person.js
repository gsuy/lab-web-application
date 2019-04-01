const person = {
    name: 'Nanthaphop Nanchai',
    age: 19
}

class Person {
constructor(name='Nanthaphop Nanchai',age=19){
    this.name = name;
    this.age = age;
}
greeting(){
    console.log(`My name is ${this.name} ,age is ${age}`);
}
}


module.exports = {person,Person};