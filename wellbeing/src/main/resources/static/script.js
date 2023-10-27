let nextUserId = 1; // Variable para mantener el próximo ID de usuario

async function agregarUsuario() {
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        alert("Por favor, ingresa un name de usuario.");
        return;
    }

    // Crear el objeto de usuario con el ID y el name
    const usuario = {
        id: nextUserId,
        name: name
    };

    try {
        const response = await fetch("http://localhost:8080/usuarios/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });

        if (response.ok) {
            alert("Usuario agregado correctamente.");
            document.getElementById("name").value = "";
            nextUserId++; // Incrementar el ID para el próximo usuario
            cargarUsuarios();
        } else {
            alert("Error al agregar usuario. Por favor, verifica la consola del navegador para más detalles.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error al agregar usuario. Por favor, verifica la consola del navegador para más detalles.");
    }
}


async function eliminarUsuariosNulos() {
    const response = await fetch("http://localhost:8080/usuarios/borrar-nulos", {
        method: "DELETE"
    });

    if (response.ok) {
        alert("Usuarios nulos eliminados correctamente.");
        cargarUsuarios();
    } else {
        alert("Error al eliminar usuarios nulos.");
    }
}

async function cargarUsuarios() {
    const response = await fetch("http://localhost:8080/usuarios/");
    const usuarios = await response.json();
    const listaUsuarios = document.getElementById("usuarios-lista");
    listaUsuarios.innerHTML = "";
    usuarios.forEach(usuario => {
        const listItem = document.createElement("li");
        listItem.textContent = usuario.name;
        listaUsuarios.appendChild(listItem);
    });
}

document.addEventListener("DOMContentLoaded", cargarUsuarios);
