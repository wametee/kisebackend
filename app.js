import express from 'express';

import { PORT } from './config/env.js';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import connectToDatabase from './database/mongodb.js';

const app = express();
// put routes to use
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the Kise backend API');


});

app.listen(PORT, async () => {
    console.log(`Kise API is running on http://localhost:${PORT}`);
    await connectToDatabase();
    
});

export default app;