
import app from "./app";
import dotenv from "dotenv";

dotenv.config(); //load env variables from .env file

// 1.Initialize the export app
const port = process.env.PORT || 3000; //Access the port from .env file

// 4. Instructs the express app to listen on port 3000
app.listen(port,() => {
    console.log(`Saver is running at http://localhost:${port}`);
});

