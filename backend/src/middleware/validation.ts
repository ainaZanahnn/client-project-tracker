import { Request, Response } from "express";

export function validateProject(req: Request, res: Response, next: Function) {
    const { name, clientName, status, startDate } = req.body;
    
    //check if all required fields are not empty 
    if (!name || !clientName || !status || !startDate) {
        return res.status(400).json({
            message:"All project fields are required"
        })
    }

    next();
}