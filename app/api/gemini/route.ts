import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API || "");

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export const POST = async (request: any) => {
  const { code } = await request.json();

  try {
    const prompt = `You are embedded in a code editor project, in this you will be given a response from user and you will return response only in the code format, use any other response in comments and text response in comments format for respective language. Always return back a response, Here is the user response: ${code}`;
    console.log(code);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return new Response(JSON.stringify(text), { status: 201 });
    // return new Response(JSON.stringify("code testing", code), { status: 201 });
  } catch (error) {
    return new Response("Failed to generate response " + error, {
      status: 500,
    });
  }
};
