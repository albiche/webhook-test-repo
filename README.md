# GitHub Webhook Listener

This project listens for webhook events from a GitHub repository and triggers a local build process when changes are detected on a specific branch.

## Setup

1. Install NodeJS and npm.
2. Clone this repository.
3. Run `npm install` to install dependencies.
4. Configure your GitHub webhook secret and repository details in `config.js`.
5. Start the server with `node app.js`.

## Usage

Use localtunnel to expose your local server to the internet:
```bash
npx localtunnel --port 3000
