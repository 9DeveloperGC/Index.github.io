const productos = {


    migajon: [
        {
            nombre: "Telera",
            precio: 2.50,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Concha",
            precio: 9.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Panadero",
            precio: 9.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Gusanito",
            precio: 9.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Bolita de queso",
            precio: 8.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Rebanada",
            precio: 9.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Español",
            precio: 7.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Rol de canela",
            precio: 10.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Cuernito",
            precio: 9.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Empanada",
            precio: 9.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Barquillo",
            precio: 10.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        }
    ],

    feite: [
        {
            nombre: "Oreja",
            precio: 9.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Trenza",
            precio: 9.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Taco",
            precio: 9.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Rehilete",
            precio: 9.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Mil hojas",
            precio: 10.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        }
    ],

    reposteria: [
        {
            nombre: "Muffin",
            precio: 10.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Polvorón",
            precio: 9.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Bisquet",
            precio: 9.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Beso",
            precio: 10.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Galleta",
            precio: 9.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Multi",
            precio: 11.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Dona - Azucar/Chocolate",
            precio: 9.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Dona - Diseño",
            precio: 15.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Piedra",
            precio: 9.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Pastelitos",
            precio: 10.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Pay de queso",
            precio: 10.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Ojo",
            precio: 10.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Pan de elote - Rebanada",
            precio: 10.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Volteado de piña",
            precio: 15.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Pachucos",
            precio: 9.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        }
    ],

    temporada: [
        {
            nombre: "Pan chino",
            precio: 8.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Pan de muerto",
            precio: 10.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Pan de muerto - Concha",
            precio: 12.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Rosca de reyes - pequeña",
            precio: 80.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Rosca de reyes - mediana",
            precio: 150.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        }, {
            nombre: "Rosca de reyes - grande",
            precio: 350.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        },
        {
            nombre: "Rosca de reyes - Feíte",
            precio: 500.00,
            imagen: "Resources/Index_resources/Mantenimiento.png"
        }
    ],


};

function cargarProductos(categoria) {


    const contenedor = document.getElementById("productos");

    contenedor.innerHTML = "";

    productos[categoria].forEach(function (producto) {

        contenedor.innerHTML += `

        <div class="col-12 col-sm-6 col-md-4 col-lg-3 producto">

            <div class="card">

                <img src="${producto.imagen}" class="card-img-top">

                <div class="card-body">

                    <h5 class="card-title">
                        ${producto.nombre}
                    </h5>

                    <p class="card-text">
                        $${producto.precio.toFixed(2)}
                    </p>

                </div>

            </div>

        </div>

    `;

    });


}

function cambiarCategoria(categoria, boton) {


    const contenedor = document.getElementById("productos");

    contenedor.classList.add("salir");

    document.querySelectorAll(".categoria-btn").forEach(function (btn) {
        btn.classList.remove("activo");
    });

    boton.classList.add("activo");

    setTimeout(function () {

        cargarProductos(categoria);

        contenedor.classList.remove("salir");

        contenedor.classList.add("entrar");

        setTimeout(function () {
            contenedor.classList.remove("entrar");
        }, 50);

    }, 400);


}

cargarProductos("migajon");
