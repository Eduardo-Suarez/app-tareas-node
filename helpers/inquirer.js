import inquirer from "inquirer";
import colors from "colors";

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: "1",
                name: "1. Crear Nueva Tarea",
            },
            {
                value: "2",
                name: "2. Listar Tareas"
            },
            {
                value: "3",
                name: "3. Listar Tareas Completadas"
            },
            {
                value: "4",
                name: "4. Listar Tareas Pendientes"
            },
            {
                value: "5",
                name: "5. Completar Tarea(s)"
            },
            {
                value: "6",
                name: "6. Eliminar Tarea"
            },
            {
                value: "0",
                name: "0. Salir"
            }
        ]
    }
]

const inquirerMenu = async() => {

    console.clear();
    console.log("==================================".red);
    console.log("      Seleccione una opcion".green);
    console.log("===================================\n".red);

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;


}

const pausa = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ]

    console.log('\n');
    await inquirer.prompt(question)
}

export {
    inquirerMenu,
    pausa
};