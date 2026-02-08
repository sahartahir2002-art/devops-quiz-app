let questions = [];
let currentQuestionIndex = 0;

fetch('data/questions.json')
  .then(response => response.json())
  .then(data => {
    questions = data;
    showTopics();
  });

function showTopics() {
  const topics = [...new Set(questions.map(q => q.topic))];
  const topicDiv = document.getElementById('topic-selection');
  topics.forEach(topic => {
    const btn = document.createElement('button');
    btn.textContent = topic;
    btn.onclick = () => startQuiz(topic);
    topicDiv.appendChild(btn);
  });
}

function startQuiz(topic) {
  currentQuestionIndex = 0;
  const filtered = questions.filter(q => q.topic === topic);
  runQuiz(filtered);
}

function runQuiz(filteredQuestions) {
  const container = document.getElementById('quiz-container');
  container.innerHTML = '';
  const q = filteredQuestions[currentQuestionIndex];
  const questionEl = document.createElement('div');
  questionEl.className = 'question';
  questionEl.textContent = q.question;
  container.appendChild(questionEl);

  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'options';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i, q);
    optionsDiv.appendChild(btn);
  });
  container.appendChild(optionsDiv);
}

function checkAnswer(selectedIndex, q) {
  const feedback = document.createElement('div');
  feedback.className = 'feedback';
  if (selectedIndex === q.answerIndex) {
    feedback.textContent = "✅ Correct! " + q.explanation;
  } else {
    feedback.textContent = "❌ Incorrect. " + q.explanation;
  }
  document.getElementById('quiz-container').appendChild(feedback);
}
