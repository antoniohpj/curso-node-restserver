const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {

    const {q, nombre='No Nombre', apikey, page=1, limit} = req.query;

    res.json({
        msg: 'get API - controlador',
        nombre,
        q,
        apikey,
        page,
        limit
    });
}

const usuariosPost= (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre: nombre,
        edad: edad,
    });
}

const usuariosPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        msg: 'put API - controlador',
        id,
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador',
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador',
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}