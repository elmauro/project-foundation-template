export async function handler() {
  return {
    statusCode: 501,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ message: 'Implement email sending for __PROJECT_NAME__.' }),
  };
}
