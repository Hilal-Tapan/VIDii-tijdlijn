// JavaScript Document
console.log("Howdy!");

/////////////////////////////////////////////////////////////////////////////////////////////
// Vind princess 1
var findPrincess1 = document.querySelector("section:nth-of-type(2) ul li:nth-of-type(1)");
var princes1 = document.querySelector("section:nth-of-type(2) > ol li:nth-of-type(2)");

findPrincess1.addEventListener("click", () => {
    princes1.classList.add('zoekPrincess1')
})

// tekst wolkje princess 1
var wolkje1 = document.querySelector("section:nth-of-type(2) > ol li:nth-of-type(2) button");

wolkje1.addEventListener("click", () => {
    princes1.classList.toggle('tekstWolkje1')
})

/////////////////////////////////////////////////////////////////////////////////////////////
// Vind princess 2
var findPrincess2 = document.querySelector("section:nth-of-type(2) ul li:nth-of-type(2)");
var princes2 = document.querySelector("section:nth-of-type(2) > ol li:nth-of-type(3)");

findPrincess2.addEventListener("click", () => {
    princes2.classList.add('zoekPrincess2')
})

// tekst wolkje princess 2
var wolkje2 = document.querySelector("section:nth-of-type(2) > ol li:nth-of-type(3) button");

wolkje2.addEventListener("click", () => {
    princes2.classList.toggle('tekstWolkje2')
})

/////////////////////////////////////////////////////////////////////////////////////////////
// Vind princes 3
var findPrincess3 = document.querySelector("section:nth-of-type(2) ul li:nth-of-type(3)");
var princes3 = document.querySelector("section:nth-of-type(2) > ol li:nth-of-type(5)");

findPrincess3.addEventListener("click", () => {
    princes3.classList.add('zoekPrincess3')
})

// tekst wolkje princess 3
var wolkje3 = document.querySelector("section:nth-of-type(2) > ol li:nth-of-type(5) button");

wolkje3.addEventListener("click", () => {
    princes3.classList.toggle('tekstWolkje3')
})

/////////////////////////////////////////////////////////////////////////////////////////////
// tekst wolkje princess 4
var princes4 = document.querySelector("section:nth-of-type(2) > ol li:nth-of-type(1)");
var wolkje4 = document.querySelector("section:nth-of-type(2) > ol li:nth-of-type(1) button");

wolkje4.addEventListener("click", () => {
    princes4.classList.toggle('tekstWolkje4')
})

// tekst wolkje princess 5
var princes5 = document.querySelector("section:nth-of-type(2) > ol li:nth-of-type(4)");
var wolkje5 = document.querySelector("section:nth-of-type(2) > ol li:nth-of-type(4) button");

wolkje5.addEventListener("click", () => {
    princes5.classList.toggle('tekstWolkje5')
})

/////////////////////////////////////////////////////////////////////////////////////////////
// Animaties starten na klikken op de knop (sterretjes, princes en startknop)
var startButton = document.querySelector("header button");

startButton.addEventListener("click", start);

function start() {
    muntjesWeg();

    startButton.classList.add("buttonStart")

    var peach1 = document.querySelector("#peach1");
    peach1.classList.add("springen");
}

/////////////////////////////////////////////////////////////////////////////////////////////
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

function muntjesWeg() {

    setTimeout(() => {
        muntje1.classList.add('gone')
    }, 250);
    setTimeout(() => {
        muntje2.classList.add('gone')
    }, 400);
    setTimeout(() => {
        muntje3.classList.add('gone')
    }, 500);
    setTimeout(() => {
        muntje4.classList.add('gone')
    }, 600);
    setTimeout(() => {
        muntje5.classList.add('gone')
    }, 700);
    setTimeout(() => {
        muntje6.classList.add('gone')
    }, 1300);
    setTimeout(() => {
        muntje7.classList.add('gone')
    }, 1500);
    setTimeout(() => {
        muntje8.classList.add('gone')
    }, 1550);
    setTimeout(() => {
        muntje9.classList.add('gone')
    }, 1650);
}

// hulp gehad van Jeffrey maar begrijp het
var toBottom = document.querySelector("section:nth-of-type(1) button");
var bottomPls = document.querySelector('section:nth-of-type(2)')

toBottom.addEventListener("click", ()=> {
    bottomPls.scrollIntoView({behavior: 'smooth'});
    // waarde meegegeven dat die smooth gaat
});
