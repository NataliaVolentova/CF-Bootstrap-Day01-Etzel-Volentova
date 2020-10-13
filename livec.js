function guessTheResult() {
    for (var i = 0; i < 3; i++) {
        document.getElementById("result").innerHTML += "\n            <button class =\"btn\"> click me</button>\n        ";
    }
    var btns = document.getElementsByClassName("btn");
    var _loop_1 = function (i) {
        btns[i].addEventListener("click", function () {
            console.log(i);
        });
    };
    for (var i = 0; i < btns.length; i++) {
        _loop_1(i);
    }
}
//if the function is not returning anything - it is type of void
//let name: Array [{id: number, name: string}] //how to finish it?
function test(a, b) {
    console.log(a + b);
}
test(2, 5);
//you can define function with the var and name as well
var test = function (a, b) {
    console.log(a + b);
};
//there is setTimeout(function())  which will return the output  of a function after a specified time
function identity(data) {
    return data;
}
console.log(identity("Natka").length);
console.log(identity("24"));
console.log(identity({ id: 11, name: "Natka" }));
//constant - you can add as many properties as you wish
var foo = {};
foo['age'] = "30";
foo['name'] = "Natka";
//constant - you can not add as many properties as you wish - nr of properties is specified - freezed
var foo = Object.freeze({ "pi": 3.14, "e": 2.71 });
//arrays
var array = [10, 13, 15];
//in- index value of the element
for (var anyvalueyouwant in array) { //you can use cammelCase if you want
    console.log(anyvalueyouwant);
    //or console.log(array[0]);
}
//of - value of the element
