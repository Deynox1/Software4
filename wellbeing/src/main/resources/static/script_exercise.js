async function establecerMetas() {
    const metasDiarias = document.getElementById("metasDiarias").value;
    const metasSemanales = document.getElementById("metasSemanales").value;

    if (metasDiarias.trim() === "" || metasSemanales.trim() === "") {
        alert("Por favor, ingresa todas las metas.");
        return;
    }

    const exerciseGoal = {
        metasDiarias: parseInt(metasDiarias),
        metasSemanales: parseInt(metasSemanales),
        progresoDiario: 0,
        progresoSemanal: 0
    };

    try {
        const response = await fetch("http://localhost:8080/metas-ejercicio/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(exerciseGoal)
        });

        if (response.ok) {
            alert("Metas de ejercicio establecidas correctamente.");
            cargarProgreso();
        } else {
            alert("Error al establecer metas de ejercicio. Por favor, verifica la consola del navegador para más detalles.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error al establecer metas de ejercicio. Por favor, verifica la consola del navegador para más detalles.");
    }
}

async function cargarProgreso() {
    try {
        const response = await fetch("http://localhost:8080/metas-ejercicio/");
        const exerciseGoals = await response.json();

        if (exerciseGoals.length > 0) {
            const progresoDiario = exerciseGoals[0].progresoDiario;
            const progresoSemanal = exerciseGoals[0].progresoSemanal;

            document.getElementById("progresoDiario").textContent = progresoDiario.toString();
            document.getElementById("progresoSemanal").textContent = progresoSemanal.toString();
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error al cargar el progreso. Por favor, verifica la consola del navegador para más detalles.");
    }
}

document.addEventListener("DOMContentLoaded", cargarProgreso);
