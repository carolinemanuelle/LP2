import express from "express";
import { Filme } from "./database/tables.js";
import { Ator } from "./database/tables.js";
import { Diretor } from "./database/tables.js";
const app = express()

app.use('/filmes', async (req, res) => {
    const filmes = await Filme.findAll()
    res.json(filmes)
});

app.use('/atores', async(req, res) => {
    const atores = await Ator.findAll()
    res.json(atores)
});

app.use('/diretores', async(req, res) => {
    const diretores = await Diretor.findAll()
    res.json(diretores)
});

app.use('/cadastros', async (req, res) => {
    const at1 = await Ator.create({ nome: 'Bastião', pais: 'Nova Zelândia' });
    const at2 = await Ator.create({ nome: 'Clarice', pais: 'Brasil' });
    const at3 = await Ator.create({ nome: 'Luana', pais: 'Austrália' });

    const dir1 = await Diretor.create({ nome: 'Lukas Pass', nascimento: '02/11/2002' });
    const dir2 = await Diretor.create({ nome: 'Joao Marcos', nascimento: '03/08/1999' });

    const fi1 = await Filme.create({ titulo: 'Filme 1', descricao: 'Bom', ano: '2023', DiretorId: dir1.id });
    const fi2 = await Filme.create({ titulo: 'Filme 2', descricao: 'Ruim', ano: '2021', DiretorId: dir2.id });

    await fi1.setAtors([at1, at2]); // indica quais atores fazem parte do filme 1.
    await fi2.setAtors([at2, at3]); //                                      //  2.

    res.end('Tudo cadstrado!')
})

app.listen(80, () => {
    console.log('Escutando...')
})