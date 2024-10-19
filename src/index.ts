import dotenv from 'dotenv';
dotenv.config();
const port = `${Number(process.env.PORT)||9475}`;

import express, {Request, Response} from 'express';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan'


const app= express()
const allowedOrigins = ['http://localhost:9475'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

const indexPath = './../public/index.html'


app.use(express.static(path.join(__dirname, './../public/')))
app.use(express.json());
app.use(morgan('dev'));


app.get('/', (req: Request, res: Response) => {
  res.sendFile(indexPath);
});

app.listen( port, ()=>{
    console.log(`Server running on port ${port}`);
})
