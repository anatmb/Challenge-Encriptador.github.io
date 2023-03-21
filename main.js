var metodos=0;

function validarfrase(texto)
{
    var texto=texto;
    var letrasvalidas="abcdefghijklmnopqrstuvwqxz ";
    /*alert(texto);*/
    let cont=0;
    for(let letra of texto)
    {if(letrasvalidas.includes(letra )){ cont += 1;}}
    if(cont===texto.length)
    {return true;}
    else{return false; }      
}

function encriptar() {
    var texto = document.getElementById("inputTexto").value;
    if (validarfrase(texto))
    {
        var txtcifrado = texto.replace(/e/igm, "enter");
        var txtcifrado = txtcifrado.replace(/i/igm, "imes");
        var txtcifrado = txtcifrado.replace(/a/igm, "ai");
        var txtcifrado = txtcifrado.replace(/o/igm, "ober");
        var txtcifrado = txtcifrado.replace(/u/igm, "ufat");
        document.getElementById("imgder").style.display = "none";
        document.getElementById("texto").style.display = "none";
        document.getElementById("textotitulo").style.display = "show";
        document.getElementById("textotitulo").style.display = "inherit";
        document.getElementById("texto2").innerHTML = txtcifrado;
        document.getElementById("btn-copia").style.display = "show";
        document.getElementById("btn-copia").style.display = "inherit";
        metodos+=1;
    }
    else{alert("ingrese solo minisculas y sin acentos");}   
}

function desencriptar(){

    if(metodos>0)
  
      {  var texto=document.getElementById("inputTexto").value;
        var txtcifrado=texto.replace(/enter/igm, "e");
        var txtcifrado=txtcifrado.replace(/imes/igm, "i");
        var txtcifrado=txtcifrado.replace(/ai/igm, "a");
        var txtcifrado=txtcifrado.replace(/ober/igm, "o");
        var txtcifrado=txtcifrado.replace(/ufat/igm, "u");
        document.getElementById("imgder").style.display = "none";
        document.getElementById("texto").style.display = "none";
        document.getElementById("texto2").innerHTML = txtcifrado;
        document.getElementById("btn-copia").style.display = "show";
        document.getElementById("btn-copia").style.display = "inherit";
        metodos=0;

     } else{alert("Debe encriptar antes de desencriptar");}
}

function copy(){ 
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    /*alert("¡Se copio!");*/
}