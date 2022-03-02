let pwd = document.querySelector(".pwd");
let submitPwd = document.querySelector(".submit-pwd");
let checkButtons = document.querySelector(".check-buttons");
let levers = document.querySelector(".levers");
let submitInputs = document.querySelector(".submit-inputs");

for (let i = 0; i < checkButtons.children.length; i++) {
    checkButtons.children[i].setAttribute("disabled", "");
}
for (let i = 0; i < levers.children.length; i++) {
    levers.children[i].setAttribute("disabled", "");
}
submitInputs.setAttribute("disabled", "");

submitPwd.addEventListener("click", () => {
    if (pwd.value == "TrustNo1") {
        pwd.setAttribute("disabled", "");
        submitPwd.setAttribute("disabled", "");
        for (let j = 0; j < checkButtons.children.length; j++) {
            checkButtons.children[j].removeAttribute("disabled");
        }
        for (let j = 0; j < levers.children.length; j++) {
            levers.children[j].removeAttribute("disabled");
        }
    }
});

function launchRocket() {
    let siap = true;
    for (let j = 0; j < checkButtons.children.length; j++) {
        if (checkButtons.children[j].checked === false) {
            siap = false;
            return 0;
        }
    }
    for (let j = 0; j < levers.children.length; j++) {
        if (levers.children[j].value !== "10") {
            siap = false;
            return 0;
        }
    }

    if (siap === true) submitInputs.removeAttribute("disabled");
};

submitInputs.addEventListener("click", () => {
    let rocket = document.querySelector(".rocket");
    rocket.style.animationName = "rocket-launch";
    rocket.style.animationDuration = "2s";
    for (let j = 0; j < checkButtons.children.length; j++) {
        checkButtons.children[j].checked = false;
        checkButtons.children[j].setAttribute("disabled", "");
    }
    for (let j = 0; j < levers.children.length; j++) {
        levers.children[j].value = 0;
        levers.children[j].setAttribute("disabled", "");
    }
    submitInputs.setAttribute("disabled", "");
    pwd.removeAttribute("disabled");
    submitPwd.removeAttribute("disabled");
});
