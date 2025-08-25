// pages/api/contact.js

export default function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const { firstName, email, message } = req.body;

    if (!firstName || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log('Received:', req.body);
    return res.status(200).json({ success: true });
  }
