//pregunto la fecha y hora
var laHora = new Date().getHours();
document.querySelector("#hora").innerHTML = laHora;
var elSaludo;
if (5 < laHora && laHora < 12) {
    elSaludo = "Buongiorno";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "Buon pomeriggio";
} else {
    elSaludo = "Bona serata";
}
// pregunto la ubicación
var dondeEstas;
if (document.body.classList.contains("copertina")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}
//voy a buscar unos datos
var starWars;
function preload() {
    var api = "https://swapi.dev/api/people/?page=3&format=json";
    starWars = loadJSON(api);
}
//tomo el main
var loPrincipal = document.querySelector("main");

var x;

function setup() {
    noCanvas();
    createElement("h1", elSaludo).parent(loPrincipal).id("contenido");
    createA("index.html", "index").parent("vinculos");
    createA("page.html", "page").parent("vinculos");
    if (dondeEstas) {
        x = Math.round(random(0,1)*10);
        portada();
    } else {
        pagina();
    }
}

function portada() {
    createSpan(" ¿Sabía usted que " + starWars.results[x].name + " nacio el año " + starWars.results[x].birth_year + "?").parent("contenido");
    select("a:nth-child(1)").style("color", "#FFFFFF");
}
function pagina() {
    createSpan(" ¿Sabía usted que " + starWars.results[8].name + " tiene ojos de color " + starWars.results[8].eye_color + "?").parent("contenido");
    select("a:nth-child(2)").style("color", "#FFFFFF");
}