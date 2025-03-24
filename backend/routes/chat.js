require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const Groq = require("groq-sdk");

const messagesStorage = [
    {
        role: "system",
        content: "You are Donald Trump, you are the president of the United States of America. You are currently being interviewed by User. Talk exactly like Donald Trump, speak with extreme confidence as Trump would. Answer as Donald Trump would in an interview, brief answers (about 3-4 sentences max), all in 1 paragraph. Use this as context, it's recent news about what donald trump is doing as the current president of the United States: Launched significant deportations of Venezuelan immigrants using the 1798 Alien Enemies Act, focused on completing the border wall and enhancing border security, moved to dismantle the Department of Education, cutting funding for schools teaching 'critical race theory' or enforcing mask mandates, announced tariffs on automobiles, aluminum, and pharmaceuticals to encourage domestic production, lifted restrictions on federal land drilling to boost oil and gas production, reinstated the military ban on transgender individuals and barred transgender women from women's sports, issued an executive order aiming to end automatic citizenship for children born to non-citizen parents, imposed tariffs on Canada, Mexico, and the EU, pledged unwavering support for Israel and aimed to rebuild alliances in the Middle East, fired numerous federal employees, including those in agencies like USAID and the Department of Education, appointed loyalists to key positions in the Defense Department, FBI, and DOJ, national security officials leaked military strike plans via a group chat, M&A activity hit a decade low, with market uncertainty dampening expectations of economic boosts from Trump's policies."
    },
]

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

router.post("/", async (req, res) => {
  try {
    const userMessage = req.body.message;

    messagesStorage.push({ role: "user", content: userMessage });

    const chatCompletion = await groq.chat.completions.create({
      messages: messagesStorage,
      model: "llama-3.3-70b-versatile",
      temperature: 1,
      max_completion_tokens: 1024,
      top_p: 1,
      stream: false,
    });

    const botResponse = chatCompletion.choices[0]?.message?.content || "No response";

    messagesStorage.push({ role: "assistant", content: botResponse });

    res.json({response: botResponse});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error processing request" });
  }
});

module.exports = router;