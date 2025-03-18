// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

//Función para agregar amigo
function agregarAmigo() {
    let nombreAmigoSecreto = document.getElementById('amigo').value.trim();
    let li = document.createElement('li');

    if (nombreAmigoSecreto === "") {
        alert("Espacio vacío, por favor digita un nombre");
    }
    else if(!nombreValido(nombreAmigoSecreto)){
        alert('Caracteres inválidos, escribe un nombre válido')
    }
        else{
        listaAmigos.push(nombreAmigoSecreto);
        li.textContent = nombreAmigoSecreto;
        document.getElementById('listaAmigos').appendChild(li);
        document.getElementById('amigo').value = '';
        }
    }
//Función para validar que solo se incluyan letras en el nombre
function nombreValido(nombre){
    return /^[a-zA-Z]+$/.test(nombre)
}
//Función para sortear los nombres
function sortearAmigo(){
    let numeroAleatorio = Math.floor(Math.random()*listaAmigos.length);
    let amigoElegido = listaAmigos[numeroAleatorio];
    document.getElementById('resultado').textContent = `El amigo secreto es: ${amigoElegido}`;

    reiniciarLista();
    
}
//Funcíon para borrar los nombres de la lista una vez se sortee el amigo secreto
function reiniciarLista(){
    listaAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('amigo').value = ''

}