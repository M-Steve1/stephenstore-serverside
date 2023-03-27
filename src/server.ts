import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/userRoute';
import productRouter from './routes/productRoute';
import productServiceRouter from './routes/productServiceRoute';
import cartRoute from './routes/cartRoute';
import cors from 'cors';
import cartServiceRoute from './routes/cartServiceRoute';
import orderRouter from './routes/orderRoute';

const app: express.Application = express();
const address = '0.0.0.0:3000';

app.use(cors());
app.use(bodyParser.json());
app.use('/user', userRouter);
app.use('/product', productRouter, productServiceRouter);
app.use('/order', orderRouter);
app.use('/cart', cartRoute, cartServiceRoute)

app.listen(3000, () => {
  console.log(`Listen on ${address}`);
});

app.get('/', (req, res) => {
  res.json({Message: "Working right, cool!"})
})
export default app