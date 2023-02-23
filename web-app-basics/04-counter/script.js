const elButto = document.querySelector("button");
const counter = document.querySelector(".counter");
const bar = document.querySelectorAll(".bar");

const main = document.querySelector("main");
let numberCounter = 0;
let barCounter = 0;

main.addEventListener("click", function () {
    numberCounter++;
    counter.textContent = numberCounter;
    
    if(barCounter < 100){
        bar[barCounter].style.background = "linear-gradient(gold 100%, white 100%)";
    }
    barCounter++
    
    if(barCounter > 100){
        for(let i = 0; i < bar.length; i++){
            bar[i].style.background = "white";
        }
        barCounter = 1;
        bar[0].style.background = "gold";
    }
});

elButto.addEventListener("click", function() {
    numberCounter = 0;
    barCounter = 0;
    counter.textContent = 0;
    for(let i = 0; i < bar.length; i++){
        bar[i].style.background = "white";
    }
})