import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/signup', (c) => {
  
  const req = c.req.param();
  return c.text('success');
})

app.post('/api/v1/signin', (c) => {
  const req = c.req.param();
  return c.text('success');
})

app.post('/api/v1/blog', (c) => {
  const req = c.req.param();
  return c.text('success');
})

app.put('/api/v1/blog',(c) => {
  const req = c.req.param();
  return c.text('success');
})

app.get('/api/v1/blog/:id', (c) => {
  const param = c.req.param('id');
  return c.text('sucess');
})



export default app
