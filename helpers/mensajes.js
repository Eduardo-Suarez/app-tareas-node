require('colors');

const mostrarMenu = () => {

    return new Promise ( resolve => {

        console.clear();

        console.log("==================================".red);
        console.log("      Seleccione una opcion".green);
        console.log("===================================\n".red);

        console.log(`${"1.".green} Crear tarea`);
        console.log(`${"2.".green} Listar tareas`);
        console.log(`${"3.".green} Listar tareas completadas`);
        console.log(`${"4.".green} Listar tareas pendientes`);
        console.log(`${"5.".green} Completar tareas(s)`);
        console.log(`${"6.".green} Borrar tareas`);
        console.log(`${"7.".green} Salir\n`);

        const readline = require("readline").createInterface({
            input:process.stdin,
            output:process.stdout
        });

        readline.question(`Seleccione una Opción:`, (opt) => {
        readline.close();
        resolve(opt);
        });

    });

    

    
}

//funcion para hacer pausa al programa
const pausa = () => {

    return new Promise( resolve => {

        //Esto hara que podamos recibir informacion del usuario
    //readline es un modulo de node que nos permite crear una interface para leer datos de una secuencia de entrada.
        const readline = require("readline").createInterface({
            input:process.stdin,
            output:process.stdout
        });

        readline.question(`\nPresione ${'Enter'.green} para continuar \n`, (opt) => {
            readline.close();
            resolve();
        })
    })

    
}

module.exports={
    mostrarMenu,
    pausa
}