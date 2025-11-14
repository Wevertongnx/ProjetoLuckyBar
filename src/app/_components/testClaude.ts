import Anthropic from "@anthropic-ai/sdk";

// Cria uma instância do cliente da API
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY, // Chave que você guarda no .env
});

// Função para testar o Claude
async function testarClaude() {
  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    messages: [
      { role: "user", content: "Olá Claude! Me diga uma curiosidade interessante." },
    ],
  });

  console.log(message.content);
}

// Executa o teste
testarClaude();
