---
name: big-five-assessment
description: "Perform a professional 50-item Big Five (OCEAN) personality assessment. Use when the user wants to understand their personality traits, take a psychological test, or get a detailed profile based on Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. Triggers on: Big Five test, OCEAN test, personality assessment, how extroverted am I, personality profile."
---

# Big Five (OCEAN) Personality Assessment

This skill conducts a standard 50-item personality assessment based on the International Personality Item Pool (IPIP). It measures five broad domains of personality:

1. **Openness to Experience** (Intellect/Imagination)
2. **Conscientiousness** (Orderliness/Reliability)
3. **Extraversion** (Sociability/Energy)
4. **Agreeableness** (Trust/Kindness)
5. **Neuroticism** (Emotional Stability)

## Assessment Protocol

1. **Start**: When the user requests a personality test or Big Five assessment, initialize the test.
2. **Questions**: Present 50 items one by one. Ask the user to rate how much they agree with each statement on a scale of 1 to 5:
   - **1** = Very Inaccurate
   - **2** = Moderately Inaccurate
   - **3** = Neither Inaccurate nor Accurate
   - **4** = Moderately Accurate
   - **5** = Very Accurate
3. **State Management**: Keep track of the current question number and the user's answers. 
4. **Completion**: After 50 questions, calculate the scores and provide a detailed report.

## The 50 Items (IPIP-50)

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

*(E=Extraversion, A=Agreeableness, C=Conscientiousness, N=Emotional Stability/Neuroticism, O=Openness)*
* Scoring: (+) means 1=1...5=5. (-) means 1=5...5=1.*

## Scoring Logic

Each trait has 10 items. Max score per trait is 50, min is 10.
Report the final score for each trait as a percentage or on a 1-5 scale.

## Agent Interaction Rules

1. **Be Encouraging**: Acknowledge the user's progress periodically (e.g., "Halfway there!").
2. **Handle Non-Numeric Input**: If the user says "Strongly Agree", map it to 5.
3. **Report Presentation**:
   - Show a summary of each trait.
   - Provide a brief description of what high/low scores mean for that trait.
   - (Optional) Suggest how this insight might apply to their work or life.
