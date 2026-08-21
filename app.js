// Register Service Worker for offline PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(console.error);
}

let allQuestions = window.ALL_AELE_QUESTIONS || [];
let activeQuizQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = {};
let quizTimerInterval = null;
let secondsElapsed = 0;
let instantFeedbackMode = true;

const views = {
  dashboard: document.getElementById('view-dashboard'),
  quiz: document.getElementById('view-quiz'),
  results: document.getElementById('view-results')
};

function init() {
  allQuestions = window.ALL_AELE_QUESTIONS || [];
  updateStatsDashboard();
  if (window.lucide) lucide.createIcons();
}

// Fisher-Yates Shuffle for true non-repeating randomness
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function showView(viewName) {
  Object.keys(views).forEach(v => {
    if (views[v]) views[v].classList.add('hidden');
  });
  if (views[viewName]) views[viewName].classList.remove('hidden');
  window.scrollTo(0, 0);
  if (window.lucide) lucide.createIcons();
}

// Dynamic 50-Question Sub-Sampler
function startSession(subjectFilter = 'ALL', count = 50, weakOnly = false) {
  let pool = allQuestions;

  if (subjectFilter !== 'ALL') {
    pool = pool.filter(q => q.subject.toLowerCase() === subjectFilter.toLowerCase());
  }

  if (weakOnly) {
    const wrongIds = getWrongQuestionsList();
    pool = pool.filter(q => wrongIds.includes(q.id));
    if (pool.length === 0) {
      alert("No recorded weak questions yet! Complete a standard session first.");
      return;
    }
  }

  if (pool.length === 0) {
    alert("No questions available for this subject.");
    return;
  }

  // Randomize full pool and pull 50 questions
  const randomized = shuffleArray(pool);
  activeQuizQuestions = randomized.slice(0, Math.min(count, randomized.length));

  currentQuestionIndex = 0;
  userAnswers = {};
  secondsElapsed = 0;

  document.getElementById('quiz-subject-title').innerText = subjectFilter === 'ALL' ? 'Full Mock Board Exam' : subjectFilter;
  document.getElementById('quiz-total-count').innerText = activeQuizQuestions.length;

  startTimer();
  renderQuestion();
  showView('quiz');
}

function startTimer() {
  clearInterval(quizTimerInterval);
  const timerEl = document.getElementById('quiz-timer');
  quizTimerInterval = setInterval(() => {
    secondsElapsed++;
    const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
    const secs = String(secondsElapsed % 60).padStart(2, '0');
    if (timerEl) timerEl.innerText = `${mins}:${secs}`;
  }, 1000);
}

function renderQuestion() {
  const q = activeQuizQuestions[currentQuestionIndex];
  document.getElementById('quiz-current-num').innerText = currentQuestionIndex + 1;
  document.getElementById('quiz-progress-bar').style.width = `${((currentQuestionIndex + 1) / activeQuizQuestions.length) * 100}%`;
  
  document.getElementById('question-category').innerText = `${q.subject} • ${q.topic || 'General'}`;
  document.getElementById('question-text').innerText = q.question;

  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  const selectedAnswer = userAnswers[q.id];

  q.options.forEach(opt => {
    const letter = opt.trim().charAt(0);
    const btn = document.createElement('button');
    btn.className = "w-full text-left p-4 rounded-xl border border-slate-700 bg-slate-800/80 hover:border-blue-500 transition duration-150 flex items-start gap-3 text-slate-200";

    if (selectedAnswer) {
      if (letter === q.correct_answer) {
        btn.className += " border-emerald-500 bg-emerald-950/40 text-emerald-300 font-semibold";
      } else if (selectedAnswer === letter) {
        btn.className += " border-rose-500 bg-rose-950/40 text-rose-300 font-semibold";
      } else {
        btn.className += " opacity-40";
      }
    }

    btn.innerHTML = `<span class="px-2.5 py-1 rounded-lg bg-slate-700 text-xs font-bold">${letter}</span> <span class="flex-1 text-sm md:text-base">${opt.substring(2).trim()}</span>`;
    btn.onclick = () => selectOption(q.id, letter);
    optionsContainer.appendChild(btn);
  });

  const expBox = document.getElementById('explanation-box');
  if (selectedAnswer && instantFeedbackMode) {
    expBox.classList.remove('hidden');
    document.getElementById('explanation-text').innerHTML = `
      <div class="font-bold text-sm mb-1 ${selectedAnswer === q.correct_answer ? 'text-emerald-400' : 'text-rose-400'}">
        ${selectedAnswer === q.correct_answer ? '✓ Correct Answer (' + q.correct_answer + ')' : '✗ Incorrect (Correct: ' + q.correct_answer + ')'}
      </div>
      <p class="text-xs md:text-sm text-slate-300">${q.explanation || 'Refer to standard AELE board review reference.'}</p>
    `;
  } else {
    expBox.classList.add('hidden');
  }

  document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
  document.getElementById('next-btn').innerText = currentQuestionIndex === activeQuizQuestions.length - 1 ? 'Finish Exam' : 'Next Question';
}

