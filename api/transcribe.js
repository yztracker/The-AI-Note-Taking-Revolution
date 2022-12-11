import axios from "axios";

const handler = async (req, res) => {
  const mySecret = process.env['API_KEY']


  const assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
      authorization: 'b18b8a1f65774b0c9283b9248a605bc1',
      "content-type": "application/json",
    },
  });

  try {
    const response = await assembly.post("/transcript", {
      audio_url: req.body.data.url,
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default handler;