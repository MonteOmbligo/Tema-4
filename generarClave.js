//Generamos numeros al azar equivalentes a letras en unicode
// A-Z (65-90) a-z(97-122)
function generarClave(tamaño=5){

    var clave = "";
    for(let i=0;i<tamaño;i++){
        //Letra mayuscula en los pares
        if(i%2==0){
            clave+=String.fromCharCode(Math.trunc(Math.random()*25+65));
        }else{
        //Letra minuscula
            clave+=String.fromCharCode(Math.trunc(Math.random()*25+97));
        }
    }
    return clave;

}