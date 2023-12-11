import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

// Configuración de CORS para permitir solicitudes desde cualquier origen
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir cualquier origen
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Configuración de proxy para redirigir solicitudes a CleanURI
app.use('/api/v1', (req, res, next) => {
  // Manejar solicitudes OPTIONS manualmente
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    // Para otras solicitudes, usar el proxy
    createProxyMiddleware({
      target: 'https://cleanuri.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api/v1': '/api/v1',
      },
    })(req, res, next);
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});