## Question Format
Questions are stored in `data/questions.json` as an array of objects. Each question uses:
- id (string)
- topic (string)
- question (string)
- options (array of strings)
- answerIndex (number, 0-based)
- explanation (string)

Example:
{
  "id": "Q1",
  "topic": "Continuous Integration",
  "question": "What is the primary goal of CI?",
  "options": ["A", "B", "C", "D"],
  "answerIndex": 1,
  "explanation": "CI integrates changes frequently to detect issues early."
}
