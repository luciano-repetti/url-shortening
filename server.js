import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
app.use(cors());

// Configuración de proxy para redirigir solicitudes a CleanURI
app.use('/api/v1', createProxyMiddleware({
  target: 'https://cleanuri.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api/v1': '/api/v1',
  },
}));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
