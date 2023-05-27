const express = require('express')

const crearUsuario = (req, res) => {
    const {name, email, password } = req.body

    res.status(200).json({
        ok: true,
        name, email, password
    })
}

const registrarUsuario = (req, res) => {
    const {name, email, password, age} = req.body

    res.json({
        ok:true,
        name, email, password, age
    })
}

const loginUsuario = (req, res) => {
    res.json({
        ok: true
    })
}

const revalidarToken = (req, res) => {
    res.json({
        ok: true
    })
}

module.exports = {
    loginUsuario,
    registrarUsuario,
    crearUsuario,
    revalidarToken
}