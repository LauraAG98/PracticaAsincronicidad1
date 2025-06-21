const arch= require('fs').promises;
const prompt=require('prompt-sync')();

function procesoArchivos(){
    const nombre=prompt("Ingrese su nombre por favor");
    const cant=parseInt(prompt("Ingrese la cantidad de archivos que desea generar"));

    const promesas=[];
    
    for(let i =1; i<= cant ;i++){
    const contenido=`Hola ${nombre}, este es el archivo número ${i}`;
    const nomArch=`archivo ${i}.txt`;

    console.log(`Archivo creado: ${nomArch}`);

    const generador= arch.writeFile(nomArch,contenido);
    promesas.push(generador);
    }

    Promise.all(promesas)
        .then(()=>{
            console.log(`Este es el número total de archivos generados: ${cant}`);
        }).catch((error)=>{
             console.log(`Error al crear los archivos`,error);
        });
}
procesoArchivos();