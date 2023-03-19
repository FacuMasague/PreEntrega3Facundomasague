const productos = [
    {producto: "Manzana", precio: 570},
    {producto: "Banana", precio: 420},
    {producto: "Piña", precio: 830},
    {producto: "Pepino", precio: 600}
];

let precio = 0

let carrito = []
let carrito_json = JSON.stringify(carrito)

let cart = document.getElementById("carrito")

let total = document.getElementById("total")
total.innerText = "El precio total es de: $" + precio

let buttons = document.querySelectorAll("button")

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let id = button.parentNode.parentNode.id
        let suma = productos.find(function(item) {
            return item.producto === id
        })
        precio += suma.precio

        total.innerText = "El precio total es de: $" + precio

        carrito.push(id)
        sessionStorage.setItem("Carrito", carrito)

        let li = document.createElement("li")
        li.innerText = id
        cart.appendChild(li)
    })
})