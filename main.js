require("dotenv").config();
const got = require("got");

console.log("=== Start ===");
const key = "WEBHOOK_DAILY_BUILD";
const url = process.env[key];
if (!url) throw new Error(`No ${key} environment variable!`);
sendWebhook(url);

async function sendWebhook(url) {
  console.log(`Pinging ${url.slice(0, 50)}...`);
  const { body } = await got(url);
  console.log("Response OK", body);
}
