const express = require('express')
const router = express.Router()
const User = require('../models/user')

// pegar todos os users
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

// pegar um hwid de user específico
router.get('/:hwid', getUser, (req, res) => {
    res.json(req.user)
})

// criar um user
router.post('/', async (req, res) => {
    const user = new User({
        hwid: req.body.hwid,
        winuser: req.body.winuser,
        process: req.body.process
    })

    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// atualizar um user
router.patch('/', getUser, (req, res) => {

})

// deletar user
router.delete('/:hwid', getUser, async (req, res) => {
    try {
        let hwid = req.user.hwid
        await req.user.remove()
        res.json({ message: "HWID " + hwid + " deletada" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getUser(req, res, next) {
    let user
    try {
        user = await User.findOne({ "hwid" : req.params.hwid })
        if (!user) {
            return res.status(404).json({ message: "HWID não encontrada" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    req.user = user
    next()
}

module.exports = router