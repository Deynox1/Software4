async function cargarMeditaciones() {
    try {
        const response = await fetch("http://localhost:8080/meditacion-mindfulness/meditaciones");
        const meditations = await response.json();

        const listaMeditaciones = document.getElementById("listaMeditaciones");
        listaMeditaciones.innerHTML = "";

        meditations.forEach(meditation => {
            const listItem = document.createElement("li");
            listItem.textContent = `Título: ${meditation.titulo}, Descripción: ${meditation.descripcion}`;
            listaMeditaciones.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error:", error);
        alert("Error al cargar las meditaciones. Por favor, verifica la consola del navegador para más detalles.");
    }
}

async function cargarTemporizadores() {
    try {
        const response = await fetch("http://localhost:8080/meditacion-mindfulness/temporizadores");
        const meditationTimers = await response.json();

        const listaTemporizadores = document.getElementById("listaTemporizadores");
        listaTemporizadores.innerHTML = "";

        meditationTimers.forEach(timer => {
            const listItem = document.createElement("li");
            listItem.textContent = `Duración: ${timer.duracionMinutos} minutos`;
            listaTemporizadores.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error:", error);
        alert("Error al cargar los temporizadores. Por favor, verifica la consola del navegador para más detalles.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    cargarMeditaciones();
    cargarTemporizadores();
});
