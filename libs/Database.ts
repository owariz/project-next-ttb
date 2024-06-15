import mongoose from 'mongoose';

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI as string;

if (!MONGODB_URI) throw new Error('Please define the MONGODB_URI environment variable inside .env.local');

const options: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, options)
    console.log('MongoDB Connecting...');
  } catch (err: any) {
    return console.error('MongoDB Error: ',err.message);
  }
  console.log('MongoDB Connected!')
};

export default connectDB;