/* =====================================
   YESTERDAY ❤️
   VERSION 3.0
===================================== */

/* ---------- ELEMENTS ---------- */

const intro = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");

const envelopeScene = document.getElementById("envelopeScene");

const flap = document.querySelector(".flap");
const seal = document.querySelector(".seal");
const letter = document.querySelector(".letter");

const letterText = document.getElementById("letterText");

const music = document.getElementById("bgMusic");

const photoScene = document.getElementById("photoScene");

/* ---------- LETTER ---------- */

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

Forever Yours ❤️

`;

/* =====================================
   START WEBSITE
===================================== */

startBtn.addEventListener("click", () => {

    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";

    setTimeout(() => {
envelopeScene.style.opacity = "1";
envelopeScene.style.pointerEvents = "auto";
        

    }, 900);

});

/* =====================================
   OPEN ENVELOPE
===================================== */

seal.addEventListener("click", () => {

    seal.style.display = "none";

    flap.style.transform = "rotateX(180deg)";

    letter.style.transition = "1.4s";

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

        volume += 0.02;

        music.volume = volume;

        if(volume >= 0.8){

            music.volume = 0.8;

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

    else{

        finishLetter();

    }

}

/* =====================================
   LETTER FINISHED
===================================== */

function finishLetter(){

    setTimeout(()=>{

        /* Fold the letter back slightly */

        letter.style.transition="1.2s";

        letter.style.transform=
        "translateX(-50%) translateY(-30px)";

    },800);

    setTimeout(()=>{

        /* Show the photos */

        photoScene.classList.add("showPhotos");

    },1800);

}

/* =====================================
   LETTER FLOAT
===================================== */

setInterval(()=>{

    if(seal.style.display==="none"){

        letter.animate(

        [

        {

        transform:
        "translateX(-50%) translateY(-240px)"

        },

        {

        transform:
        "translateX(-50%) translateY(-247px)"

        },

        {

        transform:
        "translateX(-50%) translateY(-240px)"

        }

        ],

        {

        duration:3000

        });

    }

},3000);

/* =====================================
   LETTER GLOW
===================================== */

let glow=0;

setInterval(()=>{

    glow+=0.05;

    letter.style.boxShadow=

    `0 20px 45px rgba(0,0,0,.25),

    0 0 ${25+Math.sin(glow)*10}px rgba(255,220,235,.45)`;

},40);
/* =====================================
   PETALS
===================================== */

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random()*100 + "vw";

    petal.style.fontSize = (18+Math.random()*12)+"px";

    petal.style.animationDuration = (6+Math.random()*4)+"s";

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },10000);

}

setInterval(createPetal,900);


/* =====================================
   SPARKLES
===================================== */

function createSparkle(){

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.innerHTML = "✨";

    sparkle.style.left = Math.random()*window.innerWidth+"px";

    sparkle.style.top = Math.random()*window.innerHeight+"px";

    sparkle.style.fontSize = (12+Math.random()*10)+"px";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },1800);

}

setInterval(createSparkle,700);


/* =====================================
   SHOOTING STAR
===================================== */

function shootingStar(){

    const star = document.createElement("div");

    star.className = "shootingStar";

    star.style.left = Math.random()*window.innerWidth+"px";

    star.style.top = Math.random()*180+"px";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2200);

}

setInterval(shootingStar,12000);


/* =====================================
   PHOTO APPEAR
===================================== */

const photos = document.querySelectorAll(".memory");

function showPhotos(){

    photos.forEach((photo,index)=>{

        setTimeout(()=>{

            photo.style.opacity="1";

            photo.style.animation="photoDrop .8s forwards";

        },index*250);

    });

}


/* =====================================
   PHOTO ZOOM
===================================== */

photos.forEach(photo=>{

    photo.addEventListener("click",()=>{

        if(photo.classList.contains("open")){

            photo.classList.remove("open");

        }

        else{

            photos.forEach(p=>p.classList.remove("open"));

            photo.classList.add("open");

        }

    });

});


/* =====================================
   SHOW PHOTOS AFTER LETTER
===================================== */

const oldFinishLetter = finishLetter;

finishLetter = function(){

    oldFinishLetter();

    setTimeout(showPhotos,1900);

};
