import express, { NextFunction } from 'express';
import connectDb from './database/mongoDb';
import morgan from 'morgan';
import user from './routes/user'
import cors from 'cors';
import bodyParser from 'body-parser';

connectDb()
const app = express();

app.use(bodyParser.json());



const port: Number = 3000;
app.use(morgan("dev"));

const corsOptions = {
	origin: 'http://localhost:4200',
	credentials: true,
	optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/', user);


app.listen(port, (): void => {
	console.log("server started");
});