import { BSD } from './database';

import { makeApp } from './server';

require('dotenv').config();
const database = new BSD();

const port = 3500;
const language = require('@google-cloud/language');

const client = new language.LanguageServiceClient({
  apiKey: process.env.API_KEY_NATURAL_LANGUAGE,
});

async function main() {
  try {
    // HINT: to drop the database, please uncomment next line for demo purposes
    // await database.comments.drop();
    makeApp(client, database).listen(port, () => {
      return console.log(`🚀 Express is listening at http://localhost:${port}`);
    });
  } catch (err) {
    console.error('error:', JSON.stringify(err));
  }
}

main().catch((err) => {
  console.error(JSON.stringify(err));
});
