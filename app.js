// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosLista = ["Jayro", "Sebastian", "Adrian", "Gustavo", "Tuco"];

function agregarAmigo () {

    const nombre = document.getElementById('amigo').value;
    console.log(nombre)

    if (nombre.trim() !== "") {
        amigosLista.push(nombre);
        console.log(amigosLista);

        document.getElementById('amigo').value = ""
    } else {
        alert("Por favor, inserte un nombre");
    }

}

