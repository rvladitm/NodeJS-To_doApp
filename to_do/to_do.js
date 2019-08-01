const fs = require('fs');

let listadoTodo = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoTodo);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar en db');
    });
};

const cargarDB = () => {

    try {

        listadoTodo = require('../db/data.json');

    } catch (error) {

        listadoTodo = [];

    }
};
const crear = (descripcion) => {

    cargarDB();

    let todo = {

        descripcion,
        completado: false
    };

    listadoTodo.push(todo);

    guardarDB();

    return todo;
};

const getlistado = () => {

    cargarDB();
    return listadoTodo;

};
const actualizar = (descripcion, completado = true) => {

    cargarDB(); //cargo los datos

    let index = listadoTodo.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoTodo[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {

    cargarDB();

    let aux = listadoTodo.filter(tarea => {
        return tarea.descripcion != descripcion;
    });

    if (listadoTodo.length === aux.length) {
        return false; //no se borra
    } else {
        listadoTodo = aux;
        guardarDB();
        return true;
    }
};

module.exports = {

    crear,
    getlistado,
    actualizar,
    borrar
};