// const nathan = "Hello world!";
// document.getElementById("myDemo").innerHTML = nathan;

let x = 6;
let y = 8;
z = x + y;
document.querySelector("p").innerHTML = z;

let myWidth = document.getElementById("recwidth");
let myLength = document.getElementById("reclength");
let form = document.querySelector("form");
let answerSpan = document.querySelector(".answer")

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let widthValue = parseFloat(myWidth.value);
    let lengthValue = parseFloat(myLength.value);

    function area(widthValue, lengthValue){
        const area = widthValue * lengthValue
        answerSpan.innerHTML = area;
    }

    area(widthValue, lengthValue)
});


// let recAera2 = inputLength * inputWidth;

// document.querySelector("span").innerHTML = recAera2;


// let myWidth1 = 5;
// let myLength2 = 6;

// recAera = myLength2 * myWidth1;

// document.querySelector("p").innerHTML = recAera;

let hobby;
let employees = {
    name:"Odhiambo Moses",
    empNumber:365,
    idNumber:12355367,
    doBirth:1/1/2024,
    phoneNumber:"0710116583",
    hobbies:['Playing FIFA','Dancing','Eating','Playing Football']
}

console.log("The new employee is " + employees.name);
console.log("His employee number is " + employees.empNumber)
console.log("This is his most favorite hobby: " + employees.hobbies[employees.hobbies.length-1]);

nuM = 1;
while (nuM < employees.hobbies.length){
    for (hobby in employees.hobbies) {
        console.log(nuM + " " + employees.hobbies[hobby]);
        nuM++; 
    }
}