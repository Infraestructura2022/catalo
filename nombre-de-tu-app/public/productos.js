const productos = [
    { img: "0.png", titulo: "PORTA TIJERAS", alto: "25 CM ALTO", largo: "18 CM LARGO", precio: "null", descri: "10 Orificios para colocar tijeras con diversos colores" },
    { img: "1.png", titulo: "ORGANIZADOR DE BOTONES", alto: "42 CM ALTO", largo: "51 CM LARGO", precio: "null ", descri: "Caja plegable, 10 espacios de 4cm x 3.5cm, 3 espacios de 7cm x 7.5, cm 1 espacio de 8.6cm x 19cm" },
    { img: "3.png", titulo: "BASES GIRATORIAS", alto: "25 CM ALTO", largo: "18 CM LARGO", precio: "null", descri: "Bases gratorias de 35cm, 30 cm y 25 cm" },
    { img: "4.png", titulo: "EXHIBIDOR DE PASTELES", alto: "62 CM ALTO", largo: "93 CM LARGO", precio: "null", descri: "3 niveles, bases de 20 cm, 25 cm y 30 cm" },
    { img: "5.png", titulo: "ORGANIZADOR DE UTENSILIOS DE COCINA", alto: "49 CM ALTO", largo: "45 CM LARGO", precio: "null", descri: "8 espacios para diferentes utensilios" },
];

const productos2 = [
    { img: "41.png", titulo: "LETRERO CREACIONES TURIX", alto: "50 CM ALTO", largo: "50 CM LARGO", precio: "null", descri: "Base de madera de: 16mm, letras de madera de: 12mm" },
    { img: "42.png", titulo: "LETRERO C. KIMBERLY", alto: "88 CM ALTO", largo: "88 CM LARGO", precio: "null ", descri: "Acrilico negro de 6mm, iluminacion luces led blancas" },
    { img: "43.png", titulo: "BASE PARA PASTEL", alto: "90 CM ALTO", largo: "38 CM LARGO", precio: "null", descri: "Madera de 6mm, Bases de: 10cm, 15cm, 25cm y 35cm" },
    { img: "44.png", titulo: "ESPEJO KANDRASH", alto: "110 CM ALTO", largo: "45 CM LARGO", precio: "null", descri: "Espejo de 3mm, iluminacion led " },
    { img: "45.png", titulo: "LETRERO GILS PASTELERÍA", alto: "50 CM ALTO", largo: "50 CM LARGO", precio: "null", descri: "Acrilico negro de 6mm" },
];


const contenedor = document.getElementById("productos-container");
const contenedor2 = document.getElementById("productos-container2");

productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("contenedor_imagen");

    div.innerHTML = `
        <a href="descripcion.html?img=${producto.img}&titulo=${encodeURIComponent(producto.titulo)}&alto=${producto.alto}&largo=${producto.largo}&precio=${producto.precio}&descri=${producto.descri}">
            <img src="imagenes/${producto.img}" alt="${producto.titulo}" height="250" width="250">
        </a>
        <h4>${producto.titulo}</h4>
        <h4>${producto.alto} ALTO</h4>
        <h4>${producto.largo} LARGO</h4>
    `;

    contenedor.appendChild(div);
});


productos2.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("contenedor_imagen");

    div.innerHTML = `
        <a href="descripcion.html?img=${producto.img}&titulo=${encodeURIComponent(producto.titulo)}&alto=${producto.alto}&largo=${producto.largo}&precio=${producto.precio}&descri=${producto.descri}">
            <img src="imagenes/${producto.img}" alt="${producto.titulo}" height="250" width="250">
        </a>
        <h4>${producto.titulo}</h4>
        <h4>${producto.alto} ALTO</h4>
        <h4>${producto.largo} LARGO</h4>
    `;

    contenedor2.appendChild(div);
});