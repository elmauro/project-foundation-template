export async function handler() {
  return {
    statusCode: 501,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ message: 'Implement OTP handling for __PROJECT_NAME__.' }),
  };
}
