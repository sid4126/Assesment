// ╔══════════════════════════════════════════════╗
// ║  REPLACE THESE 5 VALUES WITH YOUR OWN KEYS  ║
// ╚══════════════════════════════════════════════╝
const SUPABASE_URL      = 'https://xqmdxajbsfcltqwaxhqo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxbWR4YWpic2ZjbHRxd2F4aHFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyMzcxNDYsImV4cCI6MjA4ODgxMzE0Nn0.fZKqPiyy5WsWL9Ok2FEKW6Pv7swG8kazoeXwsmU9-Q8';
const EJS_PUBLIC_KEY    = 'QntSgT00bmtFEmpiw';
const EJS_SERVICE_ID    = 'yahoo_mail';
const EJS_TEMPLATE_ID   = 'template_84uz0iy';
// ╚══════════════════════════════════════════════╝

// ── Question Bank (70 questions) ────────────────────────────────────────────
const Qs = [
  {q:"At a social gathering, you tend to:",a:["Seek out and meet many people","Spend time with a few close friends"],dim:"EI",v:[1,-1],s:"Social Style"},
  {q:"You feel most energized when:",a:["Surrounded by people and activity","Alone or with one or two companions"],dim:"EI",v:[1,-1],s:"Social Style"},
  {q:"When you have free time, you prefer to:",a:["Call up friends and go out","Enjoy quiet time at home"],dim:"EI",v:[1,-1],s:"Social Style"},
  {q:"In meetings, you tend to:",a:["Speak up readily and share ideas","Think things through before speaking"],dim:"EI",v:[1,-1],s:"Social Style"},
  {q:"After a demanding week, you recharge by:",a:["Going out and socializing","Spending time alone or at home"],dim:"EI",v:[1,-1],s:"Social Style"},
  {q:"You are generally:",a:["Easy to get to know","Private and reserved at first"],dim:"EI",v:[1,-1],s:"Social Style"},
  {q:"When working on a project, you prefer:",a:["Collaborating with a team","Working independently"],dim:"EI",v:[1,-1],s:"Social Style"},
  {q:"You prefer environments that are:",a:["Active and stimulating","Calm and focused"],dim:"EI",v:[1,-1],s:"Social Style"},
  {q:"When meeting new people, you:",a:["Introduce yourself confidently","Wait to be introduced"],dim:"EI",v:[1,-1],s:"Social Style"},
  {q:"Your communication style is:",a:["Expressive and outgoing","Thoughtful and selective"],dim:"EI",v:[1,-1],s:"Social Style"},
  {q:"You tend to focus more on:",a:["The present moment and concrete facts","Future possibilities and patterns"],dim:"SN",v:[1,-1],s:"Information Processing"},
  {q:"When solving a problem, you prefer to:",a:["Use proven methods that work","Explore new and innovative approaches"],dim:"SN",v:[1,-1],s:"Information Processing"},
  {q:"You trust more:",a:["Direct experience and observation","Hunches and theoretical reasoning"],dim:"SN",v:[1,-1],s:"Information Processing"},
  {q:"Your work style is more:",a:["Practical and detail-oriented","Conceptual and big-picture oriented"],dim:"SN",v:[1,-1],s:"Information Processing"},
  {q:"Instructions are best when they are:",a:["Step-by-step and specific","General and leave room for interpretation"],dim:"SN",v:[1,-1],s:"Information Processing"},
  {q:"In conversation, you prefer discussing:",a:["Real events and concrete experiences","Ideas, theories, and possibilities"],dim:"SN",v:[1,-1],s:"Information Processing"},
  {q:"You tend to be:",a:["Realistic and down-to-earth","Imaginative and visionary"],dim:"SN",v:[1,-1],s:"Information Processing"},
  {q:"When reading, you prefer:",a:["Factual, informational content","Fiction or abstract, theoretical content"],dim:"SN",v:[1,-1],s:"Information Processing"},
  {q:"You pay more attention to:",a:["Details and specifics","The overall picture and context"],dim:"SN",v:[1,-1],s:"Information Processing"},
  {q:"You are more comfortable with:",a:["What is certain and tangible","What might be possible or theoretical"],dim:"SN",v:[1,-1],s:"Information Processing"},
  {q:"When making decisions, you rely more on:",a:["Logic and objective analysis","Personal values and how others are affected"],dim:"TF",v:[1,-1],s:"Decision Making"},
  {q:"It is more important to be:",a:["Truthful and fair, even if harsh","Tactful and considerate of feelings"],dim:"TF",v:[1,-1],s:"Decision Making"},
  {q:"When someone shares a problem, you tend to:",a:["Offer solutions and logical analysis","Offer empathy and emotional support"],dim:"TF",v:[1,-1],s:"Decision Making"},
  {q:"In disagreements, you are more likely to:",a:["Argue your position based on facts","Seek harmony and accommodate others"],dim:"TF",v:[1,-1],s:"Decision Making"},
  {q:"You are seen by others as more:",a:["Analytical and firm","Warm and empathetic"],dim:"TF",v:[1,-1],s:"Decision Making"},
  {q:"When evaluating options, you focus on:",a:["Pros and cons objectively","Impact on people and relationships"],dim:"TF",v:[1,-1],s:"Decision Making"},
  {q:"You value more in a workplace:",a:["Competence and efficiency","Collaboration and morale"],dim:"TF",v:[1,-1],s:"Decision Making"},
  {q:"When criticized, you first consider:",a:["Whether the criticism is logically valid","How the criticism makes you feel"],dim:"TF",v:[1,-1],s:"Decision Making"},
  {q:"A good decision is one that:",a:["Is objectively correct and well-reasoned","Feels right and considers everyone's needs"],dim:"TF",v:[1,-1],s:"Decision Making"},
  {q:"You are more persuaded by:",a:["A well-constructed argument","An appeal to values or emotions"],dim:"TF",v:[1,-1],s:"Decision Making"},
  {q:"You prefer your life to be:",a:["Planned, organized, and structured","Flexible, spontaneous, and open-ended"],dim:"JP",v:[1,-1],s:"Lifestyle"},
  {q:"When working on a project, you prefer to:",a:["Plan in advance and follow a schedule","Adapt as you go and stay flexible"],dim:"JP",v:[1,-1],s:"Lifestyle"},
  {q:"Deadlines are:",a:["Taken seriously and respected","Somewhat flexible guidelines"],dim:"JP",v:[1,-1],s:"Lifestyle"},
  {q:"Your workspace tends to be:",a:["Organized and tidy","Cluttered but you know where things are"],dim:"JP",v:[1,-1],s:"Lifestyle"},
  {q:"You prefer to:",a:["Make decisions and move on","Keep your options open as long as possible"],dim:"JP",v:[1,-1],s:"Lifestyle"},
  {q:"Your idea of a good vacation is:",a:["A carefully planned itinerary","A loose plan where you can be spontaneous"],dim:"JP",v:[1,-1],s:"Lifestyle"},
  {q:"Before starting a task, you:",a:["Make a to-do list or plan first","Jump in and figure it out as you go"],dim:"JP",v:[1,-1],s:"Lifestyle"},
  {q:"Surprises are:",a:["Unsettling and disruptive","Exciting and fun"],dim:"JP",v:[-1,1],s:"Lifestyle"},
  {q:"You feel most comfortable when:",a:["Things are settled and decided","Things are open and still possible"],dim:"JP",v:[1,-1],s:"Lifestyle"},
  {q:"You prefer to:",a:["Complete one project before starting another","Work on multiple things at once"],dim:"JP",v:[1,-1],s:"Lifestyle"},
  {q:"You are more drawn to:",a:["Practical application","Theoretical concepts"],dim:"SN",v:[1,-1],s:"Information Processing"},
  {q:"You express yourself better:",a:["In writing or after thinking","Out loud in real time"],dim:"EI",v:[-1,1],s:"Social Style"},
  {q:"In a crisis, you focus on:",a:["Immediate, practical steps","Long-term impact and meaning"],dim:"SN",v:[1,-1],s:"Information Processing"},
  {q:"You prefer feedback to be:",a:["Direct and straightforward","Delivered with sensitivity"],dim:"TF",v:[1,-1],s:"Decision Making"},
  {q:"You find it easier to:",a:["Adapt to changing circumstances","Stick to a routine"],dim:"JP",v:[-1,1],s:"Lifestyle"},
  {q:"When learning something new:",a:["You prefer demonstrations and examples","You prefer theories and principles"],dim:"SN",v:[1,-1],s:"Information Processing"},
  {q:"People close to you see you as:",a:["Consistent and reliable","Creative and unpredictable"],dim:"JP",v:[1,-1],s:"Lifestyle"},
  {q:"In arguments, you often:",a:["Seek the logical resolution","Try to understand everyone's feelings"],dim:"TF",v:[1,-1],s:"Decision Making"},
  {q:"When given a task, you prefer:",a:["Specific instructions","Freedom to do it your way"],dim:"SN",v:[1,-1],s:"Information Processing"},
  {q:"You find small talk:",a:["Easy and enjoyable","Awkward or draining"],dim:"EI",v:[1,-1],s:"Social Style"},
  {q:"Your strengths lie more in:",a:["Execution and follow-through","Vision and idea generation"],dim:"SN",v:[1,-1],s:"Information Processing"},
  {q:"When you disagree with a group:",a:["You voice your disagreement clearly","You go along to keep the peace"],dim:"TF",v:[1,-1],s:"Decision Making"},
  {q:"You tend to make important decisions:",a:["Systematically and methodically","Based on intuition and gut feeling"],dim:"SN",v:[1,-1],s:"Information Processing"},
  {q:"You are energized more by:",a:["Finishing tasks","Starting new projects"],dim:"JP",v:[1,-1],s:"Lifestyle"},
  {q:"In relationships, you value:",a:["Honesty and directness","Sensitivity and consideration"],dim:"TF",v:[1,-1],s:"Decision Making"},
  {q:"You prefer jobs that:",a:["Have clear outcomes","Offer variety and change"],dim:"JP",v:[1,-1],s:"Lifestyle"},
  {q:"You are more comfortable:",a:["In familiar, structured environments","In new, varied situations"],dim:"SN",v:[1,-1],s:"Information Processing"},
  {q:"When facing change, you:",a:["Plan carefully to adapt","Embrace it as an opportunity"],dim:"JP",v:[1,-1],s:"Lifestyle"},
  {q:"Others describe you as more:",a:["Grounded and dependable","Imaginative and idealistic"],dim:"SN",v:[1,-1],s:"Information Processing"},
  {q:"You prefer leaders who are:",a:["Decisive and organized","Open-minded and adaptable"],dim:"JP",v:[1,-1],s:"Lifestyle"},
  {q:"When relaxing, you prefer:",a:["Doing something concrete (sport, cooking)","Reading, imagining, or dreaming"],dim:"SN",v:[1,-1],s:"Social Style"},
  {q:"In team settings, your role tends to be:",a:["The implementer who gets things done","The innovator who generates ideas"],dim:"SN",v:[1,-1],s:"Social Style"},
  {q:"You trust more in:",a:["Step-by-step logic","A flash of insight or inspiration"],dim:"TF",v:[1,-1],s:"Decision Making"},
  {q:"You prefer conversations that:",a:["Have a clear purpose or outcome","Wander and explore ideas freely"],dim:"JP",v:[1,-1],s:"Lifestyle"},
  {q:"At your best, you are:",a:["Thorough, reliable, and practical","Visionary, passionate, and innovative"],dim:"SN",v:[1,-1],s:"Information Processing"},
  {q:"When stressed, you tend to:",a:["Seek control and structure","Seek freedom and distraction"],dim:"JP",v:[1,-1],s:"Lifestyle"},
  {q:"You prefer managers who give:",a:["Clear expectations and structure","Autonomy and room for creativity"],dim:"JP",v:[1,-1],s:"Lifestyle"},
  {q:"You make friends:",a:["Easily and with many people","Slowly but deeply"],dim:"EI",v:[1,-1],s:"Social Style"},
  {q:"Your decision-making is more:",a:["Fast and decisive","Slow and deliberate"],dim:"JP",v:[1,-1],s:"Lifestyle"},
  {q:"On a long drive, you prefer to:",a:["Listen to news or podcasts","Daydream and think freely"],dim:"SN",v:[1,-1],s:"Information Processing"},
];

