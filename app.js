let chalk = require("chalk");

let a= 3;
let name= "John";

console.log("my name is " + name);
console.log(a);
console.log(155 + 45);
console.log(a - 2);

let b= 5;
// h triplh isothta elegxei timh kai typo twn metavlitwn
console.log(a + b);
if(a === b){
    console.log("they are the same");
}else if(a < b){
    console.log("a is smaller than b");
}else{
    console.log("a is bigger than b");
}

let paok ="ole";

switch (paok){
    case "ole":
        console.log("PAOK OLE");
        break;
    case "double":
        console.log("oleoleole");
        break;
    default:
        console.log("good luck");
}

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.length);
console.log(name[0]);

let myTable = [5,4,3,2];
console.log(myTable);
console.log(myTable[1]);
console.log(myTable.length); // to length to plithos twn stoixeiwn tou pinaka

let names = ["John"];
console.log(names[0]);
names.push("Dimos"); // prosthetei st pinaka nea stoixeia
names.push("Annie");
console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

for(let i=0;i<names.length;i++){
    console.log("my name is " + names[i]);
}

// h idia loopa me nea js

for(let x of names){
    console.log(x);
}

names.splice(1,1);// afairei stoixeia apo pinaka, to prwto orisma einai h 8esh pou ksekinhsei na svunei kai to deutero posa stoixeia na svhsei
console.log(names);

let languages = ["HTML","CSS","JS","TS","C","C++"];

languages.pop(); // afairei to teleutaiostoixeio t pinaka
console.log(languages);
languages.shift();//afairei to prwto stoixeio tou pinaka
console.log(languages);
languages.unshift("Python");//prosthetei st prwth thesh to stoixeio sthn parenthesh
console.log(languages);

languages.forEach(lang => {
    console.log("language: "+ lang);
})

let personA = [
    "John",
    "Liolios",
    "liolios134@gmail.com",
    "Thessaloniki",
    "Greece"
];

console.log(personA);

let personB = {
    name: "Dimos",
    surname: "Karadimos",
    email: "dimos@gmail.com",
    city: "Thessaloniki",
    country: "Greece"
};
console.log(personB["email"]);

console.log("My name is " + chalk.bgRed(personB.name) + " " + chalk.bgBlue(personB.surname) + " my email is " + chalk.bgGreen(personB.email) + ". I live in " + chalk.bgYellow(personB.city) + " in " + chalk.bgMagenta(personB.country) + ".");
console.log(chalk.bgMagenta.blue("Hello world"));


