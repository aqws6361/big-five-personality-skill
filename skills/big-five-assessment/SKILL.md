---
name: big-five-assessment
description: "A psychological engine for the Big Five (OCEAN) model. This skill provides a validated 50-item IPIP inventory to assess real users or generate high-fidelity synthetic personas. Supports interactive personality profiling for users, and simulating realistic behaviors for agents. Triggers on: personality assessment, OCEAN model, user persona generation, UX testing, character simulation, psychological profiling."
---

# 🧠 Big Five (OCEAN) Personality Assessment

Unlock deep insights into your personality with this interactive, professional-grade assessment. Based on the **International Personality Item Pool (IPIP)**, this tool measures the five fundamental dimensions that psychologists use to describe human personality.

## 🚀 How It Works

This skill turns your AI agent into a professional psychometrician:
1. **Interactive Q&A**: The agent will present **50 statements** one by one.
2. **Simple Scoring**: You rate each statement on a scale of **1 (Very Inaccurate)** to **5 (Very Accurate)**.
3. **Real-time Progress**: The agent tracks your state and keeps you motivated throughout the test.
4. **Comprehensive Report**: At the end, you'll receive a detailed breakdown of your unique personality profile.

---

## 💎 The Five Dimensions (OCEAN)

| Trait | Focus | High Scorers Tend to Be... |
| :--- | :--- | :--- |
| **O**penness | Intellectual curiosity & creative imagination | Creative, adventurous, and open to new ideas. |
| **C**onscientiousness | Organization, persistence, and motivation | Disciplined, reliable, and goal-oriented. |
| **E**xtraversion | Sociability, assertiveness, and emotional expression | Outgoing, energetic, and talkative. |
| **A**agreeableness | Compassion, cooperation, and trust | Kind, sympathetic, and helpful. |
| **N**euroticism | Emotional stability and impulse control | Resilient, calm, and handles stress well. |

---

## 🛠️ Usage Guide

To start your journey of self-discovery, simply say:
- *"I want to take a personality test."*
- *"Let's do the Big Five assessment."*
- *"Can you test my OCEAN traits?"*

### Rating Scale
When answering, use the following numbers:
*   **1**: 非常不符合 (Very Inaccurate)
*   **2**: 有些不符合 (Moderately Inaccurate)
*   **3**: 普通 (Neither Inaccurate nor Accurate)
*   **4**: 有些符合 (Moderately Accurate)
*   **5**: 非常符合 (Very Accurate)

---

## 📋 The Assessment Items (IPIP-50)

| ID | Trait | Item | Scoring |
|----|-------|------|---------|
| 1 | E | Am the life of the party. | + |
| 2 | A | Feel little concern for others. | - |
| 3 | C | Am always prepared. | + |
| 4 | N | Get stressed out easily. | - |
| 5 | O | Have a rich vocabulary. | + |
| 6 | E | Don't talk a lot. | - |
| 7 | A | Am interested in people. | + |
| 8 | C | Leave my belongings around. | - |
| 9 | N | Am relaxed most of the time. | + |
| 10 | O | Have difficulty understanding abstract ideas. | - |
| 11 | E | Feel comfortable around people. | + |
| 12 | A | Insult people. | - |
| 13 | C | Pay attention to details. | + |
| 14 | N | Worry about things. | - |
| 15 | O | Have a vivid imagination. | + |
| 16 | E | Keep in the background. | - |
| 17 | A | Sympathize with others' feelings. | + |
| 18 | C | Make a mess of things. | - |
| 19 | N | Seldom feel blue. | + |
| 20 | O | Am not interested in abstract ideas. | - |
| 21 | E | Start conversations. | + |
| 22 | A | Am not interested in other people's problems. | - |
| 23 | C | Get chores done right away. | + |
| 24 | N | Am easily disturbed. | - |
| 25 | O | Have excellent ideas. | + |
| 26 | E | Have little to say. | - |
| 27 | A | Have a soft heart. | + |
| 28 | C | Often forget to put things back in their proper place. | - |
| 29 | N | Get upset easily. | - |
| 30 | O | Do not have a good imagination. | - |
| 31 | E | Talk to a lot of different people at parties. | + |
| 32 | A | Am not really interested in others. | - |
| 33 | C | Like order. | + |
| 34 | N | Change my mood a lot. | - |
| 35 | O | Am quick to understand things. | + |
| 36 | E | Don't like to draw attention to myself. | - |
| 37 | A | Take time out for others. | + |
| 38 | C | Shirk my duties. | - |
| 39 | N | Have frequent mood swings. | - |
| 40 | O | Use difficult words. | + |
| 41 | E | Don't mind being the center of attention. | + |
| 42 | A | Feel others' emotions. | + |
| 43 | C | Follow a schedule. | + |
| 44 | N | Get irritated easily. | - |
| 45 | O | Spend time reflecting on things. | + |
| 46 | E | Am quiet around strangers. | - |
| 47 | A | Make people feel at ease. | + |
| 48 | C | Am exacting in my work. | + |
| 49 | N | Often feel blue. | - |
| 50 | O | Am full of ideas. | + |

---

## 💾 Automation & Report Management

Once the user completes all 50 items, the Agent **MUST** perform the following automated steps:

1. **Calculate Scores**: Sum points for each trait (handle reverse scoring `-`). Scale final scores to a 1-5 range.
2. **Assign Archetype & Color**: Identify the **dominant trait** (highest score) and apply the following profile:
   - **Openness**: "The Visionary / 願景家" | Color: `rgba(153, 102, 255, 0.2)` (Purple)
   - **Conscientiousness**: "The Strategist / 策略家" | Color: `rgba(54, 162, 235, 0.2)` (Blue)
   - **Extraversion**: "The Connector / 連結者" | Color: `rgba(255, 159, 64, 0.2)` (Orange)
   - **Agreeableness**: "The Harmonizer / 調和者" | Color: `rgba(75, 192, 192, 0.2)` (Green)
   - **Neuroticism**: "The Perceptive / 察覺者" | Color: `rgba(255, 99, 132, 0.2)` (Red)
3. **Generate Visualization**: Create a Radar Chart via **QuickChart API**.
   - **Template**: `https://quickchart.io/chart?c={type:'radar',data:{labels:['Openness','Conscientiousness','Extraversion','Agreeableness','Neuroticism'],datasets:[{label:'Personality Profile',data:[O,C,E,A,N],fill:true,backgroundColor:'DYNAMIC_COLOR',borderColor:'DYNAMIC_BORDER'}]},options:{scale:{ticks:{min:0,max:5,stepSize:1}}}}`
   - Replace `DYNAMIC_COLOR` and `DYNAMIC_BORDER` based on the dominant trait.
4. **Generate Bilingual Analysis & Lifestyle Match**:
   - **Archetype Title**: Display the assigned title prominently.
   - **Trait Summary**: Detailed summary for each dimension in **both Chinese and English**.
   - **Lifestyle Match**: Suggest 2-3 activities (e.g., high-O: complex puzzles; high-C: structured calisthenics; high-E: social music production) in **both languages**.
5. **Locate & Save**:
   - Save the bilingual report as `assessment_report.md` and raw data as `scores.json` with a timestamp.
   - **Requirement**: These files **MUST** be stored in the same directory as this `SKILL.md`.
6. **Final Notification**: Inform the user that their archived profile and dynamic radar chart are ready.

---

## 📦 Installation

```bash
npx skills add aqws6361/big-five-personality-skill@big-five-assessment
