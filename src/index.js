import express from 'express';
import serverless from 'serverless-http';


const app = express();
app.use('/', (req, res) => res.json({ hello: 'world' }));

export async function handler(event, context) {
  const wrapper = serverless(app);
  return wrapper(event, context);
}
