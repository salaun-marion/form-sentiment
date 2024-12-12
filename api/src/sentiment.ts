export async function giveSentiment(text: string, client: any) {
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
