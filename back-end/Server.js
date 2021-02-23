import express from 'express';
import data from './Data/PetFoodData.js';
const port = process.env.PORT || 3333;
const app = express();

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.send(product);
    }
    else {
        res.status(404).send({ message: 'product not found' });
    }
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/', (req, res) => {
    res.send('server is ready');
});
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});