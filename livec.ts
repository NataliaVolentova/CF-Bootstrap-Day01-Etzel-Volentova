function guessTheResult(){
    for (let i = 0; i < 3; i++){
        document.getElementById("result").innerHTML += `
            <button class ="btn"> click me</button>
        `;
    }
    let btns=document.getElementsByClassName("btn");
    for(let i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", function(){
            console.log(i);
        })
    }
}




//if the function is not returning anything - it is type of void
//let name: Array [{id: number, name: string}] //how to finish it?

function test (a: number, b?: number){ // b is optional
    console.log(a+b)
}
test(2,5);

//you can define function with the var and name as well
var test = function(a: number, b?: number){
    console.log(a + b);
}





//there is setTimeout(function())  which will return the output  of a function after a specified time





function identity <T>(data:T){ //any, number, string, bool/void
    return data;
}

console.log(identity("Natka").length);
console.log(identity<string>("24"));
console.log(identity<{id: number, name: string}> ({id: 11, name:"Natka"}));


//constant - you can add as many properties as you wish
const foo = {};
foo['age'] = "30";
foo['name']= "Natka";

//constant - you can not add as many properties as you wish - nr of properties is specified - freezed
const foo = Object.freeze({"pi": 3.14, "e": 2.71});




//arrays

let array =[10,13,15];

//in- index value of the element
for (let anyvalueyouwant in array){ //you can use cammelCase if you want
    console.log(anyvalueyouwant);
    //or console.log(array[0]);
}

//of - value of the element