import mongoose from "mongoose";
let connected = false

const connectDB = async()=>{
    mongoose.set("strictQuery", true);

    //If the database already connected , don't connect again
     if(connected){
        console.log('MongoDB is already connected...');
        return;
     }
     //connect to MOngoDB
     try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected=true;
        console.log('MongoDB connected...')
     } catch (error) {
        console.log(error);
     }
};

export default connectDB;