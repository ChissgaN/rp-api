CREATE VIEW vw_users
AS
    SELECT u.*, r.id  AS [role.id], r.name AS [role.name], s.id AS [status.id], s.name AS [status.name]
    FROM users u
        LEFT JOIN role r ON u.role_id = r.id
        LEFT JOIN status s ON u.status_id = s.id
GO
 
