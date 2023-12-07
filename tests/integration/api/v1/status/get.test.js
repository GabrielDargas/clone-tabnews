test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parseUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parseUpdatedAt);

  expect(responseBody.postgres_version).toEqual(16);

  expect(responseBody.max_connections).toEqual(100);

  expect(responseBody.opened_connections).toBeGreaterThan(1);
  expect(responseBody.opened_connections).toBeLessThan(
    responseBody.max_connections,
  );
});
