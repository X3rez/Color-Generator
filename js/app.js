const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"a","b","c","d","e","f"];
const $color = document.querySelector(".container_second-text");
const $bton = document.querySelector(".button");
const $background = document.querySelector(".main");

$bton.addEventListener("click",()=>{
    let hexColor = "#";
    for(let i = 0;i<6;++i){
        hexColor += hex[numRamdom()]
    }
    $color.textContent = hexColor;
    $background.style.backgroundColor = hexColor;
})

function numRamdom(){
    return Math.floor(Math.random() * hex.length)
}