/* ==========================================================================
   📊 Question Database & Scoring Configurations (IPIP-50)
   ========================================================================== */

const QUESTIONS = [
    { id: 1, trait: 'E', sign: '+', textCN: '我是社交場合的靈魂人物。', textEN: 'Am the life of the party.' },
    { id: 2, trait: 'A', sign: '-', textCN: '我對他人的處境不太在乎。', textEN: 'Feel little concern for others.' },
    { id: 3, trait: 'C', sign: '+', textCN: '我總是做好充分準備。', textEN: 'Am always prepared.' },
    { id: 4, trait: 'S', sign: '-', textCN: '我很容易感到焦慮和壓力。', textEN: 'Get stressed out easily.' },
    { id: 5, trait: 'O', sign: '+', textCN: '我擁有豐富的詞彙量與表達能力。', textEN: 'Have a rich vocabulary.' },
    { id: 6, trait: 'E', sign: '-', textCN: '我平時說話不多，比較安靜。', textEN: "Don't talk a lot." },
    { id: 7, trait: 'A', sign: '+', textCN: '我對人與人之間的相處很感興趣。', textEN: 'Am interested in people.' },
    { id: 8, trait: 'C', sign: '-', textCN: '我常把自己的東西隨處亂放。', textEN: 'Leave my belongings around.' },
    { id: 9, trait: 'S', sign: '+', textCN: '大多數時候我都很放鬆。', textEN: 'Am relaxed most of the time.' },
    { id: 10, trait: 'O', sign: '-', textCN: '我覺得理解抽象概念有些困難。', textEN: 'Have difficulty understanding abstract ideas.' },
    { id: 11, trait: 'E', sign: '+', textCN: '在人多的地方我感到很自在。', textEN: 'Feel comfortable around people.' },
    { id: 12, trait: 'A', sign: '-', textCN: '有時我會用言語傷害或侮辱他人。', textEN: 'Insult people.' },
    { id: 13, trait: 'C', sign: '+', textCN: '我非常注重工作細節。', textEN: 'Pay attention to details.' },
    { id: 14, trait: 'S', sign: '-', textCN: '我常為各種事情感到憂慮。', textEN: 'Worry about things.' },
    { id: 15, trait: 'O', sign: '+', textCN: '我擁有極其豐富的想像力。', textEN: 'Have a vivid imagination.' },
    { id: 16, trait: 'E', sign: '-', textCN: '我傾向待在角落，不引人注意。', textEN: 'Keep in the background.' },
    { id: 17, trait: 'A', sign: '+', textCN: '我很能同理與體諒他人的感受。', textEN: "Sympathize with others' feelings." },
    { id: 18, trait: 'C', sign: '-', textCN: '我做事經常丟三落四或搞得一團糟。', textEN: 'Make a mess of things.' },
    { id: 19, trait: 'S', sign: '+', textCN: '我很少感到沮喪或憂鬱。', textEN: 'Seldom feel blue.' },
    { id: 20, trait: 'O', sign: '-', textCN: '我對抽象或理論性的想法不感興趣。', textEN: 'Am not interested in abstract ideas.' },
    { id: 21, trait: 'E', sign: '+', textCN: '我常常主動發起對話。', textEN: 'Start conversations.' },
    { id: 22, trait: 'A', sign: '-', textCN: '我對別人的問題和麻煩沒什麼興趣。', textEN: "Am not interested in other people's problems." },
    { id: 23, trait: 'C', sign: '+', textCN: '我會立刻動手處理該做的雜務。', textEN: 'Get chores done right away.' },
    { id: 24, trait: 'S', sign: '-', textCN: '我很容易受到外界的干擾或打擾。', textEN: 'Am easily disturbed.' },
    { id: 25, trait: 'O', sign: '+', textCN: '我經常能想到極佳的創意點子。', textEN: 'Have excellent ideas.' },
    { id: 26, trait: 'E', sign: '-', textCN: '我通常沒什麼特別的話想說。', textEN: 'Have little to say.' },
    { id: 27, trait: 'A', sign: '+', textCN: '我有一顆柔軟、容易心軟的心。', textEN: 'Have a soft heart.' },
    { id: 28, trait: 'C', sign: '-', textCN: '我經常忘記把東西放回原處。', textEN: 'Often forget to put things back in their proper place.' },
    { id: 29, trait: 'S', sign: '-', textCN: '我很容易生氣或感到難過。', textEN: 'Get upset easily.' },
    { id: 30, trait: 'O', sign: '-', textCN: '我認為自己沒有很好的想像力。', textEN: 'Do not have a good imagination.' },
    { id: 31, trait: 'E', sign: '+', textCN: '在聚會上我會和許多不同的人聊天。', textEN: 'Talk to a lot of different people at parties.' },
    { id: 32, trait: 'A', sign: '-', textCN: '我對他人沒有太大的興趣。', textEN: 'Am not really interested in others.' },
    { id: 33, trait: 'C', sign: '+', textCN: '我非常喜歡井井有條的秩序。', textEN: 'Like order.' },
    { id: 34, trait: 'S', sign: '-', textCN: '我的情緒波動非常大。', textEN: 'Change my mood a lot.' },
    { id: 35, trait: 'O', sign: '+', textCN: '我的理解能力與領悟力很強。', textEN: 'Am quick to understand things.' },
    { id: 36, trait: 'E', sign: '-', textCN: '我不喜歡讓自己成為大家關注的焦點。', textEN: "Don't like to draw attention to myself." },
    { id: 37, trait: 'A', sign: '+', textCN: '我願意撥出時間來陪伴或幫助他人。', textEN: 'Take time out for others.' },
    { id: 38, trait: 'C', sign: '-', textCN: '有時我會逃避或推卸自己的責任。', textEN: 'Shirk my duties.' },
    { id: 39, trait: 'S', sign: '-', textCN: '我經常經歷情緒起伏。', textEN: 'Have frequent mood swings.' },
    { id: 40, trait: 'O', sign: '+', textCN: '我喜歡在表達時使用精深或深刻的詞彙。', textEN: 'Use difficult words.' },
    { id: 41, trait: 'E', sign: '+', textCN: '我不介意成為大家注目的焦點。', textEN: "Don't mind being the center of attention." },
    { id: 42, trait: 'A', sign: '+', textCN: '我很能感同身受地體驗到他人的情緒。', textEN: "Feel others' emotions." },
    { id: 43, trait: 'C', sign: '+', textCN: '我習慣遵循制定好的日程表或計劃。', textEN: 'Follow a schedule.' },
    { id: 44, trait: 'S', sign: '-', textCN: '我很容易感到煩躁或被激怒。', textEN: 'Get irritated easily.' },
    { id: 45, trait: 'O', sign: '+', textCN: '我常花時間深思與反省事物。', textEN: 'Spend time reflecting on things.' },
    { id: 46, trait: 'E', sign: '-', textCN: '在陌生人面前我通常比較安靜。', textEN: 'Am quiet around strangers.' },
    { id: 47, trait: 'A', sign: '+', textCN: '我有能力讓身邊的人感到輕鬆自在。', textEN: 'Make people feel at ease.' },
    { id: 48, trait: 'C', sign: '+', textCN: '我對自己的工作要求極高、追求完美。', textEN: 'Am exacting in my work.' },
    { id: 49, trait: 'S', sign: '-', textCN: '我經常感到有些悶悶不樂或憂鬱。', textEN: 'Often feel blue.' },
    { id: 50, trait: 'O', sign: '+', textCN: '我的腦海中總是充滿了各種新奇的想法。', textEN: 'Am full of ideas.' }
];

