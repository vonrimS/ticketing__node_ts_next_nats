import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { deleteOrderRouter } from './routes/delete';
import { showOrderRouter } from './routes/show';
import { indexOrderRouter } from './routes/index';
import { newOrderRouter } from './routes/new';

import { errorHandler, NotFoundError, currentUser } from '@von_ticket/common';


const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        // secure: true
        secure: process.env.NODE_ENV !== 'test'
    })
);

app.use(currentUser);

app.use(deleteOrderRouter);
app.use(showOrderRouter);
app.use(indexOrderRouter);
app.use(newOrderRouter);

app.all('*', async (req, res) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };