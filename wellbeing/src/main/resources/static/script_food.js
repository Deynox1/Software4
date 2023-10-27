async function registrarComida() {
    const comida = document.getElementById("comida").value;
    const hora = document.getElementById("hora").value;

    if (comida.trim() === "" || hora.trim() === "") {
        alert("Por favor, ingresa todos los detalles de la comida.");
        return;
    }

    const foodEntry = {
        comida: comida,
        hora: hora
    };

    try {
        const response = await fetch("http://localhost:8080/registro-alimentacion/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(foodEntry)
        });

        if (response.ok) {
            alert("Comida registrada correctamente.");
            cargarRegistroComidas();
        } else {
            alert("Error al registrar comida. Por favor, verifica la consola del navegador para más detalles.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error al registrar comida. Por favor, verifica la consola del navegador para más detalles.");
    }
}

async function cargarRegistroComidas() {
    try {
        const response = await fetch("http://localhost:8080/registro-alimentacion/");
        const foodEntries = await response.json();

        const registroComidas = document.getElementById("registroComidas");
        registroComidas.innerHTML = "";

        foodEntries.forEach(entry => {
            const listItem = document.createElement("li");
            listItem.textContent = `Comida: ${entry.comida}, Hora: ${entry.hora}`;
            registroComidas.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error:", error);
        alert("Error al cargar el registro de comidas. Por favor, verifica la consola del navegador para más detalles.");
    }
}

document.addEventListener("DOMContentLoaded", cargarRegistroComidas);
