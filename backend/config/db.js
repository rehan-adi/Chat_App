import mongoose from 'mongoose';

const dbConnect = async () => {
   try {
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log('MongoDb connected successfully'.cyan.underline);
   } catch (error) {
     console.log('error'.trimEnd.bold, error);
   }
};

export default dbConnect;