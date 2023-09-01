// change active section on click
const screens = document.querySelectorAll(".js-screen");
const prevScreenBtn = document.querySelector(".js-prev-screen");
const nextScreenBtn = document.querySelector(".js-next-screen");
let screenIndex = 0;

const handleChangeActiveScreen = () => {
    for (let i = 0; i < screens.length; i++) {
        screens[i].classList.remove("is-active");

        if (i === screenIndex) {
            screens[i].classList.add("is-active");
        }

        if (screenIndex === screens.length - 1) {
            nextScreenBtn.classList.remove("active");
        } else {
            nextScreenBtn.classList.add("active");
        }

        if (screenIndex === 0) {
            prevScreenBtn.classList.remove("active");
        } else {
            prevScreenBtn.classList.add("active");
        }
    }
};

nextScreenBtn.addEventListener("click", () => {
    if (screenIndex === screens.length - 1) {
        return;
    } else {
        screenIndex++;
        handleChangeActiveScreen();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 39 || event.key === "ArrowRight") {
        if (screenIndex === screens.length - 1) {
            return;
        } else {
            screenIndex++;
            handleChangeActiveScreen();
        }
    }
});

prevScreenBtn.addEventListener("click", () => {
    if (screenIndex === 0) {
        return;
    } else {
        screenIndex--;
        handleChangeActiveScreen();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 37 || event.key === "ArrowLeft") {
        if (screenIndex === 0) {
            return;
        } else {
            screenIndex--;
            handleChangeActiveScreen();
        }
    }
});

// copy text
const copyButton = document.querySelector(".js-button-copy");
const textToCopy = document.querySelector(".js-text-copy");

copyButton.addEventListener("click", function () {
    const text = textToCopy.innerText;

    let tempTextArea = document.createElement("textarea");
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();

    try {
        var successful = document.execCommand("copy");
        var message = successful
            ? "Текст скопирован в буфер обмена"
            : "Не удалось скопировать текст";
    } catch (err) {
        console.error("Ошибка при копировании текста: ", err);
    }
    document.body.removeChild(tempTextArea);
});
