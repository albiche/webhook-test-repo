// github-webhook.js
const crypto = require('crypto');
const { exec } = require('child_process');
const config = require('./config');

function verifyGithubSignature(req, res, buf, encoding) {
    const signature = req.headers['x-hub-signature'];
    if (!signature) {
        return res.status(401).send('Signature missing');
    }

    const hmac = crypto.createHmac('sha1', config.githubSecret);
    const digest = Buffer.from('sha1=' + hmac.update(buf).digest('hex'), 'utf8');
    const checksum = Buffer.from(signature, 'utf8');

    if (!crypto.timingSafeEqual(digest, checksum)) {
        return res.status(401).send('Signature mismatch');
    }
}

function handleGithubWebhook(req, res) {
    const event = req.body;

    if (event.ref === `refs/heads/${config.githubBranch}`) {
        console.log(`Changes detected on branch: ${config.githubBranch}`);
        exec('git pull && npm install && npm run build', (error, stdout, stderr) => {
            if (error) {
                console.error(`Exec error: ${error}`);
                return;
            }
            console.log(`Stdout: ${stdout}`);
            console.error(`Stderr: ${stderr}`);
        });
    }

    res.status(200).send('Webhook received');
}

module.exports = {
    handleGithubWebhook,
    verifyGithubSignature
};
