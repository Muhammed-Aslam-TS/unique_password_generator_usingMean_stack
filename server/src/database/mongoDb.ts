import mongoose from "mongoose";
import dbOptions from "../types/connectionInterface";


const dbOpt: dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectDb = async () => {
    try {
      // mongodb connection string
      mongoose.set("strictQuery", false);
       await mongoose.connect("mongodb://localhost:27017/uniquePasswordGenerator",dbOpt);
      // eslint-disable-next-line no-console
      console.log("MongoDB connected");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      process.exit(1);
    }
  };
  export default connectDb;