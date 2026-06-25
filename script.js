let rigEnabled = false;
function checkPromo() {

    const code =
        document.getElementById("promoInput")
        .value
        .trim()
        .toLowerCase();

    if (code === "clark") {

    rigEnabled = true;

    document.getElementById("rigPanel")
        .style.display = "block";

}

}

const colors = [
    "white",
    "blue",
    "red",
    "green",
    "yellow",
    "violet"
];

const colorMap = {
    white: "#ffffff",
    blue: "#3b82f6",
    red: "#ef4444",
    green: "#22c55e",
    yellow: "#facc15",
    violet: "#a855f7"
};

function randomColor() {
    return colors[
        Math.floor(Math.random() * colors.length)
    ];
}

function checkPromo() {

    const code =
        document.getElementById("promoInput")
        .value
        .trim()
        .toLowerCase();

    if (code === "clark") {

        document.getElementById("rigPanel")
.style.display = "block";

document.getElementById("restoreRig")
.style.display = "none";


    }

}

document.querySelector(".roll-btn")
.addEventListener("click", () => {

    const dice1 = document.getElementById("dice1");
    const dice2 = document.getElementById("dice2");
    const dice3 = document.getElementById("dice3");

    const animation = setInterval(() => {

        dice1.style.backgroundColor =
            colorMap[randomColor()];

        dice2.style.backgroundColor =
            colorMap[randomColor()];

        dice3.style.backgroundColor =
            colorMap[randomColor()];

    }, 100);

    setTimeout(() => {

        clearInterval(animation);

        const d1 =
            document.getElementById("dice1Rig").value
            || randomColor();

        const d2 =
            document.getElementById("dice2Rig").value
            || randomColor();

        const d3 =
            document.getElementById("dice3Rig").value
            || randomColor();

        dice1.style.backgroundColor =
            colorMap[d1];

        dice2.style.backgroundColor =
            colorMap[d2];

        dice3.style.backgroundColor =
            colorMap[d3];

    }, 1000);

});

const rigPanel =
    document.getElementById("rigPanel");

const rigContent =
    document.getElementById("rigContent");

const restoreRig =
    document.getElementById("restoreRig");

document
.getElementById("minimizeRig")
.addEventListener("click", () => {

    rigPanel.style.display = "none";

    restoreRig.style.display = "block";

});

restoreRig.addEventListener("click", () => {

    rigPanel.style.display = "block";

    restoreRig.style.display = "none";

});

document
.getElementById("closeRig")
.addEventListener("click", () => {

    rigEnabled = false;

    document.getElementById("dice1Rig").value = "";
    document.getElementById("dice2Rig").value = "";
    document.getElementById("dice3Rig").value = "";

    rigPanel.style.display = "none";

    restoreRig.style.display = "none";

});