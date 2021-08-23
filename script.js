// Happy King
let happy = [];
document.querySelectorAll(".happy-king").forEach(e => {
    happy.push(e);
})

const happyButton = document.querySelector("#happy-button");
happyButton.addEventListener("click", () => {
    happy[Math.floor(Math.random() * (happy.length))].play();
})


// Sad King
let sad = [];
document.querySelectorAll(".sad-king").forEach(e => {
    sad.push(e);
})

const sadButton = document.querySelector("#sad-button");
sadButton.addEventListener("click", () => {
    sad[Math.floor(Math.random() * (sad.length))].play();
})


// Laughing King

let laughing = [];
document.querySelectorAll(".laughing-king").forEach(e => {
    laughing.push(e);
})

const laughButton = document.querySelector("#laughing-button");
laughButton.addEventListener("click", () => {
    laughing[Math.floor(Math.random() * (laughing.length))].play();
})

// Angry King
let angry = [];
document.querySelectorAll(".angry-king").forEach(e => {
    angry.push(e);
})

const angryButton = document.querySelector("#angry-button");
angryButton.addEventListener("click", () => {
    angry[Math.floor(Math.random() * (angry.length))].play();
})