function selectOption(qId, letter) {
  if (userAnswers[qId]) return;
  userAnswers[qId] = letter;
  renderQuestion();
}

function nextQuestion() {
  if (currentQuestionIndex < activeQuizQuestions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

function finishQuiz() {
  clearInterval(quizTimerInterval);
  let correctCount = 0;
  const wrongIds = [];

  activeQuizQuestions.forEach(q => {
    if (userAnswers[q.id] === q.correct_answer) {
      correctCount++;
    } else {
      wrongIds.push(q.id);
    }
  });

  const scorePercent = Math.round((correctCount / activeQuizQuestions.length) * 100);

  const sessionData = {
    date: new Date().toISOString(),
    subject: document.getElementById('quiz-subject-title').innerText,
    total: activeQuizQuestions.length,
    score: correctCount,
    percent: scorePercent,
    durationSeconds: secondsElapsed,
    wrongQuestions: wrongIds
  };

  saveSessionLog(sessionData);

  document.getElementById('res-score-badge').innerText = `${scorePercent}%`;
  document.getElementById('res-score-detail').innerText = `${correctCount} / ${activeQuizQuestions.length} Correct`;
  document.getElementById('res-time').innerText = document.getElementById('quiz-timer').innerText;

  updateStatsDashboard();
  showView('results');
}

function saveSessionLog(session) {
  const history = JSON.parse(localStorage.getItem('aele_history') || '[]');
  history.unshift(session);
  localStorage.setItem('aele_history', JSON.stringify(history.slice(0, 50)));
}

function getWrongQuestionsList() {
  const history = JSON.parse(localStorage.getItem('aele_history') || '[]');
  const wrongSet = new Set();
  history.forEach(h => (h.wrongQuestions || []).forEach(id => wrongSet.add(id)));
  return Array.from(wrongSet);
}

function updateStatsDashboard() {
  const history = JSON.parse(localStorage.getItem('aele_history') || '[]');
  const totalEl = document.getElementById('stat-total-sessions');
  const avgEl = document.getElementById('stat-avg-score');

  if (totalEl) totalEl.innerText = history.length;
  
  if (history.length === 0) {
    if (avgEl) avgEl.innerText = '0%';
    return;
  }

  const avg = Math.round(history.reduce((acc, cur) => acc + cur.percent, 0) / history.length);
  if (avgEl) avgEl.innerText = `${avg}%`;

  const histContainer = document.getElementById('recent-history-list');
  if (histContainer && history.length > 0) {
    histContainer.innerHTML = history.slice(0, 5).map(h => `
      <div class="flex items-center justify-between p-3 bg-slate-800/60 rounded-xl border border-slate-700/50">
        <div>
          <div class="font-semibold text-sm text-slate-200">${h.subject}</div>
          <div class="text-xs text-slate-400">${new Date(h.date).toLocaleDateString()} • ${h.total} Questions</div>
        </div>
        <div class="text-right">
          <span class="font-bold text-sm ${h.percent >= 75 ? 'text-emerald-400' : 'text-amber-400'}">${h.percent}%</span>
        </div>
      </div>
    `).join('');
  }
}

window.addEventListener('DOMContentLoaded', init);