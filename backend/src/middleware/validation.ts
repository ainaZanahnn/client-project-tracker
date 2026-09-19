import { Request, Response } from "express";

export function validateProject(req: Request, res: Response, next: Function) {
    const { name, clientName, status, startDate } = req.body;
    
    //check if all required fields are not empty 
    if (!name || !clientName || !status || !startDate) {
        return res.status(400).json({
            message:"All project fields are required"
        })
    }

    //check if field have correct data type
    if (typeof name !== "string" || typeof clientName !== "string" || typeof status !== "string" || typeof startDate !== "string") {
        return res.status(400).json({
            message: "Invalid data project"
        });
    }

    //check if project status is valid
    const allowedStatus = ["Not Started", "active", "Completed", "on_hold"];
    if (!allowedStatus.includes(status)) {
        return res.status(400).json({
            message: "Invalid project status"
        });
    }

    next();
}


export function validateId(req: Request, res: Response, next: Function) {
    const { id } = req.params;

    //check if id valid
     if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
        return res.status(400).json({
             message: "invalid project ID"
        })
    }

    next();
}



