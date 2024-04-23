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

    let widthValue = myWidth.value;
    let lengthValue = myLength.value;

    function area(widthValue, lengthValue){
        const area = widthValue * lengthValue
        answerSpan.innerHTML = area;
    }

    area(widthValue, lengthValue)
})


// let recAera2 = inputLength * inputWidth;

// document.querySelector("span").innerHTML = recAera2;


// let myWidth1 = 5;
// let myLength2 = 6;

// recAera = myLength2 * myWidth1;

// document.querySelector("p").innerHTML = recAera;

