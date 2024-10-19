// server.js
import express from 'express';
import cors from 'cors';
import { db } from './firebaseConfig.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Endpoint untuk mendapatkan pesan
app.get('/messages', async (req, res) => {
    // Logika untuk mendapatkan pesan dari Firestore
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
