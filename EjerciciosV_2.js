function sonNumeros(lista) {
    var numeros = aNumeros(lista);
    let esNumero = true;
    for (let i = 0; i < numeros.length && esNumero; i++) {
        if (isNaN(numeros[i])) {
            esNumero = false;
        }
        console.log(numeros[i]);
    }
    return esNumero;
}

function aNumeros(lista) {
    var numeros = lista.split(",");
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = parseInt(numeros[i]);
    }
    return numeros;
}

function ordenadoAscendente(numeros) {
    var ordenado = true;
    var ordenAscendente = [...numeros].sort((a, b) => a - b);
    for (let i = 0; i < numeros.length && ordenado; i++) {
        if (numeros[i] !== ordenAscendente[i]) {
            ordenado = false;
        }
    }
    return ordenado;
}