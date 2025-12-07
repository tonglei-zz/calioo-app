import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API client
// Note: In a real production environment, ensure your API key is secure.
// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY || '' });

export const generateAppStoreDescription = async (
  outline: string, 
  tone: 'professional' | 'casual' | 'exciting',
  language: string
): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing. Please provide a valid API_KEY in the environment.");
  }

  try {
    const prompt = `
      As an expert App Store Optimization (ASO) specialist, rewrite the following app description for an iOS App Store listing.
      The app name is "Calioo".
      
      Target Tone: ${tone}.
      Target Language: ${language}.
      
      Structure the response clearly with:
      1. A catchy subtitle.
      2. An engaging introduction (What is Calioo?).
      3. Bullet points for features using emojis.
      4. A closing call to action.

      Here is the outline provided by the developer:
      ${outline}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Failed to generate content.";
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
};