import express from 'express'
const app = express()

app.use('/', (req, res) =>{
    res.end('Resposta do servidor')
})
app.listen(80, () => {
    console.log("Escutando")
})