import inquirer from "inquirer";
import colors from "colors";

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: ['opt1', 'opt2', 'opt3']
    }
]

const inquirerMenu = async() => {

    //console.clear();
    console.log("==================================".red);
    console.log("      Seleccione una opcion".green);
    console.log("===================================\n".red);

    const opt = await inquirer.prompt(preguntas);

    return opt;


}

export {inquirerMenu};