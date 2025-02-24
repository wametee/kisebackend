import express from 'express';

import { PORT } from './config/env.js';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';


const app = express();
// put routes to use
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the Kise backend API');


});

app.listen(PORT, () => {
    console.log(`Kise API is running on http://localhost:${PORT}`);
});

export default app;