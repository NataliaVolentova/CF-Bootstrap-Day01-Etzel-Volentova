//function multiplication (a: integer, b: integer){
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array[0]);
for (var i = 0; i < array.length; i++) {
    for (var a = 0; a < array.length; a++) {
        console.log(array[i] + " * ", array[a] + " = " + array[i] * array[a]);
    }
}
//---------------------------------------------- basic ex 2----------------------------------------
//var name = "Mark";
//var lastname= "Etzel";
var name = ["Mark", "Etzel"];
console.log(name);
array.forEach(function (element) {
    console.log(name[1]);
});
