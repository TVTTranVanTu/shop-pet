import express from 'express';
import data from './Data/PetFoodData.js';
const port = process.env.PORT || 5000;
const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products);
})
app.get('/', (req, res) => {
    res.send('server is ready');
});
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});