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