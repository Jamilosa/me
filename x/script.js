// script.js


filterSelection("all"); // Show all items initially
function filterSelection(category) {
    const items = document.getElementsByClassName("column");
    if (category === "all") category = "";

    // Show or hide portfolio items
    for (let i = 0; i < items.length; i++) {
        w3RemoveClass(items[i], "show");
        if (items[i].className.indexOf(category) > -1) w3AddClass(items[i], "show");
    }
}

function w3AddClass(element, name) {
    const arr1 = element.className.split(" ");
    const arr2 = name.split(" ");
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    let arr1 = element.className.split(" ");
    const arr2 = name.split(" ");
    for (let i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Highlight the active button
const btnContainer = document.getElementById("myBtnContainer");
const btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}



window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('.section');

    if (window.scrollY > window.innerHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    sections.forEach((section, index) => {
        const nextSection = sections[index + 1];
        if (nextSection) {
            const transition = document.createElement('div');
            transition.classList.add('arc-transition');
            section.appendChild(transition);
            transition.style.background = `linear-gradient(to bottom, ${getComputedStyle(section).backgroundColor}, ${getComputedStyle(nextSection).backgroundColor})`;
        }
    });
});