// ── Temperament profiles ─────────────────────────────────────────────────────
const TEMPS = {
  SP:{name:"Artisan",color:"#d97b4a",badge:"Artisan · SP",
    tagline:"The bold improviser who lives fully in the moment.",
    desc:"Artisans are action-oriented, pragmatic, and adaptable. They thrive on freedom and spontaneity, responding to the world with a unique blend of practicality and creativity. At their best, they are outstanding at making things happen — now.",
    strengths:["Highly adaptable and resourceful","Excellent crisis managers","Natural problem-solvers in the moment","Energetic and enthusiastic","Skilled at hands-on execution","Great at reading situations"],
    weaknesses:["Can struggle with long-term planning","May resist authority or structure","Boredom comes easily with routine","Can be impulsive under pressure","May overlook future consequences","Can avoid commitment"],
    careers:["Entrepreneur","Surgeon","Performer","Crisis Manager","Sales Executive","Military Officer"],
    compat:[{t:"Guardian (SJ)",c:"#4a7fc1",r:"Complementary — stability meets agility"},{t:"Rational (NT)",c:"#3eab7e",r:"Stimulating — ideas meet execution"},{t:"Artisan (SP)",c:"#d97b4a",r:"Natural — shared spontaneity"},{t:"Idealist (NF)",c:"#7b6fcc",r:"Growth-oriented — passion meets meaning"}]},
  SJ:{name:"Guardian",color:"#4a7fc1",badge:"Guardian · SJ",
    tagline:"The dependable steward who upholds tradition and order.",
    desc:"Guardians are responsible, hardworking, and loyal. They excel at creating and maintaining structure, ensuring systems run smoothly, and upholding the values of their organizations. They are the bedrock of stability in any team.",
    strengths:["Highly reliable and trustworthy","Excellent organizers and planners","Strong sense of duty and responsibility","Skilled at following through","Attentive to rules and procedure","Build strong community bonds"],
    weaknesses:["Can resist change and innovation","May be overly cautious or rigid","Tend to defer too much to authority","Can struggle with ambiguity","May be overly self-critical","Risk of becoming stuck in routine"],
    careers:["Operations Manager","Accountant","HR Director","Military Officer","Administrator","Healthcare Provider"],
    compat:[{t:"Guardian (SJ)",c:"#4a7fc1",r:"Natural — shared values and structure"},{t:"Artisan (SP)",c:"#d97b4a",r:"Complementary — order meets flexibility"},{t:"Idealist (NF)",c:"#7b6fcc",r:"Growth-oriented — duty meets vision"},{t:"Rational (NT)",c:"#3eab7e",r:"Stimulating — process meets strategy"}]},
  NF:{name:"Idealist",color:"#7b6fcc",badge:"Idealist · NF",
    tagline:"The empathetic visionary searching for deeper meaning.",
    desc:"Idealists are compassionate, insightful, and deeply committed to personal growth and authentic connection. They are driven by a profound desire to make the world a better place and to understand the deeper meaning behind human experience.",
    strengths:["Exceptional empathy and emotional intelligence","Inspiring and motivating leaders","Creative and original thinkers","Skilled at reading people","Strong communicators","Passionate about causes they believe in"],
    weaknesses:["Can be overly idealistic","May struggle with criticism","Prone to taking on others' emotions","Can be indecisive when values conflict","May neglect their own needs","Vulnerable to burnout from giving too much"],
    careers:["Counselor / Therapist","Teacher","Author / Writer","HR Leader","Non-profit Director","Coach"],
    compat:[{t:"Idealist (NF)",c:"#7b6fcc",r:"Natural — shared vision and values"},{t:"Rational (NT)",c:"#3eab7e",r:"Stimulating — intuition meets intellect"},{t:"Guardian (SJ)",c:"#4a7fc1",r:"Complementary — vision meets reliability"},{t:"Artisan (SP)",c:"#d97b4a",r:"Growth-oriented — meaning meets action"}]},
  NT:{name:"Rational",color:"#3eab7e",badge:"Rational · NT",
    tagline:"The strategic architect who pursues mastery and innovation.",
    desc:"Rationals are independent, analytical, and driven by a relentless pursuit of knowledge and competence. They are natural strategists who excel at seeing the big picture, designing systems, and solving complex problems with precision.",
    strengths:["Strategic and long-range thinkers","Highly independent and self-directed","Excellent at systems thinking","Driven to achieve mastery","Objective and incisive analysts","Confident decision-makers"],
    weaknesses:["Can appear arrogant or dismissive","May neglect emotional considerations","Can be overly perfectionistic","Impatient with inefficiency","May struggle with routine tasks","Can alienate others with bluntness"],
    careers:["CEO / Executive","Engineer","Scientist","Strategist","Lawyer","Software Architect"],
    compat:[{t:"Rational (NT)",c:"#3eab7e",r:"Natural — shared intellect and drive"},{t:"Idealist (NF)",c:"#7b6fcc",r:"Stimulating — logic meets intuition"},{t:"Artisan (SP)",c:"#d97b4a",r:"Complementary — strategy meets execution"},{t:"Guardian (SJ)",c:"#4a7fc1",r:"Growth-oriented — vision meets structure"}]}
};

