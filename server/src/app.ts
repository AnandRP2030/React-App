import express from "express";

const app = express();

app.use(express.json());

app.get('/api/health', (_req, res) => {
    res.json({
        status: 'OK',
        message: 'Task manager API is running'
    })
});

export default app;
