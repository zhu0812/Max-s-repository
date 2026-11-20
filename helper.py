from openai import OpenAI

# talk to the LOCAL model that Ollama is running
client = OpenAI(base_url="http://localhost:11434/v1", api_key="ollama")
 
logs = open("logs.txt").read()
prompt = f"Summarise the problems in these logs, plainly:\n{logs}"
 
reply = client.chat.completions.create(
    model="qwen2.5:3b",
    messages=[{"role": "user", "content": prompt}],
)
print(reply.choices[0].message.content)