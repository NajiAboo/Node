const person = {
    name : 'naji',
    age: 30,
    greeting() {
        console.log('Hi I am ', this.name);
    }
}

person.greeting();

const copiedPerson = {... person};
console.log(copiedPerson);

const hobbies = ['cricket','football'];

for(let hobby of hobbies){
    console.log(hobby);
}

console.log(hobbies.map(hobby => 'hobby: ' + hobby));

console.log(hobbies);


setTimeout(() => {
    console.log('timer');
}, 200);

console.log("This is a test after timer");