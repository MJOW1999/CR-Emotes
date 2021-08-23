// Happy King
let happy = [];
document.querySelectorAll(".happy-king").forEach(e => {
    happy.push(e);
})

function playAudio() {
    let output = Math.floor(Math.random() * (happy.length));
    happy[output].play();
    console.log(output)
}

const happyButton = document.querySelector("#happy-button");
happyButton.addEventListener("click", () => {
    playAudio();
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

