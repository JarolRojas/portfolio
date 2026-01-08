const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir archivos estáticos desde 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para servir archivos .vcf con el tipo MIME correcto
app.get('*.vcf', (req, res) => {
  const filePath = path.join(__dirname, 'public', req.path);
  res.setHeader('Content-Type', 'text/vcard;charset=utf-8');
  res.setHeader('Content-Disposition', 'inline');
  res.sendFile(filePath);
});

// Servir la aplicación Angular
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'portfolio', 'browser', 'index.html'));
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
