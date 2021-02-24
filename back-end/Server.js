import express from 'express';
import mongoose from 'mongoose';
import productRouter from './Routers/ProductRouter.js';
import userRouter from './Routers/UserRouter.js';

const port = process.env.PORT || 3333;

const app = express();

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/petshop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});
app.get('/', (req, res) => {
    res.send('server is ready');
});
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});