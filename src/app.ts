import express,{Express,Request,Response} from 'express';
import productRoutes from "./routes/product.routes"
import contactRoutes from "./routes/contact.routes";
import cors from "cors";

const app: Express = express();

// 1 initialize the express app
export default app;

// 2 Define Middleware
// 2.1 instruct to parse the request payload data to be converted to JSON format

app.use(express.json());
app.use(cors()) // enable/allow CORS here
// const allowedOrigins = ["http://localhost:5173"];
//
// const crsOptions = {
//     origin: (origin: string | undefined, callback: (error: Error | null, allow?: boolean) => void) => {
//         if (!origin || allowedOrigins.includes(origin)) { // postman request allowed
//             callback(null, true);
//         } else {
//             callback(new Error("Not allowed by CORS"));
//         }
//     }
//}
app.use("/api/products", productRoutes);
app.use("/api/contacts", contactRoutes);