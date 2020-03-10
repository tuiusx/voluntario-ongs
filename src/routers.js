const express = require("express")
const router = express.Router()
const db = require("./db")

router.get('/', (req, res, next) => {
    const query = /*sql*/`
        SELECT id, email, descricao, titulo, cidade
        FROM anuncios
        ORDER BY id DESC
        LIMIT 10;
    `

    db.all(query, (err, vagas) =>{
        if (err) {
            console.log(err.message)
            return next(err)
        }
        res.render("index", { vagas })
    })
})

router.get('/', (req, res) => res.render("index"))

router.get('/busca', (req, res) =>  res.render("busca"))

router.get('/cadastro', (req, res) => res.render("cadastro"))

router.post('/cadastro', (req, res) => {
    const query = /*sql*/`
        INSERT INTO anuncios (email, descricao, titulo, cidade)
            VALUES (?, ?, ?, ?);
    `
    db.run(query, [req.body.email, req.body.descricao, req.body.titulo, req.body.cidade], err => {
        if (err) {
            console.log(err.message)
            return next(err)
        }
        res.redirect("/")
    })
})

router.get('/anuncio/:id', (req, res) => {
    const query = /*sql*/`
        SELECT id, email, descricao, titulo, cidade
        FROM anuncios
        WHERE id = ?
    `;
    if (req.params.id) {
        db.get(query, [req.params.id], (err, vaga) => {
            if (err) {
                console.log(err.message)
                return next(err)
            }
            res.render("anuncio", { vaga })
        })
    }
})

module.exports = router