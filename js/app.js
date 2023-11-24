const shopContenido = document.getElementById("shopContenido")

const productos = [
    {
    id: 1,
    nombre: "Cinta",
    precio: 2000,
    img: "https://www.nakaoutdoors.com.ar/img/articulos/cinta_plana_por_metro_edelweiss_18mm_imagen1.jpg" 
},
    {
    id: 1,
    nombre: "Mosqueton",
    precio: 20000,
    img: "https://www.nakaoutdoors.com.ar/img/articulos/2022/08/singing_rock_colt_negro_imagen1.jpg" 
},
    {
    id: 3,
    nombre: "Cordin",
    precio: 2000,
    img: "https://www.nakaoutdoors.com.ar/img/articulos/2022/11/kong_cordin_5mm_imagen1.jpg" 
},
    {
    id: 4,
    nombre: "Arnes",
    precio: 12000,
    img: "https://www.nakaoutdoors.com.ar/img/articulos/edelrid_arnes_jay_iii_imagen1.jpg" 
},
{
    id: 6,
    nombre: "Casco",
    precio: 13000,
    img: "https://www.nakaoutdoors.com.ar/img/articulos/2023/05/edelrid_zodiac_imagen1.jpg" 
},
    {
    id: 6,
    nombre: "Pedula",
    precio: 15000,
    img: "https://www.nakaoutdoors.com.ar/img/articulos/2021/10/la_sportiva_cobra_4_99_7_imagen1.jpg" 
},
];

let carrito = [];

productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className ="card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="precio">${product.precio} $</p>
    `;

    shopContenido.append(content);

    let comprar = document.createElement ("boton")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id : product.id,
            img : product.img,
            nombre : product.nombre,
            precio : product.precio,
        });
        console.log(carrito);
    })
})