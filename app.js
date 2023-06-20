import colors from "colors";

import { inquirerMenu, pausa, leerInput } from "./helpers/inquirer.js";
import {Tareas} from "./models/tareas.js";
import { guardarDB, leerDB } from "./helpers/guardarArchivo.js";





//limpia todo lo de la consola
console.clear();


const main = async() => {
    

    let opt = "";
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB){
        //establecer tareas
        tareas.cargarTareasFromArray(tareasDB);
    }

    
    //Bucle que nos permite seguir ejecutando el programa siempre y cuando no se precione "0"
    do {

        opt = await inquirerMenu()
        console.log({opt});

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea(desc);
                break;

            case '2':
                tareas.listadoCompleto();
                break;
        }


        guardarDB(tareas.listadoArr);


        await pausa();
        

    }while(opt !== '0');

}

main();