/* =====================================
   FOREVER & ALWAYS
   SCRIPT 3A
===================================== */

const intro = document.getElementById("intro");

const startBtn = document.getElementById("startStory");

const envelopeSection = document.getElementById("envelopeSection");

const envelope = document.querySelector(".envelope");

const flap = document.querySelector(".flap");

const seal = document.querySelector(".seal");

const paper = document.querySelector(".paper");

const typedText = document.getElementById("typedText");

const music = document.getElementById("bgMusic");

/* =====================================
   LOVE LETTER
===================================== */

const message = `
I LOVE YOU MY BUBU 
thankyou for everything i am very grateful for you 
you really are the sunshine of my life 
through all the ups and downs 
thankyou for staying with me 
and loving me i will be there for you always
I love you more always 😚😚


`;

/* =====================================
   INTRO
===================================== */

startBtn.onclick = () => {

intro.style.opacity = "0";

intro.style.pointerEvents = "none";

setTimeout(() => {

envelopeSection.style.opacity = "1";

envelopeSection.style.pointerEvents = "auto";

},900);

}

/* =====================================
   START MUSIC
===================================== */

function startMusic(){

music.volume = 0;

music.play();

let volume = 0;

const fade = setInterval(()=>{

volume += 0.03;

music.volume = volume;

if(volume >= 1){

clearInterval(fade);

}

},200);

}

/* =====================================
   OPEN LETTER
===================================== */

seal.onclick = () => {

seal.style.display = "none";

flap.style.transform = "rotateX(180deg)";

paper.style.transition = "1.5s";

paper.style.transform =

"translateX(-50%) translateY(-240px)";

startMusic();

setTimeout(typeWriter,1200);

}
