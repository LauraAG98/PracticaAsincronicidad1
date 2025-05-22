





for(let i =1; i<= cant ;i++){
    const contenido=`Hola ${nombre}, este es el archivo número ${i}`;
    const nomArch=`archivo ${i}.txt`;

    await arch.writeFile(nomArch, contenido);
    console.log(`Archivo creado: ${nomArch}`);
}