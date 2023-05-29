let botonEncriptar =document.querySelector(".btn-encriptar");
let botonDesencriptar =document.querySelector(".btn-desencriptar");
let munieco =document.querySelector(".contenedormunieco");
let contenedor =document.querySelector(".contenedorparrafo");
let resultado =document.querySelector(".textoresultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    let cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto (cajatexto);
}

function desencriptar() {
    ocultarAdelante();
    let cajatexto= recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
    let cajatexto = document.querySelector(".cajatexto")
    return cajatexto.value
}

function ocultarAdelante() {
    munieco.classList.add("ocultar")
    contenedor.classList.add("ocultar")
}

function encriptarTexto(mensaje) {
    let texto = mensaje;
    let textofinal = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textofinal = textofinal + "ai"
        }
        else if (texto [i] == "e"){
            textofinal = textofinal + "enter"
        }
        else if (texto [i] == "i"){
            textofinal = textofinal + "imes"
        } 
        else if (texto [i] == "o"){
            textofinal = textofinal + "ober"
        } 
        else if (texto [i] == "u"){
            textofinal = textofinal + "ufat"
        }  
        else{
            textofinal = textofinal + texto [i]
        }
    }
    return textofinal;
}

function desencriptarTexto(mensaje) {
    let texto = mensaje;
    let textofinal = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textofinal = textofinal + "a"
            i = i+1
        }
        else if (texto [i] == "e"){
            textofinal = textofinal + "e"
            i = i+4
        }
        else if (texto [i] == "i"){
            textofinal = textofinal + "i"
            i = i+3
        } 
        else if (texto [i] == "o"){
            textofinal = textofinal + "o"
            i = i+3
        } 
        else if (texto [i] == "u"){
            textofinal = textofinal + "u"
            i = i+3
        }  
        else{
            textofinal = textofinal + texto [i]
        }
    }
    return textofinal;
}

const btncopiar = document.querySelector(".btncopiar");
    btncopiar.addEventListener("click", copiar = () =>{
        let contenido = document.querySelector(".textoresultado").textContent;
        navigator.clipboard.writeText(contenido);
        console.log("hola")
    })