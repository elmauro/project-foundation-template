export async function handler() {
  return {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ service: '__PROJECT_SLUG__-tenant-api', status: 'ok' }),
  };
}
