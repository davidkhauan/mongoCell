const { MongoClient } = require ('mongodb')

const URI = 'mongodb://localhost:27017/testemongodb'

const client = new MongoClient (URI)

async function run() {
    try {
        await client.connect()
        console.log ('Conectado com sucesso ao MongoDB!!')
    } catch (error) {
        console.error (`Error ao conectar ao MongoDB: ${error}`)
    }
}

run()

module.exports = client