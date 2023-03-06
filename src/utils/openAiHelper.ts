import { Configuration, OpenAIApi } from "openai";
import { CommentData, OpenApiRes } from "../../types/apiData";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const openAiClient = async (content: string, qty: number) => {
  try {
    const res = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(content, qty),
      temperature: 0.6,
      max_tokens: 300,
    });
    const data = res.data as OpenApiRes;
    console.log(data.choices[0]);
    return covertToObject(data.choices[0].text);
  } catch (error) {
    console.log(error);
  }
};

const generatePrompt = (content: string, qty: number) => {
  return `I want to create fake comments for my Twitter clone project which is called Chitter. In Chitter, 'peep' equals 'tweet' in Twitter. Please create ${qty} fake user names and fake comments to put under this peep: "${content}". Do not use the following inside the comments: , or { or } or ' or " or : 

Example:
{username: "terry", content: "put the content here"}
Suggestions:`;
};

const covertToObject = (commentString: string): CommentData[] => {
  const comments = commentString
    .split("\n")
    .filter((str) => str.length > 0)
    .map((str) => {
      const values = str.split(", ");
      const username = values[0].split(": ")[1].replace(/"/g, "");
      const content = values[1]
        .split(": ")[1]
        .replace(/"/g, "")
        .replace("}", "");
      return { id: crypto.randomUUID(), username, content };
    });
  return comments;
};
