/* =====================================
   YESTERDAY ❤️
   PART 3A
===================================== */

const intro = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");

const envelopeScene = document.getElementById("envelopeScene");

const flap = document.querySelector(".flap");
const seal = document.querySelector(".seal");
const letter = document.querySelector(".letter");

const music = document.getElementById("bgMusic");
const letterText = document.getElementById("letterText");

/* =====================================
   LOVE LETTER
===================================== */

const message = `

Hi Beautiful ❤️,

I don't know if yesterday felt like
just another day to you...

But to me...

It became one of those memories
I'll keep replaying over and over.

Every smile.

Every laugh.

Every little moment with you...

made my entire day.

Thank you...

for making an ordinary day
feel unforgettable.

I hope we create hundreds
more memories like yesterday.

Forever yours ❤️

`;

/* =====================================
   INTRO
===================================== */

startBtn.addEventListener("click", () => {

intro.style.opacity = "0";
intro.style.pointerEvents = "none";

setTimeout(() => {

envelopeScene.style.opacity = "1";
envelopeScene.style.pointerEvents = "auto";

},900);

});

/* =====================================
   OPEN ENVELOPE
===================================== */

seal.addEventListener("click", () => {

seal.style.display = "none";

flap.style.transform = "rotateX(180deg)";

letter.style.transition = "1.5s";

letter.style.transform =
"translateX(-50%) translateY(-240px)";

startMusic();

setTimeout(typeWriter,1200);

});

/* =====================================
   MUSIC
===================================== */

function startMusic(){

music.volume = 0;

music.play().catch(()=>{});

let volume = 0;

const fade = setInterval(()=>{

volume += 0.03;

music.volume = volume;

if(volume >= 1){

music.volume = 1;

clearInterval(fade);

}

},180);

}

/* =====================================
   TYPEWRITER
===================================== */

let i = 0;

function typeWriter(){

letterText.innerHTML = "";

i = 0;

write();

}

function write(){

if(i < message.length){

letterText.innerHTML += message.charAt(i);

i++;

setTimeout(write,35);

}

}
/* =====================================
   PART 3B
   ATMOSPHERE & MAGIC
===================================== */

/* ---------- ROSE PETALS ---------- */

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"vw";

    petal.style.fontSize=(18+Math.random()*12)+"px";

    petal.style.animationDuration=(7+Math.random()*5)+"s";

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

}

setInterval(createPetal,900);


/* ---------- SPARKLES ---------- */

function createSparkle(){

    const sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.innerHTML="✨";

    sparkle.style.left=(window.innerWidth/2-180+Math.random()*360)+"px";

    sparkle.style.top=(window.innerHeight/2-220+Math.random()*420)+"px";

    sparkle.style.fontSize=(12+Math.random()*12)+"px";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },1800);

}

setInterval(createSparkle,400);


/* ---------- SHOOTING STAR ---------- */

function shootingStar(){

    const star=document.createElement("div");

    star.className="shootingStar";

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.top=Math.random()*180+"px";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2200);

}

setInterval(shootingStar,9000);


/* ---------- LETTER FLOAT ---------- */

setInterval(()=>{

    if(seal.style.display==="none"){

        letter.animate([

            {

                transform:"translateX(-50%) translateY(-240px)"

            },

            {

                transform:"translateX(-50%) translateY(-247px)"

            },

            {

                transform:"translateX(-50%) translateY(-240px)"

            }

        ],{

            duration:3000

        });

    }

},3000);


/* ---------- GLOW ---------- */

let glow=0;

setInterval(()=>{

    glow+=0.05;

    letter.style.boxShadow=

    `0 20px 45px rgba(0,0,0,.25),

     0 0 ${25+Math.sin(glow)*10}px rgba(255,220,235,.45)`;

},40);


/* ---------- END OF LETTER ---------- */

function finishLetter(){

    setTimeout(()=>{

        document.getElementById("photoScene").classList.add("showPhotos");

    },1500);

}
