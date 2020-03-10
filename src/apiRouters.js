const db = require("./db")
const express = require("express")
const router = express.Router()

router.get('/busca', (req, res) => {
    const query = /*sql*/`
        SELECT id, email, titulo, cidade, descricao
        FROM anuncios
        WHERE LIKE(?, LOWER(cidade || descricao || titulo))
        ORDER BY id DESC;
    `
    if (req.query.key) {
        db.all(query, [`%${req.query.key}%`], (err, vagas) => {
            if (err) {
                console.log(err.message)
                return next(err)
            }
            res.json(vagas)
        })
    } else {
        res.status(500).json("O key deve ser informado.")
    }
})

module.exports = router