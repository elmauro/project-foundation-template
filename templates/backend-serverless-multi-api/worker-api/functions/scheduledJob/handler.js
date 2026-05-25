export async function handler() {
  return {
    statusCode: 200,
    body: JSON.stringify({ service: '__PROJECT_SLUG__-worker-api', status: 'scheduled job placeholder' }),
  };
}
