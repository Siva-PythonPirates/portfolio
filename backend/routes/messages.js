const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// POST /api/messages - Create a new message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }
    
    // Create a new message
    const newMessage = new Message({
      name,
      email,
      message
    });
    
    // Save the message to the database
    await newMessage.save();
    
    // Return success response
    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully',
      data: newMessage
    });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/messages - Get all messages (for admin purposes)
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 