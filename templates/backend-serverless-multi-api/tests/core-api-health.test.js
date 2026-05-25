import { handler } from '../core-api/functions/health/handler.js';

describe('core API health handler', () => {
  it('returns a healthy response', async () => {
    const response = await handler();
    const body = JSON.parse(response.body);

    expect(response.statusCode).toBe(200);
    expect(response.headers).toEqual({ 'content-type': 'application/json' });
    expect(body).toEqual({
      service: '__PROJECT_SLUG__-core-api',
      status: 'ok',
    });
  });
});
