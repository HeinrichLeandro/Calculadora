const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

pantalla.textContent = "0";

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (boton.id === "porc") {
            try {
                pantalla.textContent = eval(pantalla.textContent)/"100";
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (boton.id === "invertir") {
            try {
                pantalla.textContent = "1"/eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (boton.id === "coma"){
            pantalla.textContent += botonApretado;
            return;
        }

        if (boton.id === "cambia") {
            if (pantalla.textContent === 0 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = "-1"*pantalla.textContent;
            }
            return;
        }

        if (boton.id === "cuadratica") {
            pantalla.textContent = pantalla.textContent*pantalla.textContent;
            return;
        }

        if (boton.id === "raiz") {
            pantalla.textContent = Math. sqrt(pantalla.textContent);
            return;
        }
        
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })
})