// JavaScript Document
console.log("Howdy!");



// If you need to hide an element a few seconds after a button is clicked: 
// Add an event listener to the button element. Inside of the event handler function, 
// use the setTimeout method to invoke a function after a delay. Set the element's display property to none 

var buttonn = document.querySelector("button");
buttonn.addEventListener("click", coinGone);

function coinGone () {
    var firstCoin = document.querySelector("main section:first-of-type img:nth-of-type(4)");
    firstCoin.classList.add("gone");
}


//   function doHide(){
//     document.getElementById( "imgHideShow" ).style.display = "none" ;
// }
//   function hideImage(){
//     setTimeout( "doHide()", 4000 ) ;
// }
