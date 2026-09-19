import pool from "../db/database";

export async function findAll(){
    const result = await pool.query(
       `SELECT p.id, p.name, p.client_name AS "clinetName", p.status, p.start_date AS "startDate", COUNT(t.id) AS "taskCount"
        FROM projects p
        LEFT JOIN tasks t ON p.id = t.project_id
        GROUP BY p.id, p.name, p.client_name, p.status, p.start_date
        ORDER BY p.id DESC`
    );

    return result.rows;
}

export async function create(data: { name: string; clientName: string; status: string; startDate: string }) {
    const { name, clientName, status, startDate } = data;
    const result = await pool.query(
        `INSERT INTO projects (name, client_name, status, start_date)
         VALUES ($1, $2, $3, $4)
         RETURNING id, name, client_name AS "clientName", status, start_date AS "startDate"`,
         [data.name, data.clientName, data.status, data.startDate]
    );

    return result.rows;
}
