// All const:

const menu = document.querySelector(".menu");
const menucolor = document.querySelector(".menuColor");
const mybody = document.querySelector(".grey-background");
const homebackground = document.querySelector(".btnHome");
const redbackground = document.querySelector(".btnRed");
const orangebackground = document.querySelector(".btnOrange");
const purplebackground = document.querySelector(".btnPurple");
const greenbackground = document.querySelector(".btnGreen");
const rdbtnhome = document.querySelector(".rdBtnHome");
const rdbtnred = document.querySelector(".rdBtnRed");
const rdbtnorange = document.querySelector(".rdBtnOrange");
const rdbtnpurple = document.querySelector(".rdBtnPurple");
const rdbtngreen = document.querySelector(".rdBtnGreen");

// This is for the hover effect:
// function mouseEnter() {
//     menucolor.classList.toggle("show");
// }
// function mouseLeave() {
//     document.querySelector(".menu");
// }

//This is for the click effect:
menu.addEventListener('click', function () {
    menucolor.classList.toggle("show");
    document.querySelector(".menu");
})

// Standard background grey
const changeHomeBackground = () => {
    mybody.classList.add("btnHome");
    mybody.classList.remove("btnRed");
    mybody.classList.remove("btnOrange");
    mybody.classList.remove("btnPurple");
    mybody.classList.remove("btnGreen");
    document.getElementById("backgroundText").innerHTML = "This is the standard background color";
};
homebackground.addEventListener("click", changeHomeBackground);
rdbtnhome.addEventListener("click", changeHomeBackground);

// Red background
const changeRedBackground = () => {
    mybody.classList.add("btnRed");
    mybody.classList.remove("btnHome");
    mybody.classList.remove("btnOrange");
    mybody.classList.remove("btnPurple");
    mybody.classList.remove("btnGreen");
    document.getElementById("backgroundText").innerHTML = "This is a Red background";
};
redbackground.addEventListener("click", changeRedBackground);
rdbtnred.addEventListener("click", changeRedBackground);

// Orange background
const changeOrangeBackground = () => {
    mybody.classList.add("btnOrange");
    mybody.classList.remove("btnRed");
    mybody.classList.remove("btnHome");
    mybody.classList.remove("btnPurple");
    mybody.classList.remove("btnGreen");
    document.getElementById("backgroundText").innerHTML = "This is an Orange background";
};
orangebackground.addEventListener("click", changeOrangeBackground);
rdbtnorange.addEventListener("click", changeOrangeBackground);

// Purple background
const changePurpleBackground = () => {
    mybody.classList.add("btnPurple");
    mybody.classList.remove("btnRed");
    mybody.classList.remove("btnHome");
    mybody.classList.remove("btnOrange");
    mybody.classList.remove("btnGreen");
    document.getElementById("backgroundText").innerHTML = "This is a Purple background";
};
purplebackground.addEventListener("click", changePurpleBackground);
rdbtnpurple.addEventListener("click", changePurpleBackground);

// Green background
const changeGreenBackground = () => {
    mybody.classList.add("btnGreen");
    mybody.classList.remove("btnRed");
    mybody.classList.remove("btnHome");
    mybody.classList.remove("btnPurple");
    mybody.classList.remove("btnOrange");
    document.getElementById("backgroundText").innerHTML = "This is a Green background";
};
greenbackground.addEventListener("click", changeGreenBackground);
rdbtngreen.addEventListener("click", changeGreenBackground);

// Keypress:

document.addEventListener('keypress', function (e) {
    if (e.key == '1') {
        mybody.classList.add("btnHome");
        mybody.classList.remove("btnRed");
        mybody.classList.remove("btnOrange");
        mybody.classList.remove("btnPurple");
        mybody.classList.remove("btnGreen");
        document.getElementById("backgroundText").innerHTML = "This is the standard background color";
    } else if (e.key == '2') {
        mybody.classList.add("btnRed");
        mybody.classList.remove("btnHome");
        mybody.classList.remove("btnOrange");
        mybody.classList.remove("btnPurple");
        mybody.classList.remove("btnGreen");
        document.getElementById("backgroundText").innerHTML = "This is a Red background";
    } else if (e.key == '3') {
        mybody.classList.add("btnOrange");
        mybody.classList.remove("btnRed");
        mybody.classList.remove("btnHome");
        mybody.classList.remove("btnPurple");
        mybody.classList.remove("btnGreen");
        document.getElementById("backgroundText").innerHTML = "This is an Orange background";
    } else if (e.key == '4') {
        mybody.classList.add("btnPurple");
        mybody.classList.remove("btnRed");
        mybody.classList.remove("btnHome");
        mybody.classList.remove("btnOrange");
        mybody.classList.remove("btnGreen");
        document.getElementById("backgroundText").innerHTML = "This is a Purple background";
    } else if (e.key == '5') {
        mybody.classList.add("btnGreen");
        mybody.classList.remove("btnRed");
        mybody.classList.remove("btnHome");
        mybody.classList.remove("btnPurple");
        mybody.classList.remove("btnOrange");
        document.getElementById("backgroundText").innerHTML = "This is a Green background";
    } else alert("This key does not work, please choose key 1 -5");
})
