# 🧠 大五人格 (OCEAN) 專業心理測評 Skill & 互動網頁端

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Type](https://img.shields.io/badge/Skill-AI%20Agent-orange)
![Interface](https://img.shields.io/badge/UI-Interactive%20Web-purple)

這是一個兼具**科學嚴謹度**與**極致視覺美學**的大五人格（Big Five）測評工具。基於國際人格項目池（IPIP-50）標準，本專案現已全面升級，提供**極致體驗的互動式單頁網頁端（SPA）**與 **AI Agent 專業對話 Skill**，協助使用者與開發者快速獲得精確、精美、適合社群分享的個人性格特質報告。

---

## 🎨 網頁端全新特色 (New Premium Web UI)

為了提升用戶參與度與降低答題流失率，我們打造了高質感的互動式網頁版：

*   **🌌 磨砂玻璃美學 (Glassmorphism)**：深色霓虹科技視覺，隨著您的主導性格特質，全網頁的主題色系（發光效果、按鈕、背景）會動態自適應改變。
*   **⚡ 雙測評模式 (Double Modes)**：
    *   **極速測評版 (Lite - 15 題)**：精選 IPIP 代表性問題，僅需 2 分鐘即可快速勾勒性格底色，極大降低流失率，也極方便 Agent 測試。
    *   **學術標準版 (Full - 50 題)**：學術標準 50 題完整測試，獲取最精準的原始百分比分值。
*   **📈 動態互動雷達圖**：整合 Chart.js，在網頁端直接渲染高靈敏、具懸浮提示的發光雷達圖卡。
*   **🃏 塔羅牌式「個性特質分享卡」**：
    *   將你的測評結果合成為一張極具神秘感與美學設計的**虛擬名片**。
    *   整合 `html2canvas` 技術，支持**一鍵下載高解析度 PNG 卡片**，隨時分享至 Threads、Instagram Stories、X (Twitter)，激發社群病毒式傳播！
*   **🔋 本地結果記憶 (Local Storage)**：自動保存上一次測評結果，隨時回訪直接讀取。

---

## 🚀 網頁端快速開始 (Web UI Start)

### 1. 本地直接打開
專案採用**零配置純前端**開發，您無須安裝任何依賴或啟動複雜的伺服器：
*   直接雙擊根目錄下的 `index.html` 即可在瀏覽器中暢玩！

### 2. 啟動本地開發伺服器 (可選)
若您想體驗更流暢的本機執行：
```bash
# 使用 Python 快速開啟伺服器
python -m http.server 8000
# 或是使用 Node.js
npx serve .
```
打開瀏覽器訪問 `http://localhost:8000`。

### 3. 一鍵部署至 GitHub Pages 🚀
因為是 100% 靜態網頁，您可以免費託管至 GitHub Pages：
1. 將專案 Push 至您的 GitHub 倉庫。
2. 進入倉庫的 **Settings** > **Pages**。
3. 在 **Build and deployment** 下，將 Source 設為 **Deploy from a branch**，分支選擇 `main` (或 `master`)，目錄選擇 `/ (root)`，點擊 Save。
4. 數秒後，即可通過 `https://<您的GitHub帳號>.github.io/big-five-personality-skill/` 線上訪問！

---

## 🤖 AI Agent Skill 模組

本專案同時保留並優化了專為 AI Agent（如 Claude Code、Gemini Code Assist 等 CLI 終端）設計的 Skill 插件。

### 1. 安裝 Skill
在你的 Agent 環境中運行以下 CLI 命令：
```bash
npx skills add aqws6361/big-five-personality-skill@big-five-assessment
```

### 2. 對話觸發指令
安裝完成後，只需對你的 Agent 說出以下任一指令即可觸發：
*   「我想做大五人格測試」
*   「開始性格測評」
*   「Take a Big Five test」

### 3. 測評自動保存
對話結束後，Agent 會自動在 `skills/big-five-assessment/` 目錄下生成：
*   `assessment_report.md`：中英雙語分析報告與生活建議。
*   `scores.json`：包含詳細原始分值與時間戳記的數據檔案。

---

## 🧠 大五人格科學背景 (OCEAN Model)

大五人格模型是目前心理學界公認最全面且具科學實證的性格描述模型。本測評涵蓋以下五大核心維度：

1.  **O**penness (開放性 - 願景家 🌟)：想像力、審美、情感豐富與創新能力。
2.  **C**onscientiousness (盡責性 - 策略家 📐)：自律、條理性、可靠度與追求成就。
3.  **E**xtraversion (外向性 - 連結者 ⚡)：熱情、社交、果斷與能量傳遞。
4.  **A**greeableness (宜人性 - 調和者 💖)：信任、利他、謙虛與尋求和諧。
5.  **N**euroticism / Stability (情緒穩定性 - 察覺者 🌙)：冷靜程度、情緒調節與心靈抗壓韌性。

---

## 🛠️ 文件結構說明

*   `index.html`：網頁端主結構與 CDN 依賴（Chart.js, html2canvas）。
*   `style.css`：高端玻璃擬態、動態霓虹視覺、響應式排版 CSS。
*   `app.js`：50 題 IPIP 數據庫、正反向計分引擎、雷達圖與 PNG 導出控制器。
*   `skills/big-five-assessment/`：AI Agent 專屬對話 prompt 與自動化計分存檔目錄。

---

## 🤝 貢獻與反饋

如果你有任何視覺調整或功能建議，歡迎提交 Issue 或 Pull Request！
*   **Author**: aqws6361
*   **Source**: [GitHub Repository](https://github.com/aqws6361/big-five-personality-skill)
