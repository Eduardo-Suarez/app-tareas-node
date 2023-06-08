const { mostrarMenu } = require('./helpers/mensajes');

require('colors');


//limpia todo lo de la consola
console.clear();


const main = async() => {
    console.log("hola mundo");

    mostrarMenu();
}

main();