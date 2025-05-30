//Se importan las funciones de promesas del sistema de archivos(fs) para trabajar de forma asincrona.
const arch= require('fs').promises;

//Se importa prompt para que el usuario pueda ingresar datos desde la consola.
const prompt=require('prompt-sync')();

//Se  agrega funcion asincrona
async function procesoArchivos(){

//Se le pide al usuario nombre y cantidad de archivos
    let nombre=prompt("Ingrese su nombre por favor");
    let cant=parseInt(prompt("Ingrese la cantidad de archivos que desea generar"));

//Ciclo que crea la cantidad de archivos ingresada por el usuario 
    for(let i =1; i<= cant ;i++){

//Se define el contenido de cada archivo, se muestra nombre del usuario y numero de archivo
    const contenido=`Hola ${nombre}, este es el archivo número ${i}`;

//Se define una constante para guardar archivo por archivo 
    const nomArch=`archivo ${i}.txt`;

//Se usa await para esperar que se vaya creando cada archivo con WriteFile antes de continuar.   
    await arch.writeFile(nomArch, contenido);

//Se imprime en consola el nombre del archivo creado 
    console.log(`Archivo creado: ${nomArch}`);
    }

//Se imprime la cantidad de archivos generados
    console.log(`Este es el número total de archivos generados: ${cant}`);
}

//Se llama la función para que ejecute todo el código
procesoArchivos();