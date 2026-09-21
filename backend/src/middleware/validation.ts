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
    const allowedStatus = [ "NOT_STARTED", "IN_PROGRESS", "COMPLETED"];
    if (!allowedStatus.includes(status)) {
        return res.status(400).json({
            message: "Invalid project status"
        });
    }

    next();
}

export function validateId(paramName: string) {
    return function (req: Request, res: Response, next: Function) {
        const value = req.params[paramName];

        // check if id valid
        if (!Number.isInteger(Number(value)) || Number(value) <= 0) {
            return res.status(400).json({
                message: "Invalid ID"
            });
        }

        next();
    };
}

export function validateTask(req: Request, res: Response, next: Function) {
    const { status, page } = req.query;

    //check if task status is valid
    if (status !== undefined) {
        const allowedStatus = ["NOT_STARTED", "IN_PROGRESS", "COMPLETED"];
        
        if ( typeof  status !== "string" || !allowedStatus.includes(status)) {
            return res.status(400).json ({
                message: "Invalid task status"
            });
        }
    }

    //check page number
    if (page !== undefined) {
        const pageNumber = Number(page);
        
        if ( !Number.isInteger(pageNumber) || pageNumber <= 0) {
            return res.status(400).json({
                message: "Invalid page number"
            })
        }
    }

    next();
}



