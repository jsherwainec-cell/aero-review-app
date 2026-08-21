let allQuestions = [];
let activeQuizQuestions = [];
let currentIndex = 0;
let currentScore = 0;
let answered = false;

// Local Storage Keys
const STATS_KEY = 'aero_pwa_stats';

function getStats() {
  const data = localStorage.getItem(STATS_KEY);
  return data ? JSON.parse(data) : { total: 0, correct: 0, byQuestion: {} };
}

function saveStats(stats) {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

// Load Questions from JSON
async function initApp() {
  try {
    const res = await fetch('./questions.json');
    allQuestions = await res.json();
    updateDashboard();
  } catch (e) {
    console.error('Failed to load questions.json', e);
  }
}

// Render Dashboard
function updateDashboard() {
  const stats = getStats();
  const total = stats.total || 0;
  const correct = stats.correct || 0;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  document.getElementById('overall-pct').innerText = `${pct}%`;
  document.getElementById('overall-progress').style.width = `${pct}%`;
  document.getElementById('stat-total-answered').innerText = total;
  document.getElementById('stat-correct-count').innerText = correct;

  // Focus list count (questions answered incorrectly)
  const missedCount = Object.values(stats.byQuestion || {}).filter(q => q.wrong > q.correct).length;
  document.getElementById('stat-wrong-count').innerText = missedCount;

  // Group by Subject
  const subjects = [...new Set(allQuestions.map(q => q.subject))];
  const listEl = document.getElementById('subject-list');
  listEl.innerHTML = '';

  subjects.forEach(sub => {
    const subQuestions = allQuestions.filter(q => q.subject === sub);
    let subTotal = 0;
    let subCorrect = 0;

    subQuestions.forEach(q => {
      const qStat = stats.byQuestion[q.id];
      if (qStat) {
        subTotal += (qStat.correct + qStat.wrong);
        subCorrect += qStat.correct;
      }
    });

    const subPct = subTotal > 0 ? Math.round((subCorrect / subTotal) * 100) : 0;

    const row = document.createElement('div');
    row.className = 'bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80 flex items-center justify-between cursor-pointer hover:border-blue-500/50 transition';
    row.onclick = () => startQuickQuiz(sub);
    row.innerHTML = `
      <div class="flex-1 mr-4">
        <div class="flex justify-between items-center mb-1 text-xs">
          <span class="font-semibold text-slate-200">${sub}</span>
          <span class="text-slate-400 font-mono">${subPct}%</span>
        </div>
        <div class="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
          <div class="bg-blue-500 h-full rounded-full" style="width: ${subPct}%"></div>
        </div>
      </div>
      <button class="text-xs bg-slate-700/60 hover:bg-blue-600 text-slate-200 px-3 py-1.5 rounded-lg font-medium">Practice</button>
    `;
    listEl.appendChild(row);
  });

  lucide.createIcons();
}

// Start Quiz by Subject
function startQuickQuiz(subject) {
  if (subject === 'all') {
    activeQuizQuestions = [...allQuestions].sort(() => 0.5 - Math.random());
  } else {
    activeQuizQuestions = allQuestions.filter(q => q.subject === subject).sort(() => 0.5 - Math.random());
  }
  if (activeQuizQuestions.length === 0) return alert('No questions available in this category.');
  
  currentIndex = 0;
  currentScore = 0;
  switchView('quiz');
  renderQuestion();
}

// Start Weak Spot Drill
function startWeakDrill() {
  const stats = getStats();
  const weakQuestions = allQuestions.filter(q => {
    const s = stats.byQuestion[q.id];
    return s && s.wrong > s.correct;
  });

  if (weakQuestions.length === 0) {
    alert('Great job! No weak questions logged yet. Take a regular mock test first.');
    return;
  }

  activeQuizQuestions = weakQuestions.sort(() => 0.5 - Math.random());
  currentIndex = 0;
  currentScore = 0;
  switchView('quiz');
  renderQuestion();
}

// Render Single Question
function renderQuestion() {
  answered = false;
  const q = activeQuizQuestions[currentIndex];
  document.getElementById('quiz-subject-tag').innerText = q.subject;
  document.getElementById('quiz-progress-text').innerText = `Question ${currentIndex + 1} / ${activeQuizQuestions.length}`;
  document.getElementById('question-text').innerText = q.question;
  document.getElementById('explanation-box').classList.add('hidden');
  document.getElementById('next-btn').classList.add('hidden');

  const container = document.getElementById('options-container');
  container.innerHTML = '';

  q.options.forEach(opt => {
    const optLetter = opt.trim().charAt(0).toLowerCase();
    const btn = document.createElement('button');
    btn.className = 'w-full text-left p-3.5 rounded-xl border border-slate-700 bg-slate-800/90 hover:bg-slate-700/60 text-xs font-medium text-slate-200 transition';
    btn.innerText = opt;
    btn.onclick = () => selectOption(optLetter, btn);
    container.appendChild(btn);
  });
}

// Handle Answer Selection
function selectOption(selectedLetter, btnElement) {
  if (answered) return;
  answered = true;

  const q = activeQuizQuestions[currentIndex];
  const isCorrect = (selectedLetter === q.correct_answer.toLowerCase());
  const stats = getStats();

  if (!stats.byQuestion[q.id]) {
    stats.byQuestion[q.id] = { correct: 0, wrong: 0 };
  }

  stats.total += 1;
  if (isCorrect) {
    currentScore += 1;
    stats.correct += 1;
    stats.byQuestion[q.id].correct += 1;
    btnElement.classList.add('bg-emerald-600', 'border-emerald-400', 'text-white');
  } else {
    stats.byQuestion[q.id].wrong += 1;
    btnElement.classList.add('bg-rose-600', 'border-rose-400', 'text-white');
    
    // Highlight correct answer
    const container = document.getElementById('options-container');
    Array.from(container.children).forEach(child => {
      if (child.innerText.trim().charAt(0).toLowerCase() === q.correct_answer.toLowerCase()) {
        child.classList.add('bg-emerald-600/60', 'border-emerald-400', 'text-white');
      }
    });
  }

  saveStats(stats);

  if (q.explanation) {
    document.getElementById('explanation-text').innerText = q.explanation;
    document.getElementById('explanation-box').classList.remove('hidden');
  }

  document.getElementById('next-btn').classList.remove('hidden');
  lucide.createIcons();
}

function nextQuestion() {
  if (currentIndex + 1 < activeQuizQuestions.length) {
    currentIndex += 1;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const pct = Math.round((currentScore / activeQuizQuestions.length) * 100);
  document.getElementById('session-score').innerText = `${pct}%`;
  document.getElementById('session-detail').innerText = `You scored ${currentScore} out of ${activeQuizQuestions.length} questions correctly.`;
  document.getElementById('session-summary-text').innerText = pct >= 75 ? 'Passed — Above PRC board benchmark.' : 'Needs review — Keep practicing weak areas.';
  switchView('results');
}

function quitQuiz() {
  if (confirm('Are you sure you want to quit this session?')) {
    switchView('dashboard');
    updateDashboard();
  }
}

function switchView(viewName) {
  document.getElementById('view-dashboard').classList.add('hidden');
  document.getElementById('view-quiz').classList.add('hidden');
  document.getElementById('view-results').classList.add('hidden');

  if (viewName === 'dashboard') {
    document.getElementById('view-dashboard').classList.remove('hidden');
    updateDashboard();
  } else if (viewName === 'quiz') {
    document.getElementById('view-quiz').classList.remove('hidden');
  } else if (viewName === 'results') {
    document.getElementById('view-results').classList.remove('hidden');
  }
}

function clearHistoryConfirm() {
  if (confirm('Reset all test history and mastery statistics?')) {
    localStorage.removeItem(STATS_KEY);
    updateDashboard();
  }
}

// Service Worker Registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW registration failed', err));
}

window.onload = initApp;
