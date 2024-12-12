const language = require('@google-cloud/language');
const client = new language.LanguageServiceClient({
  apiKey: process.env.API_KEY_NATURAL_LANGUAGE,
});

export async function giveSentiment(text: string) {
  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  const [result] = await client.analyzeSentiment({
    document: document,
  });
  const sentiment = result.documentSentiment;

  return sentiment.score;
}
