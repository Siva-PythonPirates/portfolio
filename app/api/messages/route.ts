import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

// Define the Message schema
const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create the model (only if it doesn't exist)
const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);

// Connect to MongoDB
const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI as string);
      console.log('Connected to MongoDB');
    }
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

// POST handler for creating a new message
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const { name, email, message } = await request.json();
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
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
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully',
        data: newMessage
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}

// GET handler for retrieving all messages
export async function GET() {
  try {
    await connectDB();
    
    const messages = await Message.find().sort({ createdAt: -1 });
    
    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
} 