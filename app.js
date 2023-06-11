import colors from "colors";

import { inquirerMenu } from "./helpers/inquirer.js";





//limpia todo lo de la consola
console.clear();


const main = async() => {
    console.log("hola mundo");

    let opt = "";
    //BUcle que nos permite seguir ejecutando el programa siempre y cuando no se precione "0"
    do {

        opt = await inquirerMenu()
        console.log({opt});
        

    }while(opt !== '0');

    

    //pausa();
}

main();