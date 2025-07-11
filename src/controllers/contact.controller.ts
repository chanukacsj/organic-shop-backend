import {Request, Response} from "express";
import * as contactService from "../services/contact.service";

export const saveContact = (req : Request, res: Response) => {
    console.log("Saving contact");
    try {
        const contact = req.body;
        const validationError = contactService.validateContact(contact);

        if(validationError) {
            res.status(400).json({error: validationError});
            return;
        }
        const saveContact = contactService.saveContact(contact);
        res.status(201).json(saveContact);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Something went wrong !! " + error});
    }
}

export const getAllContacts = (req : Request, res: Response) => {
    try{
        const contacts =  contactService.getAllContacts();
        res.status(200).json(contacts);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error: "Something went wrong !! "});
    }

}
