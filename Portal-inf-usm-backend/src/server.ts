import express from 'express';
import cors from 'cors';
import { enable } from 'colors';
import { log } from '@/lib/funcs';
import Madlogger from '@/lib/logger';
import authRouter from '@/routes/auth';
import bodyParser from 'body-parser';
import { connectDB } from './database';

enable();
connectDB();
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(Madlogger('dev'));
app.use(cors());

app.use('/auth', authRouter);

app.listen(app.get('port'), () => {
	log(['PORTAL:'.bgBlue, 'REST API'.cyan], 0);
	console.log(`Running on port ${app.get('port')}\n`.cyan);
});
