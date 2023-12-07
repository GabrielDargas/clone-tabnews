import database from "infra/database.js";

async function status(req, res) {
  const updatedAt = new Date().toISOString();
  const postgresVersion = parseFloat(
    (await database.query("SHOW server_version;")).rows[0].server_version,
  );
  const maxConnections = parseInt(
    (await database.query("SHOW max_connections;")).rows[0].max_connections,
  );
  const openedConnections = parseInt(
    (
      await database.query(
        "SELECT COUNT(*) AS opened_connections FROM pg_stat_activity",
      )
    ).rows[0].opened_connections,
  );

  res.status(200).json({
    updated_at: updatedAt,
    postgres_version: postgresVersion,
    max_connections: maxConnections,
    opened_connections: openedConnections,
  });
}

export default status;
