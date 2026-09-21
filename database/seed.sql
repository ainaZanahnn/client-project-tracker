INSERT INTO projects (
    name,
    client_name,
    status,
    start_date
)
VALUES
    ('Website Redesign', 'ABC Sdn Bhd', 'NOT_STARTED', '2026-09-20'),
    ('Mobile Application', 'XYZ Sdn Bhd', 'IN_PROGRESS', '2026-09-15'),
    ('E-Commerce Platform', 'DEF Enterprise', 'COMPLETED', '2026-09-10');

INSERT INTO tasks (
    title,
    project_id,
    status,
    assignee,
    due_date
)
VALUES
    ('Gather project requirements', 1, 'NOT_STARTED', 'Aina', '2026-09-21'),
    ('Prepare wireframes', 1, 'NOT_STARTED', 'Ali', '2026-09-22'),
    ('Design homepage', 1, 'NOT_STARTED', 'Aina', '2026-09-25'),
    ('Design responsive layout', 1, 'NOT_STARTED', 'Ali', '2026-09-26'),
    ('Create database structure', 1, 'NOT_STARTED', 'Aina', '2026-09-24');

INSERT INTO tasks (
    title,
    project_id,
    status,
    assignee,
    due_date
)
VALUES
    ('Define application requirements', 2, 'COMPLETED', 'Aina', '2026-09-16'),
    ('Create application wireframes', 2, 'COMPLETED', 'Ali', '2026-09-17'),
    ('Design mobile interface', 2, 'IN_PROGRESS', 'Aina', '2026-09-20'),
    ('Develop authentication', 2, 'IN_PROGRESS', 'Ali', '2026-09-23'),
    ('Develop home screen', 2, 'NOT_STARTED', 'Aina', '2026-09-25'),
    ('Implement navigation', 2, 'NOT_STARTED', 'Ali', '2026-09-26'),
    ('Perform API testing', 2, 'IN_PROGRESS', 'Aina', '2026-09-28'),
    ('Perform frontend testing', 2, 'NOT_STARTED', 'Ali', '2026-09-30');

INSERT INTO tasks (
    title,
    project_id,
    status,
    assignee,
    due_date
)
VALUES
    ('Gather business requirements', 3, 'COMPLETED', 'Aina', '2026-09-11'),
    ('Design product catalogue', 3, 'COMPLETED', 'Ali', '2026-09-12'),
    ('Create database structure', 3, 'COMPLETED', 'Aina', '2026-09-13'),
    ('Develop product management', 3, 'COMPLETED', 'Ali', '2026-09-14'),
    ('Implement shopping cart', 3, 'COMPLETED', 'Aina', '2026-09-15'),
    ('Implement checkout process', 3, 'COMPLETED', 'Ali', '2026-09-16'),
    ('Perform system testing', 3, 'COMPLETED', 'Aina', '2026-09-17');