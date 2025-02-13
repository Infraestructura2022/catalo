const params = new URLSearchParams(window.location.search);
const img = params.get("img");
const titulo = params.get("titulo");
const alto = params.get("alto");
const largo = params.get("largo");
const precio = params.get("precio");
const descri = params.get("descri");


document.getElementById("producto-imagen").src = `imagenes/${img}`;
document.getElementById("producto-titulo").textContent = titulo;
document.getElementById("producto-alto").textContent = `${alto} x ${largo}`;
document.getElementById("producto-precio").textContent = `${precio}`;
document.getElementById("producto-descri").textContent = `${descri}`;
