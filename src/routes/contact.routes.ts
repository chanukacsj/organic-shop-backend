import { Router } from 'express';
import {getAllContacts, saveContact} from "../controllers/contact.controller";

const   contactRoutes:Router = Router();

contactRoutes.post("/save",saveContact);
contactRoutes.get("/all",getAllContacts);

export default contactRoutes;