import express from 'express';
const app = express();
// import dotenv from 'dotenv'
import cors from 'cors'
import todosroutes from './routes/index.js'
import morgan from 'morgan';
import bodyParser from 'body-parser';
import 'dotenv/config';
// dotenv.config();
 
const port = process.env.PORT || 5001

// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

app.use('/todolist', todosroutes);

app.use((err, req, res, next) => {
    console.error(err.stack,"gfghfghfghfghfgh");
    res.status(500).send('500 Error');
});
 
app.listen(4800, () => {
    console.log(`Server running at http://localhost:${port}`);
});