import express from "express";
import dotenv from "dotenv";
import connectDB from "./configuration/db.js";
import router from "./routes/recipe.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/recipe", router);


const startServer = async() => {
    try{
       await connectDB();
       app.listen(port, () => {
        console.log(`Server is running on ${port}`);
    } );
    
    }catch (err){
        console.error("Error connecting to MongoDB", err);
        process.exit(1);
    }
    
}
startServer();


