console.log("Entramos a la pagina!")

function bienvenido(){
    alert("Bienvenido a la Pagina de Perfil")
}

function eliminar(elemento){
    // console.log(elemento)
    alert("Sign Out")
    elemento.remove();

    // elemento.style.visibility = "hidden";
}

function cambiar_texto(elemento){
    if (elemento.innerText == "Perfil") {
        elemento.innerText = "Profile";
    }else {
        elemento.innerText = "Perfil";
    }
    
}

function cambia_imagen(elemento_img) {
    elemento_img.src = "https://preview.redd.it/74pnwj12svl71.jpg?auto=webp&s=de2a70c66b194bf014b80ba513604c470b99afca"
}

function regrese_imagen(elemento_img) {
    elemento_img.src = "img/killua.jpg"
}

function editar_perfil() {
    let elemento_nombre = document.querySelector(".nombre");
    let elemento_city = document.querySelector(".city");
    let elemento_info = document.querySelector(".info");
    let elemento_bio = document.querySelector(".bio");

    elemento_nombre.innerText = "Killua Zoldyck"
    elemento_city.innerText = "Montaña Kukuroo"
    elemento_info.innerHTML = "Asesino Zoldyck <br> Cazador"
    elemento_bio.innerText = "En un principio Killua se presenta como un personaje que parece similar a Gon, alegre, atrevido, y lleno de ideas maliciosas, aunque en el fondo resultan ser totalmente opuestos, siendo lo contradictorio a lo que cada uno aparenta"

    // color: white;
    // elemento_nombre.style.color = "white";
    // background-color: babyblue;
    // elemento_nombre.style.backgroundColor = "blue";

}

function busqueda() {
    let input = document.querySelector("#buscador");
    let valor = input.value;

    alert("Estas buscando: "+valor)
}

function cambiar_modo() {
    let target = document.querySelector(".solicitudes");

    if(target.classList.contains("dark-mode")) {
        target.classList.remove("dark-mode");
    } else {
        target.classList.add("dark-mode");
    }

}

function aceptar(n) {
    var soliN = document.querySelector("#solicitudes-n");
    var contactN = document.querySelector("#contactos-n");
    var eliminar1 = document.querySelector("#soli-1");
    var eliminar2 = document.querySelector("#soli-2");

    if (n == 1) {
        eliminar1.remove()
    } else {
        eliminar2.remove()
    }
    // disminulle el numero de las solicitudes
    var valor = parseInt(soliN.innerText);
    valor --;

    soliN.innerText = valor
    // aumenta el numero de los contactos
    var valor = parseInt(contactN.innerText); 
    valor ++;

    contactN.innerText = valor

    
}

function rechazar(n) {
    var soliN = document.querySelector("#solicitudes-n");
    var eliminar1 = document.querySelector("#soli-1");
    var eliminar2 = document.querySelector("#soli-2");

    if (n == 1) {
        eliminar1.remove()
    } else {
        eliminar2.remove()
    }
    // disminulle el numero de las solicitudes
    var valor = parseInt(soliN.innerText);
    valor --;

    soliN.innerText = valor

    eliminar.remove()
}