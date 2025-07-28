export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  const simulatedReply = `👁 Meme Eater: [System offline] Your message was received: "${message}". Real brain activation is coming soon...`;

  res.status(200).json({ reply: simulatedReply });
}
