// file-operations.js
const fs = require('fs');

// Écrire dans le fichier
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File created and data written.');

  // Lire le fichier
    fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:', data);
    });
});
