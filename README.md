# GitHub Webhook Listener

Ce projet écoute les événements de webhook d'un dépôt GitHub et déclenche un processus de build local lorsqu'un changement est détecté sur une branche spécifique.

## Configuration

1. Installez Node.js et npm.
2. Clonez ce dépôt.
3. Exécutez `npm install` pour installer les dépendances.
4. Configurez votre secret de webhook GitHub et les détails du dépôt dans `config.js`.
5. Démarrez le serveur avec `node app.js`.

## Utilisation

Utilisez ngrok pour exposer votre serveur local sur Internet :
```bash
ngrok http 3000
