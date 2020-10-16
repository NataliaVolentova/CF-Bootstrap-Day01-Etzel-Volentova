//---------------------------------------------- basic ex a----------------------------------------

var array: Array<number>=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i=0; i<array.length; i++){
    for (let a= 0; a<array.length; a++){
        console.log(array[i] + ' * ' + array[a] + ' = ' + array[i] * array[a] );
    }  
}

//---------------------------------------------- basic ex 2----------------------------------------

//Do not use 'name' as a variable

var names: Array<string>=["Mark", "Etzel"];

var names_obj = {first: "Natalia", last: "Volentova"}

//2.1
console.log(names[0], names[1]);
console.log(names_obj.first, names_obj['last']);

//2.2
array.forEach(element => {
    console.log(names[0]);
    
});

//2.3
setTimeout(function() {
    for (let index = 0; index < 10; index++) {
        console.log(names_obj.last);
    }
 }, 5000);

//---------------------------------------------- basic ex 3----------------------------------------

var topFemaleNames: Array<string>=["Anna", "Hannah", "Lena", "Sarah", "Sophie", "Emma", "Julia", "Marie", "Leonie", "Laura"];

//3.1
for (var i in topFemaleNames) {
    console.log(i)
}

//3.2
for (var i of topFemaleNames) {
    console.log(i)
}

//3.3.
topFemaleNames.forEach((value, index) => {
    console.log(index, value);
});

//Alternative solution which requires ES6 to work, i.e.  tsc [file].ts -w --target es6 or tsc -w with a tsconfig.json present
for (var [key, value] of topFemaleNames.entries()) {
    console.log(key, value);
}