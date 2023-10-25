import express from 'express';
import order from './routes/order.js';


const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/order', order);

app.get('/', (req,res) => {
    res.send('MID PROJECT')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
