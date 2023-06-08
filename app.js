const { mostrarMenu, pausa } = require('./helpers/mensajes');

require('colors');


//limpia todo lo de la consola
console.clear();


const main = async() => {
    console.log("hola mundo");

    let opt = "";
    //BUcle que nos permite seguir ejecutando el programa siempre y cuando no se precione "0"
    do {

        opt = await mostrarMenu()
        console.log({opt});
        if (opt !== '0') await pausa();

    }while(opt !== '0');

    

    //pausa();
}

main();