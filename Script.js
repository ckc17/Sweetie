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
/* =====================================
   PART 4B-1
   RIBBON & LETTER TRANSITION
===================================== */

const memoryBundle = document.getElementById("memoryBundle");
const ribbon = document.getElementById("ribbon");
const tapRibbon = document.getElementById("tapRibbon");

/* Show the ribbon bundle after the letter is finished */

function showMemoryBundle(){

    setTimeout(()=>{

        memoryBundle.classList.add("showBundle");

        letter.animate([

            {
                transform:"translateX(-50%) translateY(-240px)"
            },

            {
                transform:"translateX(-50%) translateY(-255px)"
            },

            {
                transform:"translateX(-50%) translateY(-240px)"
            }

        ],{

            duration:2500

        });

    },1200);

}

/* ---------- UPDATE TYPEWRITER ---------- */
/* Replace ONLY the write() function with this */

function write(){

    if(i < message.length){

        letterText.innerHTML += message.charAt(i);

        i++;

        setTimeout(write,35);

    }else{

        finishLetter();

    }

}

/* ---------- FINISH LETTER ---------- */

function finishLetter(){

    showMemoryBundle();

}

/* ---------- OPEN MEMORY BUNDLE ---------- */

ribbon.addEventListener("click",()=>{

    ribbon.style.transition=".8s";

    ribbon.style.transform=
    "translate(-50%,-50%) scaleX(0)";

    ribbon.style.opacity="0";

    tapRibbon.style.opacity="0";

    /* Fold letter back inside envelope */

    setTimeout(()=>{

        letter.style.transition="1.2s";

        letter.style.transform=
        "translateX(-50%) translateY(-20px)";

    },600);

    /* Photos scatter in Part 4B-2 */

    setTimeout(()=>{

        scatterPhotos();

    },1700);

});
/* =====================================
   PART 4B-2
   POLAROID SCATTER
===================================== */

const photos = document.querySelectorAll(".memory");

/* Final positions */

const positions = [

{
x:-260,
y:-120,
r:-15
},

{
x:190,
y:-140,
r:12
},

{
x:-170,
y:110,
r:8
},

{
x:220,
y:120,
r:-10
}

];

/* Scatter */

function scatterPhotos(){

    photos.forEach((photo,index)=>{

        setTimeout(()=>{

            photo.style.transition=
            "1s cubic-bezier(.22,1.6,.35,1)";

            photo.style.transform=

            `translate(${positions[index].x}px,

            ${positions[index].y}px)

            rotate(${positions[index].r}deg)

            scale(1)`;

            photo.style.zIndex=index+20;

        },index*450);

    });

}

/* =====================================
   TAP TO ENLARGE
===================================== */

photos.forEach(photo=>{

    photo.addEventListener("click",()=>{

        if(photo.classList.contains("open")){

            closePhoto(photo);

        }

        else{

            openPhoto(photo);

        }

    });

});

function openPhoto(photo){

    photos.forEach(p=>{

        if(p!==photo){

            p.style.filter="blur(5px) brightness(.5)";

            p.style.opacity=".45";

        }

    });

    photo.classList.add("open");

    photo.style.transition=".6s";

    photo.style.transform=

    "translate(0,0) scale(1.8) rotate(0deg)";

    photo.style.zIndex=999;

}

function closePhoto(photo){

    photos.forEach((p,index)=>{

        p.style.filter="none";

        p.style.opacity="1";

    });

    photo.classList.remove("open");

    const pos=positions[[...photos].indexOf(photo)];

    photo.style.transform=

    `translate(${pos.x}px,

    ${pos.y}px)

    rotate(${pos.r}deg)

    scale(1)`;

}
/* =====================================
   MEMORY STORY
===================================== */

let currentMemory=0;

function activateMemory(){

photos.forEach(photo=>{

photo.classList.remove("active");

});

if(currentMemory<photos.length){

photos[currentMemory]

.classList.add("active");

}

}

activateMemory();

photos.forEach(photo=>{

photo.addEventListener("click",()=>{

currentMemory++;

activateMemory();

});

});
