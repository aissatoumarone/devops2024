const http = require('http');

const server = http.createServer((req, res) => {
  // Définit le type de contenu de la réponse comme étant JSON
  res.setHeader('Content-Type', 'application/json');

  // Crée la réponse JSON
  const jsonResponse = JSON.stringify({ status: 'success', msg: 'OK' });

  // Envoie la réponse JSON
  res.end(jsonResponse);
});

const port = 3000; // Vous pouvez spécifier le port de votre choix

server.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
