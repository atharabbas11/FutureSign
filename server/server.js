import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// CORS setup for development (allow LAN IP)
if (process.env.NODE_ENV === 'development') {
  app.use(cors({
    origin: true,
    credentials: true,
  }));
} else {
  // In production, allow only your frontend domain
  app.use(cors({
    origin: process.env.CLIENT_URL, 
    credentials: true,
  }));
}

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Define contact schema and model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  service: String,
  message: String,
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

// API route
app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Contact saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save contact" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
