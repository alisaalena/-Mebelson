
import { GoogleGenAI } from "@google/genai";

/**
 * Service to generate AI consultant responses for Mebelson partners.
 * Adheres to the latest @google/genai implementation patterns.
 */
export const getGeminiConsultantResponse = async (userPrompt: string) => {
  try {
    // ALWAYS use named parameter { apiKey: process.env.API_KEY } for initialization.
    // Assume process.env.API_KEY is available and valid in the execution context.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Using ai.models.generateContent directly as per the latest SDK requirements.
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `Ты — AI-менеджер по работе с партнерами мебельной фабрики Mebelson. 
        Твоя цель — помогать дилерам и оптовым покупателям. 
        Ты отлично разбираешься в ассортименте Mebelson: кухни, спальни, гостиные, детские.
        Ты можешь советовать, какие коллекции сейчас наиболее популярны, как лучше оформить выставочную зону в магазине, 
        и какие маркетинговые материалы из доступных на портале помогут увеличить продажи.
        Отвечай в деловом, но дружелюбном стиле, подчеркивая выгоды партнерства с Mebelson.
        Язык общения: русский.`,
      },
    });

    // CRITICAL: .text is a property, not a method. Access it directly without parentheses.
    return response.text || "Не удалось получить ответ от ассистента.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Произошла техническая ошибка. Пожалуйста, попробуйте позже.";
  }
};
