const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');
const bodyParser = require('body-parser');

const ProductsController = require('./controllers/ProductsController');
const Product = require('./models/Product');

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET']
  }
});

const MAX_PRICE = 100;
const users = {};


io.on('connection', (client) => {
  console.log(`Novo usuário conectado ${client.id}`);
  
  // Adiciona o usuário ativo a lista de usuários com o nome ID
  users[`${client.id}`] = { name: `${client.id}` };
  client.emit('whoAmI', { name: `${client.id}` }); // Envia para o usuário quem ele é
  client.broadcast.emit('usersOnline', users); // Envia para todos os outros quem a lista atualizada

  client.on('updatePrice', async ({ id }) => {
    await Product.updatePrice(id);

    const product = await Product.getById(id);

    if (product.price >= MAX_PRICE) io.emit('finish', product);

    io.emit('updatePriceClient', product);  
  });

  client.on('updateUserName', async ({ name }) => {
    users[`${client.id}`] = { name };
    io.emit('usersOnline', users);  
  });

});

const PORT = 3001;

app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ok: true})
});

app.use('/products', ProductsController);

http.listen(PORT, () => console.log('App listening on PORT %s', PORT))