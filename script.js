// Theme Toggle
const themeBtn = document.getElementById('themeToggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeBtn.innerHTML = '🌙';
}

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    themeBtn.innerHTML = '🌙';
  } else {
    localStorage.setItem('theme', 'light');
    themeBtn.innerHTML = '☀️';
  }
});

// Chapter Contents (Easy-to-understand ZH-TW)
const chapters = {
  0: `
    <h1 style="font-size:2.8rem;margin-bottom:20px;">📐 研究方法論</h1>
    <div class="card">
      <div class="card-icon">📏</div>
      <h2>信度與效度是什麼？</h2>
      <p>信度（Reliability）就像一把尺子——每次量同一樣東西都要一樣準。效度（Validity）則是問：「你量的真的是你想量的東西嗎？」</p>
      <p>舉例：用體重計量身高 → 信度可能高（每次都一樣），但效度很低（根本沒在量正確的東西）。</p>
    </div>
    <!-- Add more cards for Gauge R&R, MSA etc. -->
  `,

  1: `
    <h1 style="font-size:2.8rem;margin-bottom:20px;">📊 資料分析</h1>
    <div class="card">
      <div class="card-icon">📈</div>
      <h2>定量 vs 定性研究</h2>
      <p><strong>定量研究</strong>：用數字說話（問卷、統計）。<br>
         <strong>定性研究</strong>：深入了解「為什麼」（訪談、觀察）。</p>
      <p>最好的方法通常是「混合研究」——數字 + 故事一起用。</p>
    </div>
  `,

  2: `
    <h1 style="font-size:2.8rem;margin-bottom:20px;">🎯 商業分析</h1>
    <div class="card">
      <div class="card-icon">🔍</div>
      <h2>SWOT 分析</h2>
      <p>幫助你看清局勢的經典工具：</p>
      <ul style="margin:20px 0; padding-left:20px;">
        <li><strong>S</strong>trengths（優勢）</li>
        <li><strong>W</strong>eaknesses（弱點）</li>
        <li><strong>O</strong>pportunities（機會）</li>
        <li><strong>T</strong>hreats（威脅）</li>
      </ul>
    </div>
  `,

  3: `
    <h1 style="font-size:2.8rem;margin-bottom:20px;">🧠 思考模型</h1>
    <div class="card">
      <div class="card-icon">🌳</div>
      <h2>第一性原理思考</h2>
      <p>把事情拆到最基本的真理，再從頭往上建構。<br>
         就像 Elon Musk 造火箭：不是改進現有火箭，而是從物理定律重新思考。</p>
    </div>
  `
};

// Navigation
document.querySelectorAll('.chapter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.chapter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const ch = btn.dataset.chapter;
    document.getElementById('contentArea').innerHTML = chapters[ch] || '<p>內容開發中...</p>';

    // Simple progress
    const progress = Math.round(((parseInt(ch) + 1) / 4) * 100);
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('progressPct').textContent = progress + '%';
  });
});

// Initialize first chapter
document.querySelector('.chapter-btn').click();
