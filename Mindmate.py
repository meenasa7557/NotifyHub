
import os
from openai import OpenAI

# Create the AI client
client = OpenAI()

# Store the conversation history
messages = [
    {
        "role": "developer",
        "content": (
            "You are MindMate, a friendly AI student assistant. "
            "Answer questions from ALL subjects, including mathematics, "
            "science, physics, chemistry, biology, English, history, "
            "geography, computer science, programming, and general knowledge. "
            "Also help with study planning, exam preparation, and motivation. "
            "Explain answers in simple, beginner-friendly language. "
            "Give examples and step-by-step explanations when useful. "
            "For coding questions, provide correct code and explain it. "
            "If a question is unclear, ask for clarification. "
            "Be honest when uncertain."
        )
    }
]

print("=" * 40)
print("       Welcome to MindMate AI!")
print(" Your friendly all-subject study partner")
print(" Type 'exit' to stop the chatbot.")
print("=" * 40)

while True:
    try:
        user_input = input("\nYou: ").strip()

        # Stop the chatbot
        if user_input.lower() == "exit":
            print("MindMate: Goodbye! Keep learning and stay motivated!")
            break

        # Check for empty input
        if not user_input:
            print("MindMate: Please enter a question.")
            continue

        # Add the student's question
        messages.append({
            "role": "user",
            "content": user_input
        })

        # Generate an AI response
        response = client.responses.create(
            model="gpt-5.5",
            input=messages
        )

        answer = response.output_text
        print("\nMindMate:", answer)

        # Save the AI response for context
        messages.append({
            "role": "assistant",
            "content": answer
        })

    except KeyboardInterrupt:
        print("\nMindMate: Goodbye! Happy learning!")
        break

    except Exception as error:
        print("\nMindMate: Something went wrong.")
        print("Please check your API key, internet connection,")
        print("API access, and available usage limits.")
        print("Error details:", error)

        # Remove the unanswered question from history
        if messages and messages[-1]["role"] == "user":
            messages.pop()
