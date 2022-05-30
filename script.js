const buttNext = document.querySelector(".nextContent");
const content2 = document.querySelector(".content2");
const paper = document.querySelector(".paper");
// TYPE WRITE PROPERTY
const textArea = document.querySelector(".pesan");
const message = `~ untuk: Nury Rachma Dhiani ☺️

Halo... Selamat ulang tahun ndan !!!. Sehat sehat terus ya.., semoga di tahun ini semua keinginan mu tercapai ammin...., Oiya makasih ya udah sering ngajak obrol aku akhir² ini 🤓 

                                    ~ Dari: galak 😎`;
let i = 0;
// ================

buttNext.addEventListener("click", () => {
    content2.style.display = "block";
    setTimeout(typeWrite, 1500);
});
document.addEventListener("click", (e) => {
    if (e.target == content2) {
        content2.style.display = "none";
    }
});

function typeWrite() {
    if (i < message.length) {
        textArea.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWrite, 50);
    }
}
