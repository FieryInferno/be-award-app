const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');

const app = express();

dotenv.config();

const url = process.env.URL;

app.use(cors({origin: url}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('images'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`http://localhost:${port}`));
app.get('/', (req, res) => res.json({
  message: 'Welcome to Award API',
}));

routes(app);
