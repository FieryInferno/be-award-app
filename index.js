import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

dotenv.config();

const url = process.env.URL;

app.use(cors({origin: url}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`http://localhost:${port}`));
app.get('/', (req, res) => res.json({
  message: 'Welcome to Award API',
}));

routes(app);
