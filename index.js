const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')
const url = 'mongodb+srv://admin:YzOCE9cR7TOWpyCV@cluster0.nxhs41w.mongodb.net/'
const bancoDadosNome = 'ocean_jornada_full_nov_22'

// funcção assincrona para aguardar a conexão com o banco
async function main() {
console.log('Conctando DB...')

  const client = await MongoClient.connect(url)
  const bancoDados = client.db(bancoDadosNome)

  // Obtém acesso à collection
  const collection = bancoDados.collection('itens')
  console.log('Conectado com sucesso!')

  const app = express()

  //sinalizamos que estamos usando JSON no Body
  app.use(express.json())

  app.get('/', function (req, res) {
    res.send('Hello World')
  })

  app.get('/oi', function (req, res) {
    res.send('Olá mundo!')
    })

  // Lista de informações
  const itens = ['item1', 'item2', 'item3', 'item4']

  // endpoint read all
  app.get('/itens', async function(req, res){
    //lendo todos os documentos
    const documentos = await collection.find().toArray()
    res.send(documentos)
  })

  // endpoint para ler pelo id
  app.get('/itens/:id', async function(req, res){
    // pegamos o parâmetro de rota pelo ID
    const id = req.params.id

    // acessamos o item pelo índice
    const item = await collection.findOne({
      _id: new ObjectId(id)
    })

    // exibimos o item encontrado
    res.send(item)
  })

  // endpoint post - create
  app.post('/itens', async function(req, res){
    // serve para visualizar no terminal o que está sendo enviado
    // console.log(req.body)

    // colocamos o nome em uma variável
    const item = req.body

    // adiciona em itens com o push
    await collection.insertOne(item)

    res.send('item criado com sucesso!')
  })

  // Endpoint [PUT] /itens/:id - UPDATE BY ID (Atualizar pelo ID)
  app.put("/itens/:id", async function (req, res) {
    // Pegamos o parâmetro de rota ID
    const id = req.params.id

    // Pegamos o nome enviado no body
    const item = req.body

    // Atualizamos com o novo item, na posição ID da lista de itens
    await collection.updateOne(
      {_id: new ObjectId(id) },
      { $set: item } )

    res.send('item atualizado!')
  });

  // Endpoint [DELETE] /itens/:id - DELETE BY ID (Remover pelo ID)
  app.delete("/itens/:id", async function (req, res) {
    // Pegamos o parâmetro de rota ID
    const id = req.params.id

    // Remove o item da lista
    await collection.deleteOne({
      _id: new ObjectId(id)
    })

    // Exibimos uma mensagem de sucesso
    res.send('deletado com sucesso!')
  });

  app.listen(3000, function() {
      console.log('Servidor rodando => http://localhost:3000 para encerrar: CTRL+C')
  })
}
main()