// Selected indices for Lite Mode (15 Questions: 3 per dimension, balanced signs)
const LITE_INDICES = [
    14, 19, 49, // O: 15(O+), 20(O-), 50(O+)
    2, 7, 47,   // C: 3(C+), 8(C-), 48(C+)
    0, 5, 20,   // E: 1(E+), 6(E-), 21(E+)
    1, 16, 46,  // A: 2(A-), 17(A+), 47(A+)
    3, 8, 48    // S: 4(S-), 9(S+), 49(S-)
];

/* ==========================================================================
   🎭 Archetype Descriptions & Theme Mapping
   ========================================================================== */

const ARCHETYPES = {
    'O': {
        titleCN: '願景家',
        titleEN: 'THE VISIONARY',
        taglineCN: '充滿創造力與無限好奇心的精神探索者。',
        taglineEN: 'A spiritual explorer filled with creativity and endless curiosity.',
        themeColor: 'hsl(265, 80%, 65%)',
        themeColorGlow: 'rgba(153, 102, 255, 0.15)',
        themeColorBorder: 'rgba(153, 102, 255, 0.3)',
        svg: `<circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="2 2" />
              <path d="M50 20 L50 80 M20 50 L80 50" stroke="currentColor" stroke-width="1.5" />
              <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.3"/>
              <polygon points="50,38 54,50 62,50 55,56 58,68 50,60 42,68 45,56 38,50 46,50" fill="currentColor"/>`,
        descCN: '您在大五人格測評中展現出了卓越的「開放性」。您對思想、美學與新奇體驗抱持高度的熱忱。比起繁瑣的常規，您更著迷於抽象的概念、深刻的思考和藝術性的探尋。',
        descEN: 'You scored exceptionally high in Openness. You possess a strong passion for ideas, aesthetics, and novel experiences. Rather than repetitive routines, you are drawn to abstract concepts, profound introspection, and artistic pursuits.',
        careerCN: '適合需要高度創新與敏銳洞察力的領域，如：策略規劃、創意研發、文學創作、互動藝術設計或科學假說研究。',
        careerEN: 'Excellently suited for fields requiring innovation and insight, such as strategic planning, creative R&D, creative writing, interactive design, or scientific research.',
        lifeCN: '定期挑戰打破生活常規，每週做一件從未做過的事（例如學習一項新手藝，或聽一場陌生主題的講座），這能幫你源源不絕地補充電能。',
        lifeEN: 'Regularly break routines. Do one completely new thing every week (e.g., learn a new craft, or attend a lecture on an unfamiliar topic) to replenish your intellectual energy.',
        styleCN: '推薦嘗試「創意寫作（Creative Writing）」、組裝複雜的樂高模型或密室逃脫解謎，讓你的想像力得以飛馳。',
        styleEN: 'Try creative writing, constructing complex model sets, or diving into escape rooms to let your boundless imagination run free.'
    },
    'C': {
        titleCN: '策略家',
        titleEN: 'THE STRATEGIST',
        taglineCN: '具備非凡執行力、專注自律的秩序建立者。',
        taglineEN: 'A self-disciplined builder of order with extraordinary execution.',
        themeColor: 'hsl(205, 85%, 60%)',
        themeColorGlow: 'rgba(54, 162, 235, 0.15)',
        themeColorBorder: 'rgba(54, 162, 235, 0.3)',
        svg: `<rect x="25" y="25" width="50" height="50" rx="10" ry="10" fill="none" stroke="currentColor" stroke-width="2" />
              <line x1="25" y1="50" x2="75" y2="50" stroke="currentColor" stroke-width="1.5" />
              <line x1="50" y1="25" x2="50" y2="75" stroke="currentColor" stroke-width="1.5" />
              <circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" stroke-width="2"/>
              <circle cx="50" cy="50" r="4" fill="currentColor"/>`,
        descCN: '您在測評中表現出了非凡的「盡責性」。您做事深謀遠慮、高度自律且井然有序。您能夠抵抗即時享樂的誘惑，為了實現長期規劃而堅持不懈，是同伴眼中最值得信賴的基石。',
        descEN: 'You scored exceptionally high in Conscientiousness. Highly organized, reliable, and goal-oriented, you possess strong self-discipline. You easily resist instant gratification to persist toward long-term goals.',
        careerCN: '適合需要精密管理與嚴格標準的職責，如：軟體系統架構、項目管理專家、數據科學分析師、金融風控或醫學精密工作。',
        careerEN: 'Ideal for roles demanding rigorous standards and systematic execution, such as systems architecture, project management, data science, financial risk analysis, or surgery.',
        lifeCN: '在追求高效率與完美計畫的同時，也請練習「給自己留白」。容忍生活中偶爾發生的隨機意外與無序，這能極大釋放你的隱性焦慮。',
        lifeEN: 'While striving for high efficiency, practice scheduling "blank time." Learn to accept occasional random incidents and chaos to release underlying tension.',
        styleCN: '推薦嘗試「結構化健身（Structured Calisthenics）」、嚴謹的越野賽跑或規律的手工藝雕刻，這與你嚴謹自律的特質完美契合。',
        styleEN: 'Try structured calisthenics routines, rigorous trail running, or precise wood carving, which perfectly align with your systematic nature.'
    },
    'E': {
        titleCN: '連結者',
        titleEN: 'THE CONNECTOR',
        taglineCN: '充滿熱情與行動力、能點燃全場的能量核心。',
        taglineEN: 'The core of energy that ignites the room with passion and action.',
        themeColor: 'hsl(25, 95%, 55%)',
        themeColorGlow: 'rgba(255, 159, 64, 0.15)',
        themeColorBorder: 'rgba(255, 159, 64, 0.3)',
        svg: `<polygon points="50,15 80,45 60,45 75,85 25,50 45,50" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              <circle cx="50" cy="45" r="5" fill="currentColor"/>`,
        descCN: '您在測評中展現出了高昂的「外向性」。您充滿了社交活力、積極樂觀且敢於表態。您在與人交往和喧鬧的氛圍中能迅速充電，擅長激發團隊熱情，是名副其實的磁場核心。',
        descEN: 'You scored exceptionally high in Extraversion. Enthusiastic, assertive, and highly social, you thrive in vibrant group settings. You recharge by interacting with people and naturally ignite excitement in others.',
        careerCN: '適合需要頻繁溝通與影響他人的領域，如：商業擴張開發、公關媒體發言、團隊領袖、公共演講、或是跨部門協調經理。',
        careerEN: 'Ideally suited for active roles focused on communication and influence, such as business development, public relations, team leadership, public speaking, or agile product ownership.',
        lifeCN: '在高度社交的間隙中，記得為自己規劃「靜音充電期」。短暫的離線獨處，有助於沉澱你的靈感，並避免因能量過度輸出而產生倦怠。',
        lifeEN: 'Between high-social events, schedule "silent recharges." Temporary solitude helps integrate your thoughts and prevents burnout from over-extending energy.',
        styleCN: '推薦加入「社交音樂創作團（如爵士合奏/組隊 DJ）」、團隊球類運動，在頻繁的合作互動中釋放社交能量。',
        styleEN: 'Try joining collaborative bands, social music production circles, or competitive team sports to release your energy dynamically with others.'
    },
    'A': {
        titleCN: '調和者',
        titleEN: 'THE HARMONIZER',
        taglineCN: '富有同理心、促進信任與和諧的溫暖守護者。',
        taglineEN: 'A warm protector who fosters trust and harmony with deep empathy.',
        themeColor: 'hsl(170, 75%, 45%)',
        themeColorGlow: 'rgba(75, 192, 192, 0.15)',
        themeColorBorder: 'rgba(75, 192, 192, 0.3)',
        svg: `<path d="M12,50 C12,18 48,18 50,44 C52,18 88,18 88,50 C88,76 50,90 50,90 C50,90 12,76 12,50 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              <path d="M35 48 C38 43, 44 43, 47 48 M53 48 C56 43, 62 43, 65 48" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,
        descCN: '您在大五特質中散發著迷人的「宜人性」。您非常溫暖、富有同理心且樂於助人。在群體中，您總是優先考慮人際和諧與合作，真誠地信任他人，是每個人身邊最溫柔、最可靠的避風港。',
        descEN: 'You scored exceptionally high in Agreeableness. Compassionate, trusting, and highly empathetic, you naturally prioritize social harmony and teamwork. You are a gentle, trustworthy sanctuary for friends and family.',
        careerCN: '適合需要深度同理心與協調能力的溫馨志業，如：心理健康諮商、教育培訓工作、醫療護理、非營利組織（NGO）發展或客戶滿意度專家。',
        careerEN: 'Perfect for vocations centering on empathy and human support, such as counseling, developmental teaching, healthcare, NGO development, or customer success.',
        lifeCN: '同理他人是偉大的天賦，但也請務必為自己設定健康的「邊界感」。學會拒絕無理的索求，因為唯有先照顧好自己，你才能長久地溫暖他人。',
        lifeEN: 'Helping others is beautiful, but make sure to set healthy boundaries. Practice saying "no" to protect your own energy so you can support others sustainably.',
        styleCN: '推薦參與「社區志工與關懷活動」、療癒型桌遊，或溫和的雙人瑜伽，在和諧的氣氛中沉浸心靈。',
        styleEN: 'Try community volunteering, cooperative board games, or gentle partner yoga to ground yourself in cooperative and peaceful activities.'
    },
    'S': {
        titleCN: '察覺者',
        titleEN: 'THE PERCEPTIVE',
        taglineCN: '情感細膩敏銳、具備強大心靈韌性與冷靜深思的觀察家。',
        taglineEN: 'A calm observer with delicate sensitivity and powerful spiritual resilience.',
        themeColor: 'hsl(345, 85%, 60%)',
        themeColorGlow: 'rgba(255, 99, 132, 0.15)',
        themeColorBorder: 'rgba(255, 99, 132, 0.3)',
        svg: `<path d="M25,50 C25,25 45,15 65,18 C50,26 48,44 58,54 C68,64 85,55 82,70 C75,85 50,85 35,75 C27,67 25,58 25,50 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              <circle cx="42" cy="38" r="2" fill="currentColor"/>
              <circle cx="58" cy="72" r="1.5" fill="currentColor"/>`,
        descCN: '您在測評中呈現出了敏銳的「情緒觸覺」與獨特的情感深度。相較於粗線條的人，您對環境變化的感知更為細緻。您擁有強大的內省力，即使在繁雜的日常中，也能冷靜深思，展現優雅的心靈韌性。',
        descEN: 'You possess delicate emotional perceptiveness and rich psychological depth. You sense environmental shifts and micro-expressions with refined precision. Deeply introspective, you possess elegant mental resilience.',
        careerCN: '適合需要專注深度思考與獨立敏銳判斷的工作，如：前沿科學研究員、哲學與社會學研究、獨立文學創作、金融風控評估或藝術策展人。',
        careerEN: 'Ideal for careers requiring deep analytical focus and highly independent observation, such as basic research, social science, independent literature, financial forecasting, or art curation.',
        lifeCN: '正念（Mindfulness）與自然連結是你的靈魂良藥。建立起清晨冥想呼吸或在公園森林慢步的習慣，能幫你有效梳理敏銳接收到的海量外界訊息。',
        lifeEN: 'Mindfulness and nature are your best tools. Building a routine of morning meditation or solo walks in nature helps filter and process the heavy emotional inputs you absorb.',
        styleCN: '推薦嘗試「正念茶道體驗」、「單人馬拉松慢跑」或室內花藝，在安靜獨立的空間中，享受心靈與身體的對話。',
        styleEN: 'Highly recommend mindful tea ceremonies, solo long-distance jogging, or indoor botanical art, giving you space for peaceful, restorative dialogue.'
    }
};

const TRAIT_NAMES = {
    'O': { cn: '開放性 (Openness)', desc: '想像力、審美、情感豐富程度' },
    'C': { cn: '盡責性 (Conscientiousness)', desc: '自律、條理性、追求成就' },
    'E': { cn: '外向性 (Extraversion)', desc: '熱情、社交、果斷度' },
    'A': { cn: '宜人性 (Agreeableness)', desc: '信任、利他、謙虛與合作' },
    'S': { cn: '穩定性 (Stability)', desc: '情緒調節、抗壓與冷靜程度' }
};

/* ==========================================================================
   ⚙️ App State Management
   ========================================================================== */

let activeQuestionsList = []; // The list of questions to present
let currentQuestionIndex = 0; // 0-indexed cursor
let answers = {};             // Keyed by Question ID, value 1-5
let selectedMode = 'lite';    // 'lite' or 'full'
let radarChartInstance = null; // ChartJS pointer

/* ==========================================================================
   🔌 UI Nodes & DOM Selectors
   ========================================================================== */

const screens = {
    landing: document.getElementById('screen-landing'),
    test: document.getElementById('screen-test'),
    results: document.getElementById('screen-results')
};

// Mode Selection Buttons
const btnModeLite = document.getElementById('btn-mode-lite');
const btnModeFull = document.getElementById('btn-mode-full');

// History Box Elements
const historyBox = document.getElementById('history-box');
const historyArchetypeText = document.getElementById('history-archetype');
const btnViewHistory = document.getElementById('btn-view-history');

// Questionnaire UI Components
const testModeLabel = document.getElementById('test-mode-label');
const testProgressText = document.getElementById('test-progress-text');
const testProgressBar = document.getElementById('test-progress-bar');
const questionTextNode = document.getElementById('question-text');
const activeQuestionCard = document.getElementById('active-question-card');
const likertBtns = document.querySelectorAll('.likert-btn');
const btnPrevQuestion = document.getElementById('btn-prev-question');
const btnQuitTest = document.getElementById('btn-quit-test');

// Result Screen Action Buttons
const btnDownloadCard = document.getElementById('btn-download-card');
const btnRetakeTest = document.getElementById('btn-retake-test');

/* ==========================================================================
   🔄 Init & Initialization Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Check local storage for previous results to display history box
    checkSavedResults();

    // Landing Screen Event Listeners
    btnModeLite.addEventListener('click', () => startAssessment('lite'));
    btnModeFull.addEventListener('click', () => startAssessment('full'));
    btnViewHistory.addEventListener('click', showSavedHistory);

    // Likert Answer Event Listeners
    likertBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const val = parseInt(btn.getAttribute('data-value'));
            recordAnswer(val);
        });
    });

    // Questionnaire Controls
    btnPrevQuestion.addEventListener('click', goToPreviousQuestion);
    btnQuitTest.addEventListener('click', quitAssessment);

    // Results screen controls
    btnDownloadCard.addEventListener('click', downloadPersonalityCard);
    btnRetakeTest.addEventListener('click', restartAssessment);

    // Setup CLI copy buttons
    setupCopyButton('btn-copy-cli-1');
    setupCopyButton('btn-copy-cli-2');
});

/* ==========================================================================
   ⚡ Screen Navigation & Test Setup
   ========================================================================== */

function switchScreen(targetScreenKey) {
    Object.keys(screens).forEach(key => {
        if (key === targetScreenKey) {
            screens[key].classList.add('active');
        } else {
            screens[key].classList.remove('active');
        }
    });
}

function checkSavedResults() {
    try {
        const lastResult = localStorage.getItem('ocean_last_result');
        if (lastResult) {
            const parsed = JSON.parse(lastResult);
            if (parsed && parsed.dominantTrait && ARCHETYPES[parsed.dominantTrait]) {
                historyArchetypeText.innerText = ARCHETYPES[parsed.dominantTrait].titleCN;
                historyBox.classList.remove('hidden');
            }
        }
    } catch (e) {
        console.error('Failed to read localStorage:', e);
    }
}

function startAssessment(mode) {
    selectedMode = mode;
    currentQuestionIndex = 0;
    answers = {};

    if (mode === 'lite') {
        // Construct question set based on pre-defined balanced indices
        activeQuestionsList = LITE_INDICES.map(idx => QUESTIONS[idx]);
        testModeLabel.innerText = '極速測評版 / Lite';
        testModeLabel.style.borderColor = 'var(--color-o)';
        testModeLabel.style.color = 'var(--color-o)';
    } else {
        // Full standard 50 questions
        activeQuestionsList = [...QUESTIONS];
        testModeLabel.innerText = '學術標準版 / Full';
        testModeLabel.style.borderColor = 'var(--color-c)';
        testModeLabel.style.color = 'var(--color-c)';
    }

    switchScreen('test');
    renderQuestion();
}

function renderQuestion() {
    if (currentQuestionIndex >= activeQuestionsList.length) {
        finishAssessment();
        return;
    }

    const currentQuestion = activeQuestionsList[currentQuestionIndex];
    
    // Enable/disable previous question button
    btnPrevQuestion.disabled = (currentQuestionIndex === 0);

    // Update Step/Progress Texts
    testProgressText.innerText = `題目 ${currentQuestionIndex + 1} / ${activeQuestionsList.length}`;
    const percent = Math.round((currentQuestionIndex / activeQuestionsList.length) * 100);
    testProgressBar.style.width = `${percent}%`;

    // Visual slide-in transition for the question text
    activeQuestionCard.classList.remove('slide-in');
    void activeQuestionCard.offsetWidth; // Trigger reflow for CSS animation reset
    activeQuestionCard.classList.add('slide-in');

    // Set Text
    questionTextNode.innerHTML = `${currentQuestion.textCN}<br><span style="font-size: 14px; font-weight: 400; color: var(--text-secondary); display: block; margin-top: 10px;">${currentQuestion.textEN}</span>`;
}

/* ==========================================================================
   📝 Quiz Flow & Answer Recording
   ========================================================================== */

function recordAnswer(scoreValue) {
    const currentQuestion = activeQuestionsList[currentQuestionIndex];
    answers[currentQuestion.id] = scoreValue;

    // Advance with a slight visual delay for response satisfaction feedback
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < activeQuestionsList.length) {
            renderQuestion();
        } else {
            // Completed! Make progress bar hit 100% first
            testProgressBar.style.width = `100%`;
            setTimeout(finishAssessment, 300);
        }
    }, 150);
}

function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function quitAssessment() {
    if (confirm('確定要放棄本次性格測驗並返回首頁嗎？您的作答記錄不會保存。')) {
        switchScreen('landing');
        checkSavedResults();
    }
}

function restartAssessment() {
    switchScreen('landing');
    checkSavedResults();
}

/* ==========================================================================
   📐 Mathematical Calculations & Scorings
   ========================================================================== */

function finishAssessment() {
    // 1. Calculate Scores
    const scores = calculateOCEANScores();

    // 2. Identify Dominant Trait (highest average score)
    let dominantTrait = 'O';
    let maxVal = -1;
    ['O', 'C', 'E', 'A', 'S'].forEach(t => {
        if (scores[t] > maxVal) {
            maxVal = scores[t];
            dominantTrait = t;
        }
    });

    // 3. Save to localStorage
    const reportData = {
        mode: selectedMode,
        scores: scores,
        dominantTrait: dominantTrait,
        timestamp: new Date().toISOString()
    };
    try {
        localStorage.setItem('ocean_last_result', JSON.stringify(reportData));
    } catch (e) {
        console.error('Failed to write results to localStorage:', e);
    }

    // 4. Update Theme Colors and Render Results Dashboard
    displayReport(reportData);
}

function calculateOCEANScores() {
    // Traits buckets
    const sums = { O: 0, C: 0, E: 0, A: 0, S: 0 };
    const counts = { O: 0, C: 0, E: 0, A: 0, S: 0 };

    // Process answered questions in our active list
    activeQuestionsList.forEach(q => {
        const rawScore = answers[q.id];
        let processedScore = rawScore;

        if (q.sign === '-') {
            processedScore = 6 - rawScore; // Reverse score handling
        }

        sums[q.trait] += processedScore;
        counts[q.trait]++;
    });

    // Compute averages (1.0 to 5.0 range)
    const averages = {};
    ['O', 'C', 'E', 'A', 'S'].forEach(t => {
        averages[t] = parseFloat((sums[t] / (counts[t] || 1)).toFixed(1));
    });

    return averages;
}

/* ==========================================================================
   📊 Visual Report Display & UI Theme Update
   ========================================================================== */

function displayReport(data) {
    const scores = data.scores;
    const dominantTrait = data.dominantTrait;
    const archetype = ARCHETYPES[dominantTrait];

    // 1. Dynamic CSS Theme Injection based on dominant archetype
    document.documentElement.style.setProperty('--theme-color', archetype.themeColor);
    document.documentElement.style.setProperty('--theme-color-glow', archetype.themeColorGlow);
    document.documentElement.style.setProperty('--theme-color-border', archetype.themeColorBorder);

    // 2. Populate Tarot Card Elements
    document.getElementById('card-archetype-title').innerText = archetype.titleCN;
    document.getElementById('card-archetype-english').innerText = archetype.titleEN;
    
    // Update results developer promo widget
    const promoArchetype = document.getElementById('promo-archetype-name');
    if (promoArchetype) {
        promoArchetype.innerText = archetype.titleCN;
    }
    
    // Inject custom beautiful SVG inside Tarot Box
    const svgBox = document.getElementById('tarot-archetype-svg');
    svgBox.innerHTML = archetype.svg;

    // Adjust pill progress bars on the Tarot Card (percent style, e.g. score of 4.0 out of 5.0 is 80%)
    ['O', 'C', 'E', 'A', 'S'].forEach(t => {
        const val = scores[t];
        const pct = Math.round((val / 5) * 100);
        document.getElementById(`card-bar-${t.toLowerCase()}`).style.width = `${pct}%`;
        document.getElementById(`card-val-${t.toLowerCase()}`).innerText = val.toFixed(1);
    });

    // 3. Populate detailed Right Panel Report
    document.getElementById('report-archetype-desc-cn').innerText = archetype.descCN;
    document.getElementById('report-archetype-desc-en').innerText = archetype.descEN;

    // Detailed Advice Cards
    document.getElementById('advice-career-cn').innerText = archetype.careerCN;
    document.getElementById('advice-career-en').innerText = archetype.careerEN;
    document.getElementById('advice-life-cn').innerText = archetype.lifeCN;
    document.getElementById('advice-life-en').innerText = archetype.lifeEN;
    document.getElementById('advice-style-cn').innerText = archetype.styleCN;
    document.getElementById('advice-style-en').innerText = archetype.styleEN;

    // Render Trait breakdown explanation lists dynamically
    const traitsListWrapper = document.getElementById('report-traits-list');
    traitsListWrapper.innerHTML = ''; // Clear previous

    ['O', 'C', 'E', 'A', 'S'].forEach(t => {
        const score = scores[t];
        const info = TRAIT_NAMES[t];
        const isDominant = (t === dominantTrait);
        
        let customClass = `c-${t.toLowerCase()}`;
        
        const traitItem = document.createElement('div');
        traitItem.className = 'trait-expl-item';
        traitItem.innerHTML = `
            <div class="trait-expl-header">
                <span class="trait-expl-title ${customClass}">${info.cn} ${isDominant ? '🌟 (主導特質)' : ''}</span>
                <span class="trait-expl-score-pill">${score.toFixed(1)} / 5.0</span>
            </div>
            <p class="trait-expl-desc-cn">${getCustomTraitTextCN(t, score)}</p>
            <p class="trait-expl-desc-en" style="color: var(--text-secondary); font-size: 13px; font-weight: 300;">${getCustomTraitTextEN(t, score)}</p>
        `;
        traitsListWrapper.appendChild(traitItem);
    });

    // 4. Render Dynamic Chart.js Radar Chart
    renderRadarChart(scores, archetype.themeColor);

    // Switch screen to show results
    switchScreen('results');
}

function showSavedHistory() {
    try {
        const lastResult = localStorage.getItem('ocean_last_result');
        if (lastResult) {
            displayReport(JSON.parse(lastResult));
        }
    } catch (e) {
        console.error('Failed to show history:', e);
    }
}

/* ==========================================================================
   📈 ChartJS Radar Plot
   ========================================================================== */

function renderRadarChart(scores, accentColor) {
    const ctx = document.getElementById('radarChart').getContext('2d');

    // Destroy existing instance to prevent overlapping and tooltips glitch
    if (radarChartInstance) {
        radarChartInstance.destroy();
    }

    const dataPoints = [scores.O, scores.C, scores.E, scores.A, scores.S];

    radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Stability'],
            datasets: [{
                label: 'Personality Profile',
                data: dataPoints,
                fill: true,
                backgroundColor: 'rgba(255, 255, 255, 0.05)', // Fallback dynamic overlay
                borderColor: accentColor,
                borderWidth: 2,
                pointBackgroundColor: accentColor,
                pointBorderColor: '#07080d',
                pointHoverBackgroundColor: '#ffffff',
                pointHoverBorderColor: accentColor,
                pointRadius: 3,
                pointHoverRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // Minimalist clean look on the card
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function(context) {
                            return ` ${context.label}: ${context.raw.toFixed(1)}`;
                        }
                    }
                }
            },
            scales: {
                r: {
                    min: 1.0,
                    max: 5.0,
                    ticks: {
                        stepSize: 1.0,
                        display: false // Remove circular numeric text inside chart
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.08)' // Subtle web grids
                    },
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.08)' // Spokes grids
                    },
                    pointLabels: {
                        color: '#9ca3af',
                        font: {
                            family: 'Outfit',
                            size: 9,
                            weight: '600'
                        }
                    }
                }
            }
        }
    });

    // Make radar chart dataset background color fully match HSL theme values
    const rootStyle = getComputedStyle(document.documentElement);
    const glowColor = rootStyle.getPropertyValue('--theme-color-glow').trim();
    radarChartInstance.data.datasets[0].backgroundColor = glowColor || 'rgba(255,255,255,0.15)';
    radarChartInstance.update();
}

/* ==========================================================================
   🖼️ Card Export (html2canvas PNG Download)
   ========================================================================== */

function downloadPersonalityCard() {
    const cardNode = document.getElementById('personality-share-card');
    
    // Custom button visual indicator during render
    const origText = btnDownloadCard.innerHTML;
    btnDownloadCard.innerHTML = `<svg class="animate-spin" style="animation: spin 1s linear infinite; margin-right: 8px;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 8 4"/></svg> 生產中 / Generating...`;
    btnDownloadCard.disabled = true;

    // Use html2canvas to capture the Card perfectly at 2x Scale for crisp print results
    html2canvas(cardNode, {
        backgroundColor: '#07080d',
        scale: 2,
        useCORS: true,
        logging: false,
        allowTaint: true
    }).then(canvas => {
        const link = document.createElement('a');
        const filename = `OCEAN_Personality_Card_${selectedMode.toUpperCase()}.png`;
        link.download = filename;
        link.href = canvas.toDataURL('image/png');
        link.click();
        
        // Restore button state
        btnDownloadCard.innerHTML = origText;
        btnDownloadCard.disabled = false;
    }).catch(err => {
        console.error('Html2canvas render error:', err);
        alert('圖卡產生失敗，請再試一次或直接截圖保存！');
        btnDownloadCard.innerHTML = origText;
        btnDownloadCard.disabled = false;
    });
}

/* ==========================================================================
   💬 Dynamic Trait Level Descriptions (Chinese & English)
   ========================================================================== */

function getCustomTraitTextCN(trait, score) {
    const high = score >= 3.5;
    const neutral = score >= 2.5 && score < 3.5;
    
    if (trait === 'O') {
        if (high) return '高度開放：您熱愛創新，思維開闊，充滿求知欲，對藝術與哲學想法高度敏感。';
        if (neutral) return '中度開放：您在傳統常規與新穎創意之間保持著良好平衡，樂於接納新事物但也不盲從。';
        return '低度開放：您行事務實穩健，更信任久經考驗的傳統做法，比起天馬行空更重視現實操作。';
    }
    if (trait === 'C') {
        if (high) return '高度盡責：您非常自律、講求條理，做事始終如一且能持之以恆，目標達成率極高。';
        if (neutral) return '中度盡責：您注重效率但能保持靈活性，能夠在結構化計畫與適時隨性之間取得完美平衡。';
        return '低度盡責：您崇尚隨性與即興發揮，做事彈性極大，但在需要高度精準與嚴密日程的工作中會面臨挑戰。';
    }
    if (trait === 'E') {
        if (high) return '高度外向：您擅長社交，樂觀主動，在喧鬧的人際互動與大型活動中能極快補充精力。';
        if (neutral) return '中度外向：您屬於混合偏向（Ambivert），既享受社交聚會的狂歡，也極度珍惜獨處的安靜時光。';
        return '低度外向（內向）：您氣質沉穩內斂，相較於大型聚會，您更傾向於進行深度的單獨交談，從靜謐中獲取力量。';
    }
    if (trait === 'A') {
        if (high) return '高度宜人：您極富同理心、善良溫和，天生願意信任他人並尋求妥協，重視人際關係的和諧。';
        if (neutral) return '中度宜人：您善良隨和但很有主見，能在真誠協助他人與捍衛自身立場之間取得平衡。';
        return '低度宜人：您傾向獨立思考與競爭，在團隊中常保持批判性思維，有時會將任務成果置於情感和諧之上。';
    }
    if (trait === 'S') {
        if (high) return '高度穩定：您非常冷靜沉穩，不易焦慮，具備傑出的抗壓與自我調節能力，能泰然面對變故。';
        if (neutral) return '中度穩定：您通常能很好地控制情緒，但在面臨重度突發壓力時仍會產生短暫的焦慮和起伏。';
        return '低度穩定（高敏感）：您情感細膩敏感，對危機極具警覺心，雖然容易受壓力影響，但也擁有更強的藝術情感張力。';
    }
    return '';
}

function getCustomTraitTextEN(trait, score) {
    const high = score >= 3.5;
    const neutral = score >= 2.5 && score < 3.5;

    if (trait === 'O') {
        if (high) return 'High Openness: Highly creative, curious, and open to unconventional ideas and profound philosophical concepts.';
        if (neutral) return 'Moderate Openness: Balanced between creative exploration and grounded pragmatism, accepting change reasonably.';
        return 'Low Openness: Highly practical and traditional, preferring concrete facts over speculative or abstract concepts.';
    }
    if (trait === 'C') {
        if (high) return 'High Conscientiousness: Exceptionally organized, self-disciplined, goal-oriented, and highly dependable.';
        if (neutral) return 'Moderate Conscientiousness: Organized yet flexible, striking a healthy balance between rigorous planning and spontaneity.';
        return 'Low Conscientiousness: Spontaneous, flexible, and comfortable with unstructured settings, but may shirk strict deadlines.';
    }
    if (trait === 'E') {
        if (high) return 'High Extraversion: Outgoing, talkative, assertively social, and recharges rapidly when communicating in large groups.';
        if (neutral) return 'Moderate Extraversion: Ambiverted. You easily adjust to social environments but deeply value quiet individual reflection.';
        return 'Low Extraversion: Reserved, quiet, and introspective. Prefers close one-on-one friendships and recharges through peaceful solitude.';
    }
    if (trait === 'A') {
        if (high) return 'High Agreeableness: Highly empathetic, sympathetic, helpful, and strongly values cooperation and trusting relations.';
        if (neutral) return 'Moderate Agreeableness: Polite and cooperative, yet able to maintain healthy boundaries and stand up for your own interests.';
        return 'Low Agreeableness: Skeptical and highly competitive. Prioritizes results and hard analysis over emotional consensus.';
    }
    if (trait === 'S') {
        if (high) return 'High Stability: Calm, resilient, rarely worried, and exceptionally capable of managing complex real-world stress.';
        if (neutral) return 'Moderate Stability: Generally emotionally steady, though severe pressure or sudden changes may trigger temporary distress.';
        return 'Low Stability: Emotionally reactive and highly sensitive. Empathetic to risks but prone to feeling overwhelmed under stress.';
    }
    return '';
}

/* ==========================================================================
   📋 Clipboard CLI Command Copy Helper
   ========================================================================== */

function setupCopyButton(btnId) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    
    btn.addEventListener('click', () => {
        const commandText = 'npx skills add aqws6361/big-five-personality-skill@big-five-assessment';
        navigator.clipboard.writeText(commandText).then(() => {
            const textSpan = btn.querySelector('.copy-text');
            const origHTML = btn.innerHTML;
            
            btn.classList.add('copied');
            if (textSpan) {
                textSpan.innerText = '已複製！';
            }
            
            setTimeout(() => {
                btn.classList.remove('copied');
                btn.innerHTML = origHTML;
            }, 1500);
        }).catch(err => {
            console.error('Failed to copy command text:', err);
        });
    });
}