// ── State ────────────────────────────────────────────────────────────────────
let cur = 0;
let answers = new Array(Qs.length).fill(null);
let userInfo = {};

// ── Screen switcher ──────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  el.classList.add('active');
  window.scrollTo(0, 0);
}

// ── User info ────────────────────────────────────────────────────────────────
function submitUserInfo() {
  const name  = document.getElementById('inp-name').value.trim();
  const age   = parseInt(document.getElementById('inp-age').value);
  const email = document.getElementById('inp-email').value.trim();
  const dept  = document.getElementById('inp-dept').value;
  let ok = true;
  const chk = (id, cond) => {
    document.getElementById('fg-' + id).classList.toggle('err', !cond);
    if (!cond) ok = false;
  };
  chk('name',  name.length > 1);
  chk('age',   !isNaN(age) && age >= 13 && age <= 99);
  chk('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  chk('dept',  dept !== '');
  if (!ok) return;
  userInfo = { name, age, email, department: dept };
  showScreen('quiz');
  setTimeout(renderQ, 60);
}

// ── Quiz ─────────────────────────────────────────────────────────────────────
function renderQ() {
  const q = Qs[cur], total = Qs.length;
  document.getElementById('q-num').textContent = cur + 1;
  document.getElementById('q-tot').textContent = total;
  document.getElementById('sec-tag').textContent = 'Question ' + (cur+1) + ' · ' + q.s;
  const pct = Math.round((cur / total) * 100);
  document.getElementById('prog-pct').textContent = pct + '%';
  document.getElementById('prog-fill').style.width = pct + '%';
  const qt = document.getElementById('q-txt');
  qt.style.animation = 'none'; qt.offsetHeight; qt.style.animation = '';
  qt.textContent = q.q;
  const grid = document.getElementById('opts');
  grid.innerHTML = '';
  q.a.forEach((opt, i) => {
    const b = document.createElement('button');
    b.className = 'opt-btn' + (answers[cur] === i ? ' sel' : '');
    b.innerHTML = '<div class="opt-ltr">' + String.fromCharCode(65+i) + '</div><span>' + opt + '</span>';
    b.onclick = () => pick(i);
    grid.appendChild(b);
  });
  document.getElementById('btn-prev').disabled = cur === 0;
  document.getElementById('btn-next').style.display = answers[cur] !== null ? 'inline-flex' : 'none';
}

function pick(i) {
  answers[cur] = i;
  document.querySelectorAll('.opt-btn').forEach((b, idx) => b.classList.toggle('sel', idx === i));
  document.getElementById('btn-next').style.display = 'inline-flex';
  setTimeout(() => { cur < Qs.length - 1 ? (cur++, renderQ()) : finish(); }, 380);
}

function nextQ() { if (answers[cur] === null) return; cur < Qs.length-1 ? (cur++, renderQ()) : finish(); }
function prevQ() { if (cur > 0) { cur--; renderQ(); } }

// ── Scoring ──────────────────────────────────────────────────────────────────
function finish() {
  const sc={EI:0,SN:0,TF:0,JP:0}, cn={EI:0,SN:0,TF:0,JP:0};
  Qs.forEach((q,i) => { if(answers[i]!==null){ sc[q.dim]+=q.v[answers[i]]; cn[q.dim]++; }});
  const pct = d => cn[d]===0 ? 50 : Math.round(((sc[d]/cn[d])+1)/2*100);
  const EI=sc.EI>=0?'E':'I', SN=sc.SN>=0?'S':'N', TF=sc.TF>=0?'T':'F', JP=sc.JP>=0?'J':'P';
  const code  = EI+SN+TF+JP;
  const group = SN==='S'?(JP==='J'?'SJ':'SP'):(TF==='F'?'NF':'NT');
  const dims  = [
    {l1:'Extraversion',l2:'Introversion',pct:pct('EI'),winner:EI,col:'#c9a84c',dim:'EI'},
    {l1:'Sensing',     l2:'Intuition',   pct:pct('SN'),winner:SN,col:'#4a7fc1',dim:'SN'},
    {l1:'Thinking',    l2:'Feeling',     pct:pct('TF'),winner:TF,col:'#7b6fcc',dim:'TF'},
    {l1:'Judging',     l2:'Perceiving',  pct:pct('JP'),winner:JP,col:'#3eab7e',dim:'JP'},
  ];
  renderResults(group, code, dims);
  showScreen('results');
  setTimeout(() => dims.forEach(d => { const el=document.getElementById('bar-'+d.dim); if(el) el.style.width=d.pct+'%'; }), 200);
  saveToSupabase(group, code, dims, sc);
  sendEmail(group, code, dims);
}

// ── Render results ───────────────────────────────────────────────────────────
function renderResults(group, code, dims) {
  const t    = TEMPS[group];
  const cols = ['#c9a84c','#4a7fc1','#7b6fcc','#3eab7e'];
  document.getElementById('sc-grid').innerHTML = dims.map((d,i) => {
    const wp = d.winner===d.l1[0] ? d.pct : 100-d.pct;
    return '<div class="sc-cell"><div class="sc-dim">'+['E/I','S/N','T/F','J/P'][i]+'</div>'
      +'<div class="sc-val" style="color:'+cols[i]+'">'+wp+'%</div>'
      +'<div class="sc-ltr" style="color:'+cols[i]+'">'+d.winner+'</div></div>';
  }).join('');
  document.getElementById('sc-type').textContent = code;
  const badge = document.getElementById('res-badge');
  badge.textContent = t.badge;
  badge.style.cssText = 'background:'+t.color+'22;color:'+t.color+';border:1px solid '+t.color+'44';
  document.getElementById('res-name').textContent = t.name;
  document.getElementById('res-mbti').textContent = code + ' · ' + t.name;
  document.getElementById('res-tag').textContent  = t.tagline;
  document.getElementById('res-desc').textContent = t.desc;
  document.getElementById('dims-bars').innerHTML = dims.map(d =>
    '<div class="dim-row"><div class="dim-lbls">'
    +'<span class="dim-lbl" style="color:'+d.col+'">'+d.l1+' ('+d.pct+'%)</span>'
    +'<span class="dim-lbl" style="color:var(--muted)">'+d.l2+' ('+(100-d.pct)+'%)</span>'
    +'</div><div class="dim-bar"><div class="dim-fill" id="bar-'+d.dim+'" style="width:0%;background:'+d.col+'"></div></div></div>'
  ).join('');
  document.getElementById('sw-grid').innerHTML =
    '<div class="sw-card"><div class="sw-title" style="color:#3eab7e">✦ Strengths</div>'
    +'<ul class="sw-list">'+t.strengths.map(s=>'<li>'+s+'</li>').join('')+'</ul></div>'
    +'<div class="sw-card"><div class="sw-title" style="color:#e07070">⚠ Growth Areas</div>'
    +'<ul class="sw-list">'+t.weaknesses.map(s=>'<li>'+s+'</li>').join('')+'</ul></div>'
    +'<div class="sw-card"><div class="sw-title" style="color:var(--gold)">💼 Career Fit</div>'
    +'<ul class="sw-list">'+t.careers.map(s=>'<li>'+s+'</li>').join('')+'</ul></div>';
  document.getElementById('cp-grid').innerHTML = t.compat.map(c =>
    '<div class="cp-card"><div class="cp-dot" style="background:'+c.c+'"></div>'
    +'<div><div class="cp-name">'+c.t+'</div><div class="cp-rel">'+c.r+'</div></div></div>'
  ).join('');
}

// ── Supabase ─────────────────────────────────────────────────────────────────
async function saveToSupabase(group, code, dims, sc) {
  const dot=document.getElementById('db-dot'), txt=document.getElementById('db-txt');
  dot.className='dot saving'; txt.textContent='Saving to database…';
  if (SUPABASE_URL==='YOUR_SUPABASE_URL') { dot.className='dot'; txt.textContent='DB not configured'; return; }
  try {
    const res = await fetch(SUPABASE_URL+'/rest/v1/assessments', {
      method:'POST',
      headers:{'Content-Type':'application/json','apikey':SUPABASE_ANON_KEY,'Authorization':'Bearer '+SUPABASE_ANON_KEY,'Prefer':'return=minimal'},
      body:JSON.stringify({
        name:userInfo.name, email:userInfo.email, age:userInfo.age, department:userInfo.department,
        temperament:TEMPS[group].name, mbti_code:code,
        score_ei:sc.EI, score_sn:sc.SN, score_tf:sc.TF, score_jp:sc.JP,
        pct_ei:dims[0].pct, pct_sn:dims[1].pct, pct_tf:dims[2].pct, pct_jp:dims[3].pct
      })
    });
    if (!res.ok) throw new Error(await res.text());
    dot.className='dot ok'; txt.textContent='Saved to database ✓';
  } catch(e) {
    dot.className='dot fail'; txt.textContent='DB save failed — see console';
    console.error('Supabase error:', e);
  }
}

// ── EmailJS ──────────────────────────────────────────────────────────────────
async function sendEmail(group, code, dims) {
  const dot=document.getElementById('em-dot'), txt=document.getElementById('em-txt');
  dot.className='dot saving'; txt.textContent='Sending email…';
  if (EJS_PUBLIC_KEY==='YOUR_EMAILJS_PUBLIC_KEY') { dot.className='dot'; txt.textContent='Email not configured'; return; }
  try {
    emailjs.init({ publicKey: EJS_PUBLIC_KEY });
    const t = TEMPS[group];
    const p = i => dims[i].winner===dims[i].l1[0] ? dims[i].pct : 100-dims[i].pct;
    const params = {
      to_email:         userInfo.email,
      user_name:        userInfo.name,
      department:       userInfo.department,
      age:              String(userInfo.age),
      temperament_name: t.name,
      mbti_code:        code,
      tagline:          t.tagline,
      description:      t.desc,
      strengths:        '• ' + t.strengths.join('\n• '),
      weaknesses:       '• ' + t.weaknesses.join('\n• '),
      careers:          t.careers.join(', '),
      score_ei: dims[0].winner + ' — ' + p(0) + '%',
      score_sn: dims[1].winner + ' — ' + p(1) + '%',
      score_tf: dims[2].winner + ' — ' + p(2) + '%',
      score_jp: dims[3].winner + ' — ' + p(3) + '%',
    };
    console.log('EmailJS sending → service:', EJS_SERVICE_ID, '| template:', EJS_TEMPLATE_ID, '| to:', params.to_email);
    const res = await emailjs.send(EJS_SERVICE_ID, EJS_TEMPLATE_ID, params);
    console.log('EmailJS success:', res.status, res.text);
    dot.className='dot ok'; txt.textContent='Email sent to '+userInfo.email+' ✓';
  } catch(e) {
    const msg = e?.text || e?.message || JSON.stringify(e) || 'Unknown error';
    console.error('EmailJS error:', e);
    dot.className='dot fail';
    txt.textContent='Email failed: ' + msg;
  }
}

// ── Retake ───────────────────────────────────────────────────────────────────
function retake() {
  cur=0; answers=new Array(Qs.length).fill(null); userInfo={};
  ['inp-name','inp-email','inp-age'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  document.getElementById('inp-dept').selectedIndex=0;
  ['fg-name','fg-age','fg-email','fg-dept'].forEach(id=>document.getElementById(id).classList.remove('err'));
  showScreen('landing');
}

// ── Wire up all buttons via JS (no inline onclick) ───────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('begin-btn').addEventListener('click', () => showScreen('userinfo'));
  document.getElementById('continue-btn').addEventListener('click', submitUserInfo);
  document.getElementById('btn-prev').addEventListener('click', prevQ);
  document.getElementById('btn-next').addEventListener('click', nextQ);
  document.getElementById('retake-btn').addEventListener('click', retake);

  // Show banner only if keys not filled in
  const notReady = SUPABASE_URL==='YOUR_SUPABASE_URL' || EJS_PUBLIC_KEY==='YOUR_EMAILJS_PUBLIC_KEY';
  if (notReady) document.body.classList.add('has-banner');
  else document.getElementById('cfg-banner').style.display='none';
});
