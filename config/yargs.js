const descripcion = {

    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza el estado competado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra  la descripcion', {
        descripcion
    })
    .help()
    .argv

module.exports = {
    argv
}