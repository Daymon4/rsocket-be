import path from 'path';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

const proxyMiddleware = createProxyMiddleware('/rsocket', {
    target: 'https://ws.staging.underline.io',
    changeOrigin: true,
    ws: true,
});

app.use(proxyMiddleware);
app.use('/', express.static(path.resolve(__dirname, 'public')));

app.listen(3000);
