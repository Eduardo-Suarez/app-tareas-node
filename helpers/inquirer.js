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
                name: `${'1.'.blue} Crear Nueva Tarea`,
            },
            {
                value: "2",
                name:`${'2.'.blue} Listar Tareas`,
            },
            {
                value: "3",
                name: `${'3.'.blue} Listar Tareas Completadas`,
            },
            {
                value: "4",
                name:`${'4.'.blue} Listar Tareas Pendientes`,
            },
            {
                value: "5",
                name: `${'5.'.blue} Completar Tarea(s)`,
            },
            {
                value: "6",
                name: `${'6.'.blue} Eliminar Tarea"`,
            },
            {
                value: "0",
                name: `${'0.'.blue} Salir`,
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

const leerInput = async (message) => {

    const question = [
        {
            type:'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0){
                    return 'Por favor ingrese un valor';
                }

                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
}

export {
    inquirerMenu,
    pausa,
    leerInput
};