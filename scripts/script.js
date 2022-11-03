// JavaScript Document
console.log("Howdy!");



// If you need to hide an element a few seconds after a button is clicked: 
// Add an event listener to the button element. Inside of the event handler function, 
// use the setTimeout method to invoke a function after a delay. Set the element's display property to none 

// var buttonn = document.querySelector("button");
// buttonn.addEventListener("click", coinGone);

// function coinGone () {
//     var firstCoin = document.querySelector("main section:first-of-type img:nth-of-type(4)");
//     firstCoin.classList.add("gone");
// }

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


window.addEventListener('load', ()=> { // roep geen functienaam aan daarom arrow function want dat is netter -Jeffrey
    
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

});



//   function doHide(){
//     document.getElementById( "imgHideShow" ).style.display = "none" ;
// }
//   function hideImage(){
//     setTimeout( "doHide()", 4000 ) ;
// }
