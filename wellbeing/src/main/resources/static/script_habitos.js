async function agregarHabito() {
    const alimentacion = document.getElementById("alimentacion").value;
    const ejercicio = document.getElementById("ejercicio").value;
    const sueno = document.getElementById("sueno").value;

    if (alimentacion.trim() === "" || ejercicio.trim() === "" || sueno.trim() === "") {
        alert("Por favor, ingresa todos los campos.");
        return;
    }

    const habit = {
        alimentacion: alimentacion,
        ejercicio: ejercicio,
        sueno: sueno
    };

    try {
        const response = await fetch("http://localhost:8080/habitos/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(habit)
        });

        if (response.ok) {
            alert("Hábito agregado correctamente.");
            document.getElementById("alimentacion").value = "";
            document.getElementById("ejercicio").value = "";
            document.getElementById("sueno").value = "";
            cargarHabitos();
        } else {
            alert("Error al agregar hábito. Por favor, verifica la consola del navegador para más detalles.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error al agregar hábito. Por favor, verifica la consola del navegador para más detalles.");
    }
}

async function cargarHabitos() {
    try {
        const response = await fetch("http://localhost:8080/habitos/");
        const habitos = await response.json();
        const listaHabitos = document.getElementById("habitos-lista");
        listaHabitos.innerHTML = "";
        habitos.forEach(habito => {
            const listItem = document.createElement("li");
            listItem.textContent = `Alimentación: ${habito.alimentacion}, Ejercicio: ${habito.ejercicio}, Sueño: ${habito.sueno}`;
            listaHabitos.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error:", error);
        alert("Error al cargar hábitos. Por favor, verifica la consola del navegador para más detalles.");
    }
}

document.addEventListener("DOMContentLoaded", cargarHabitos);
