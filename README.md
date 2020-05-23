# Best of JavaScript scheduler

A super simple Node.js project to trigger webhooks on CI servers.

Goal: send everyday a webhook to [Vercel](https://vercel.com/) in order to rebuild [Best of JavaScript](https://bestofjs.org/) data consumed by the web client.

Configuration: requires an environment variable called `WEBHOOK_DAILY_BUILD`
