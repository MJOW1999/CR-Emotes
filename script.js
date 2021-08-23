let happy = [];

document.querySelectorAll(".happy-king").forEach(e => {
    happy.push(e);
})


function playAudio() {
    let output = Math.floor(Math.random() * (happy.length));
    happy[output].play();
    console.log(output)
}

const button = document.querySelector("#button");
button.addEventListener("click", () => {
    playAudio();

})

