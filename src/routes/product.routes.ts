import {Router} from "express";
import {
    deleteProduct,
    getAllProducts,
    getProduct,
    saveProduct,
    updateProduct,
} from "../controllers/product.controller";

const productRouter = Router();

// req handle
productRouter.get("/all", getAllProducts) //get all
productRouter.post("/save", saveProduct); // save
productRouter.get("/:id" , getProduct); // getProduct
productRouter.put("/update/:id", updateProduct); // update
productRouter.delete("/delete/:id", deleteProduct); // delete


export default productRouter;