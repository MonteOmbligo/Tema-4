//Utilizamos export para poder utilizarlas sin requerir el archivo completo

export function calcularMedia(temperaturas){
    var suma=0;
    for(let temp of temperaturas){
        suma+=temp
    }
    return (suma/temperaturas.length).toFixed(2);
}

export function enAumento(temperaturas2020,temperaturas2022){
    var aumento=true;
    if(calcularMedia(temperaturas2020)>=calcularMedia(temperaturas2022)){
        aumento=false;
    }
    return aumento;
}