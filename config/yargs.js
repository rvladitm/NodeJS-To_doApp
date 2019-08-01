const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
};

const completado = {
    default: true,
    alias: 'c',
    desc: ' Marca como completado o pendiente la tarea '
};


const argv = require('yargs')

.command('crear', 'Crear un elemento', {
        descripcion
    })
    .command('update', 'Actualiza el estado', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .command('listar', 'Listar las tareas', {

    })
    .help()
    .argv;

module.exports = {
    argv
};