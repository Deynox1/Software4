async function registrarSalud() {
    const presionArterial = document.getElementById("presionArterial").value;
    const ritmoCardiaco = document.getElementById("ritmoCardiaco").value;

    if (presionArterial.trim() === "" || ritmoCardiaco.trim() === "") {
        alert("Por favor, ingresa todos los detalles de la salud.");
        return;
    }

    const healthRecord = {
        presionArterial: parseInt(presionArterial),
        ritmoCardiaco: parseInt(ritmoCardiaco)
    };

    try {
        const response = await fetch("http://localhost:8080/monitoreo-salud/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(healthRecord)
        });

        if (response.ok) {
            alert("Datos de salud registrados correctamente.");
            cargarDatosSalud();
        } else {
            alert("Error al registrar datos de salud. Por favor, verifica la consola del navegador para más detalles.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error al registrar datos de salud. Por favor, verifica la consola del navegador para más detalles.");
    }
}

async function cargarDatosSalud() {
    try {
        const response = await fetch("http://localhost:8080/monitoreo-salud/");
        const healthRecords = await response.json();

        const tablaSalud = document.getElementById("tablaSalud");
        tablaSalud.innerHTML = "<tr><th>Presión Arterial</th><th>Ritmo Cardíaco</th></tr>";

        healthRecords.forEach(record => {
            const row = `<tr><td>${record.presionArterial}</td><td>${record.ritmoCardiaco}</td></tr>`;
            tablaSalud.innerHTML += row;
        });
    } catch (error) {
        console.error("Error:", error);
        alert("Error al cargar el historial de salud. Por favor, verifica la consola del navegador para más detalles.");
    }
}

document.addEventListener("DOMContentLoaded", cargarDatosSalud);
