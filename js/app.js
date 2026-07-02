// ===============================================
// Background Image Rotator with Smooth Cross Fade
// ===============================================

const background = document.getElementById("background-fader");

const backgrounds = [
    "../images/img1.png",
    "../images/img2.png",
    "../images/img3.png",
];

// Fade timing
const DISPLAY_TIME = 10000;   // 10 seconds visible
const FADE_TIME = 2000;       // 2 second fade

let currentImage = 0;

// Load the first image immediately
background.style.backgroundImage = `url("${backgrounds[currentImage]}")`;

function rotateBackground() {

    // Fade out
    background.style.opacity = 0;

    setTimeout(() => {

        // Move to next image
        currentImage = (currentImage + 1) % backgrounds.length;

        // Swap image
        background.style.backgroundImage =
            `url("${backgrounds[currentImage]}")`;

        // Fade back in
        background.style.opacity = 1;

    }, FADE_TIME);

}

// Begin rotation
setInterval(rotateBackground, DISPLAY_TIME);


// ===============================================
// Countdown Timer
// ===============================================

const countdown = document.querySelector(".countdown");

// Launch Date
const launchDate = new Date("December 30, 2027 13:00:00").getTime();

// Update every second
const intvl = setInterval(() => {

    const now = Date.now();
    const distance = launchDate - now;

    if (distance <= 0) {
        clearInterval(intvl);

        countdown.style.color = "#17a2b8";
        countdown.innerHTML = "Launched!";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const mins = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    `;

}, 1000);