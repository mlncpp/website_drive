const express = require('express');

const app = express()
const port = 3000

const { MongoClient, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mem:esmad@drive.ryfydnj.mongodb.net/?retryWrites=true&w=majority";

let client = null;

async function connect() {

    if (client != null) {
        return client;
    }

    try {
        client = new MongoClient(uri);
        await client.connect();
        console.log("Connected to MongoDB");
        return client;
    }
    catch (err) {
        console.log('Error connectiong to MongoDB', err);
        throw err;
    }
};

app.use(express.json());

app.post('/inscricao', async (req, res) => {
    const client = await connect();

    const db = client.db('DriveWebsite');

    const collection = db.collection('DriveInscricoes');

    const { nome, email, ocupacao, instituicao } = req.body;

    console.log(nome, email, ocupacao, instituicao);

    const nova_inscricao = {
        'nome': nome,
        'email': email,
        'ocupacao': ocupacao,
        'instituicao': instituicao
    };

    const result = await collection.insertOne(nova_inscricao);
    console.log(result);

    res.status(201).json(result.insertedId);
});

app.listen(port, () => console.log(`Servidor funcionando na porta http://localhost:${port}`))