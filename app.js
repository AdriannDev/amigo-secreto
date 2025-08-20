// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosLista = [];

function agregarAmigo () {
    const nombre = document.getElementById('amigo').value;
    console.log(nombre)

    if (nombre.trim() !== "") {
        if (amigosLista.includes(nombre)) {
            alert("Ese nombre ya esta en la lista, elige otro");
        }else {
        amigosLista.push(nombre);
        actualizarAmigos();
        console.log(amigosLista);
        document.getElementById('amigo').value = "";
        }
    }else {
        alert("Por favor, inserte un nombre");
    }
}

function actualizarAmigos (){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigosLista.forEach((amigo) => {
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigo;
        lista.appendChild(nuevoAmigo);
    })
}

function sortearAmigo (){
    if (amigosLista.length > 0){
        let indice = Math.floor(Math.random() * amigosLista.length);
        const seleccionado = amigosLista[indice];
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
        const nombre = document.createElement("li");
        nombre.textContent = seleccionado;
        resultado.appendChild(nombre);
        console.log(seleccionado);
        console.log(indice);
    }else {
        alert("No se puede sortear, no existe contenido");
    }
}