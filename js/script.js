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