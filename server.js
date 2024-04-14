// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files from 'public' directory

app.post('/api/ask', async (req, res) => {
    const { message } = req.body;
    try {
        // Replace with your actual AI API endpoint and headers
        const aiResponse = await axios.post('YOUR_AI_API_ENDPOINT', {
            headers: { 'Authorization': 'Bearer YOUR_API_KEY' },
            data: { input: message }
        });
        res.json({ reply: aiResponse.data });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error calling AI API' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));