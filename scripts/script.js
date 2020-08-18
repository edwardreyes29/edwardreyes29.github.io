/* change background and tab colors based on tab clicked */
var color = "#353A3F";
$("#home-tab").on("click", () => {
    color = "#353A3F";
    textLight() 
    changeColor(color);
    colorInterval();
})

$("#about-tab").on("click", () => {
    color = "#353A3F";
    textLight() 
    changeColor(color);
    stopColorInterval()
})

$("#portfolio-tab").on("click", () => {
    color = "#353A3F";
    textLight() 
    changeColor(color);
    stopColorInterval()
})

$("#contact-tab").on("click", () => {
    color = "#353A3F";
    textLight() 
    changeColor(color);
    stopColorInterval()
})
var colorTime;
function colorInterval() {
    colorTime = setInterval(chooseColor, 7000);
}
colorInterval();

function stopColorInterval() {
    clearInterval(colorTime);
}

var colorCode = 1;
function chooseColor() {
    if (colorCode === 1) {
        color = "#FEC500";
        textDark()
        colorCode++;
    } else if (colorCode === 2) {
        color = "#1178CC";
        textLight() 
        colorCode++;
    } else if (colorCode == 3) {
        color = "#62C654";
        colorCode++;
    } else if (colorCode === 4) {
        color = "#F76434";
        textDark()
        colorCode++;
    } else if (colorCode === 5) {
        color = "#353A3F";
        textLight() 
        colorCode = 1;
        textLight
    }
    changeColor(color);
}

function changeColor(color) {
    $("body").css("background-color", color);
    $("#home-tab").css("background-color", color);
    $("#about-tab").css("background-color", color);
    $("#portfolio-tab").css("background-color", color);
    $("#contact-tab").css("background-color", color);
}

function textDark() {
    $("#home-image").attr("src","https://raw.githubusercontent.com/edwardreyes29/portfolio/13adab48314db86f75284d64b5d1dc1e76a29cd0/assets/images/home-dark.svg");
        $("#git-logo-footer").attr("src","https://raw.githubusercontent.com/edwardreyes29/portfolio/13adab48314db86f75284d64b5d1dc1e76a29cd0/assets/icons/github.svg");
        $("#logo-footer").attr("src","https://raw.githubusercontent.com/edwardreyes29/portfolio/13adab48314db86f75284d64b5d1dc1e76a29cd0/assets/icons/edward-reyes-logo-black.svg")
        $("#copy-footer").removeClass("text-light").addClass("text-dark");
        $("footer").addClass("border-dark");
        $("#home-tab").removeClass("text-light").addClass("text-dark");
        $("#about-tab").removeClass("text-light").addClass("text-dark");
        $("#portfolio-tab").removeClass("text-light").addClass("text-dark");
        $("#contact-tab").removeClass("text-light").addClass("text-dark");
        $(".navbar-toggler").removeClass("navbar-dark").addClass("navbar-light")
}

function textLight() {
    $("#home-image").attr("src","https://raw.githubusercontent.com/edwardreyes29/portfolio/13adab48314db86f75284d64b5d1dc1e76a29cd0/assets/images/home.svg");
    $("#git-logo-footer").attr("src","https://raw.githubusercontent.com/edwardreyes29/portfolio/13adab48314db86f75284d64b5d1dc1e76a29cd0/assets/icons/github-white.svg");
    $("#logo-footer").attr("src","https://raw.githubusercontent.com/edwardreyes29/portfolio/13adab48314db86f75284d64b5d1dc1e76a29cd0/assets/icons/edward-reyes-logo-white.svg")
    $("#copy-footer").removeClass("text-dark").addClass("text-light");
    $("footer").removeClass("border-dark");
    $("#home-tab").removeClass("text-dark").addClass("text-light");
    $("#about-tab").removeClass("text-dark").addClass("text-light");
    $("#portfolio-tab").removeClass("text-dark").addClass("text-light");
    $("#contact-tab").removeClass("text-dark").addClass("text-light");
    $(".navbar-toggler").removeClass("navbar-light").addClass("navbar-dark")
}
