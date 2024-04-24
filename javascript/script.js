const imagens = [
    "../assets/Silksong-Screenshots-_0014_6.png",
    "../assets/Silksong-Screenshots-_0015_5.png",
    "../assets/Silksong-Screenshots-_0009_11.png",
    "../assets/Silksong-Screenshots-_0006_14.png",
    "../assets/Silksong-Screenshots-_0004_16.png",
];
let index = 0;

const imagem = document.getElementById("imagem");
const headerMobile = document.getElementById("header-nav-mobile");
const menuMobile = document.getElementById("mobile");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

imagem.addEventListener("click", mudarImagem);

imagem.addEventListener("mouseover", function () {
    this.style.cursor = "pointer";
    this.style.boxShadow = "0px 0px 10px rgba(255, 255, 255, 1.0)";
});

imagem.addEventListener("mouseout", function () {
    this.style.boxShadow = "none";
});

function mudarImagem() {
    index = (index + 1) % imagens.length;
    imagem.src = imagens[index];
}

menuIcon.addEventListener("click", function () {
    headerMobile.classList.toggle("show");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("show");
});

closeIcon.addEventListener("click", function () {
    headerMobile.classList.toggle("show");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("show");
});
