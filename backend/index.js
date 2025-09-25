import express from 'express';
import userRoute from "./src/routes/userRoute.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import { testDBConnection } from './src/config/db.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from './src/docs/swagger.json' with { type: 'json' };
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors({
    origin: 'https://user-management-app-chirzin.vercel.app',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use("/", (req, res, next) => {
    res.send("Server is running");
});

app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint tidak ditemukan!' });
});

app.use(errorHandler);

export default app;

app.listen(port, async () => {
    console.log(`API running on port ${port}`);
    await testDBConnection();
});