import pool from "../db/database";

export async function findByProject(
    projectId: number,
    status: string | null, 
    page: number,
    limit: number
) {
    const offset = (page - 1) * limit;
    const countResult = await pool.query(
        `SELECT COUNT(*) AS total
         FROM tasks
         WHERE project_id = $1 AND ($2::text IS NULL OR status = $2)`,
        [projectId, status]
    );

    const result = await pool.query(
        `SELECT id, title, status, assignee, due_date AS "dueDate"
         FROM tasks
         WHERE project_id = $1 AND ($2::text IS NULL OR status = $2)
         ORDER BY id DESC
         LIMIT $3 
         OFFSET $4`,
        [projectId, status, limit, offset]
    );

    return {
        tasks: result.rows,
        total: parseInt(countResult.rows[0].total)
    };
}
