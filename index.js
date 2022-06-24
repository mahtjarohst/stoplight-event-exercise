let stopButton = document.getElementById("stopButton");
let slowButton = document.getElementById("slowButton");
let goButton = document.getElementById("goButton");

stopButton.addEventListener("click", () => {
    stopLight.classList.toggle("stop");
});
slowButton.addEventListener("click", () => {
    slowLight.classList.toggle("slow");
});
goButton.addEventListener("click", () => {
    goLight.classList.toggle("go");
});
stopButton.addEventListener("mouseenter", () => {
    console.log(`Entered ${stopButton.innerText}`);
});

[stopButton, slowButton, goButton].forEach((button) => {
    button.addEventListener("mouseenter", () => {
        console.log(`Entered ${event.target.innerText} button `);
    });
    button.addEventListener("mouseleave", (event) => {
        console.log(`Left ${event.target.innerText} button`);
    });
});
