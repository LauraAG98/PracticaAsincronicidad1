const arch= require('fs').promises;

async function procesoArchivos(){
    const nombre=prompt("Ingrese su nombre por favor");
    const cant=parseInt("Ingrese la cantidad de archivos que desea generar");

    for(let i =1; i<= cant ;i++){
    const contenido=`Hola ${nombre}, este es el archivo número ${i}`;
    const nomArch=`archivo ${i}.txt`;

    await arch.writeFile(nomArch, contenido);
    console.log(`Archivo creado: ${nomArch}`);
    }

    console.log(`Este es el número total de archivos generados: ${cant}`);
}

procesoArchivos();