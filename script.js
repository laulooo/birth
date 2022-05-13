const buttNext = document.querySelector(".nextContent");
const content2 = document.querySelector(".content2");
const paper = document.querySelector(".paper");
// TYPE WRITE PROPERTY
const textArea = document.querySelector(".pesan");
const message = `~ untuk: BAKSO

Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto neque quod modi ipsum quos ab, incidunt facere dolor dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto neque quod modi ipsum quos ab, incidunt facere dolor

                    ~ Dari: David`;
let i = 0;
// ================

buttNext.addEventListener("click", () => {
    content2.style.display = "block";
    content2.classList.add("typewrite");
    setTimeout(typeWrite, 1500);
});
document.addEventListener("click", (e) => {
    if (e.target == content2) {
        content2.style.display = "none";
    }
    console.log(e.target);
});

function typeWrite() {
    if (i < message.length) {
        textArea.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWrite, 50);
    }
}
