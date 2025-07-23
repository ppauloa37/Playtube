var pincricoes = document.getElementById("incricoesyn")
var sidebar = document.getElementsByClassName("sidebar")
var sidearray = [1,2,3,4,5,6,7,8,9]
var conclusao;

var executar = function() {
    var inscricoesget = localStorage.getItem("inscritos928")
    if (inscricoesget.includes("Playtube")) {
        pincricoes.style.display = "none";
    }
}
var sidebarss = function() {
    for (var i = 0; i < sidearray.length; i++) {
        conclusao = i;
    }
}
sidebarss();
sidebar[0].addEventListener("click", () => {
    window.location.href = "/"
})
sidebar[1].addEventListener("click", () => {
    window.location.href = "/settings/"
})
sidebar[2].addEventListener("click", () => {
    window.location.href = "/slots/"
})
sidebar[3].addEventListener("click", () => {
    window.location.href = "/musics/"
})
sidebar[4].addEventListener("click", () => {
    window.location.href = "/account/"
})
sidebar[5].addEventListener("click", () => {
    window.location.href = "/channel/"
})
sidebar[6].addEventListener("click", () => {
    window.location.href = "/historic/"
})
sidebar[7].addEventListener("click", () => {
    window.location.href = "/account/playlists/"
})
sidebar[8].addEventListener("click", () => {
    window.location.href = "/account/playlists/likei"
})
