// JavaScript Document
console.log("Howdy!");


// Animaties starten na klikken op de knop (sterretjes, princes en startknop)
var startButton = document.querySelector("header button");

startButton.addEventListener("click", start);

function start() {
    muntjesWeg();

 startButton.classList.add("buttonStart")

var peach1 = document.querySelector("#peach1");
peach1.classList.add("springen");
}

// variabalen muntjes
var muntSelector = 'section:nth-of-type(1) > img:nth-of-type('
var muntje1 = document.querySelector(muntSelector + '4)')
var muntje2 = document.querySelector(muntSelector + '5)')
var muntje3 = document.querySelector(muntSelector + '6)')
var muntje4 = document.querySelector(muntSelector + '7)')
var muntje5 = document.querySelector(muntSelector + '8)')
var muntje6 = document.querySelector(muntSelector + '9)')
var muntje7 = document.querySelector(muntSelector + '10)')
var muntje8 = document.querySelector(muntSelector + '11)')
var muntje9 = document.querySelector(muntSelector + '12)')  


// Ik heb met muntje 1 hulp gekregen van Jeffrey maar 
// ik begrijp de code en heb de rest van de muntjes zelf uitgewerkt.

function muntjesWeg(){

    setTimeout(()=>{
        muntje1.classList.add('gone')
    }, 250);
    setTimeout(()=>{
        muntje2.classList.add('gone')
    }, 400);
    setTimeout(()=>{
        muntje3.classList.add('gone')
    }, 500);
    setTimeout(()=>{
        muntje4.classList.add('gone')
    }, 600);
    setTimeout(()=>{
        muntje5.classList.add('gone')
    }, 700);
    setTimeout(()=>{
        muntje6.classList.add('gone')
    }, 1300);
    setTimeout(()=>{
        muntje7.classList.add('gone')
    }, 1500);
    setTimeout(()=>{
        muntje8.classList.add('gone')
    }, 1550);
    setTimeout(()=>{
        muntje9.classList.add('gone')
    }, 1650);
}


    // variabelen timer
    // var muntjes = 0;
    // var mijnInterval = setInterval( function(){
    //     muntjes++;
    //     console.log(muntjes)
    //     if(muntjes > 8){
    //         clearInterval(mijnInterval);
    //         console.log('klaar')
    //     }
    // }, 1000);
    // Waarom interval als ze aangaf dat de muntjes op verschillende tijden moesten verdwijnen?

//   function doHide(){
//     document.getElementById( "imgHideShow" ).style.display = "none" ;
// }
//   function hideImage(){
//     setTimeout( "doHide()", 4000 ) ;
// }
