export async function handler(event, context) {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      service: '__BACKEND_SERVICE_NAME__',
      status: 'ok',
      requestId: context.awsRequestId,
      path: event.rawPath ?? event.path,
    }),
  };
}
