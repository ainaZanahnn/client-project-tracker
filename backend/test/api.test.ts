import app from "../src/app";
import request from "supertest";
import { describe, it, expect } from "vitest";

describe("Task API", () => {

    it("Filter task by status and paginated", async () => {
        const statuses = ["NOT_STARTED", "IN_PROGRESS", "COMPLETED"];

        for (const status of statuses) {
            const response = await request (app)
            .get(`/api/projects/2/tasks?status=${status}&page=1`);

            expect(response.status).toBe(200);
            expect(response.body.data.every(
                (task: any) => task.status === status
            )).toBe(true);
            expect(response.body.pagination.total).toBeGreaterThanOrEqual(0);
        }
    });

    it("Mark tak as completed", async () => {
        const response =await request(app)
        .patch("/api/projects/2/tasks/8/complete")
     
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("COMPLETED");
    })

    it("Create a Project", async () => {
        const response =await request(app)
        .post("/api/projects")
        .send({
            name: "Project A",
            clientName: "Client DADU",
            status: "NOT_STARTED",
            startDate: "2026-09-21"
        });
        

        expect(response.status).toBe(201);
        expect(response.body.name).toBe("Project A");
        expect(response.body.clientName).toBe("Client DADU");
        expect(response.body.status).toBe("NOT_STARTED");
    })
});

