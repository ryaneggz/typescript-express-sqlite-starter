import express from "express";
import userRoutes from "./routes/userRoutes";

const app = express();
const port = 3000;

app.use(express.json());

// Use the user routes
app.use('/api', userRoutes);

const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

export { app, server };