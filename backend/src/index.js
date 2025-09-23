import express from 'express';
import userRoute from "./routes/userRoute.js";
import errorHandler from "./middlewares/errorHandler.js";
import { testDBConnection } from './config/db.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from './docs/swagger.json' with { type: 'json' };
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: false
}));

app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint tidak ditemukan!' });
});

app.use(errorHandler);

app.listen(port, async () => {
    console.log(`API running on port ${port}`);
    await testDBConnection();
});