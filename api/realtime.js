const axios = require("axios");

const handler = async (req, res) => {
  try {
    const response = await axios.post('https://api.assemblyai.com/v2/realtime/token', // use account token to get a temp user token
      { expires_in: 3600 }, // can set a TTL timer in seconds.
      { headers: { authorization: 'b18b8a1f65774b0c9283b9248a605bc1' } }); // AssemblyAI API Key goes here
    const { data } = response;
    res.json(data);
  } catch (error) {
    const {response: {status, data}} = error;
    res.status(status).json(data);
  }
}

export default handler;