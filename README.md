<div align="center">

# 🔍 SEO Quiz App

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

A 10-question interactive quiz app about **basic SEO concepts**, built with React JS and vanilla CSS.

![Project Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=flat-square)
![First useReducer Project](https://img.shields.io/badge/First-useReducer%20Project-purple?style=flat-square)
![Time Spent](https://img.shields.io/badge/Time%20Spent-~4%20Hours-blue?style=flat-square)

</div>

---

## ✨ Features

- 📋 **10 SEO questions** — each with 4 possible answers to choose from
- 🔢 **Question tracker** — displays current question number (e.g. *Question 3 / 10*)
- ☑️ **Answer selection** — click to select your answer before moving on
- ➡️ **Next Question button** — progress through the quiz at your own pace
- 🏆 **Results page** — shows your score out of 10 with a personalised feedback message
- 🔄 **Restart** — take the quiz again anytime

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React JS** | UI framework & state management |
| **`useReducer`** | Quiz logic & state transitions |
| **`useState`** | Local component state |
| **Vanilla CSS** | Styling — no frameworks |
| **JSX** | Component templating |

---

## 🏗️ How I Built It

**Hour 1 — Layout & Pages**
> Started smooth. Built the landing page, quiz screen, and results page using React components and vanilla CSS. Structured the UI with question display, answer options, and navigation button — no logic attached yet.

**Hours 2 & 3 — Functionality (The Hard Part)**
> This is where things slowed down. Wiring up `useReducer` for the first time was genuinely challenging — managing transitions between states (start → question → results), tracking the selected answer, incrementing the question index, and accumulating the score all had to work together. Got stuck multiple times, but pushed through with persistence and occasional AI assistance to get unstuck.

**Hour 4 — Results & Polish**
> Finished the results page logic — calculating the final score and rendering a personalised feedback message based on performance. Final pass on CSS to make everything consistent.

---

## 🎓 What I Learned

This was my **first solo project using `useReducer`** and it was a genuine challenge — and a genuine win.

- 🔀 **`useReducer`** — understood how to model complex state transitions with a reducer function and dispatch actions, instead of juggling multiple `useState` calls
- 🔁 **`useState`** — used alongside `useReducer` for simpler, isolated state (e.g. selected answer)
- 🎭 **Conditional Rendering** — learned how to show different pages (start, quiz, results) based on app state without any routing library
- 📦 **Props** — got more confident passing state and handler functions down the component tree
- 💪 **Getting unstuck** — learned that hitting a wall, stepping back, and using resources (including AI) as a tool — not a crutch — is part of real development

---

## 🚀 Possible Improvements

- [ ] CSS animations between questions for smoother transitions
- [ ] ⏱️ Timer displayed at the top of each question
- [ ] Better results page — show each question with the correct answer and the user's answer
- [ ] Highlight correct vs. incorrect answers after selection
- [ ] Randomised question order on each attempt
- [ ] Difficulty levels (Beginner / Intermediate / Advanced SEO)
- [ ] Score sharing (e.g. copy result to clipboard)

---

<div align="center">

*A challenging but rewarding build — the first of many `useReducer` projects.* :)


https://github.com/user-attachments/assets/9a1a3069-f61d-4dc9-867d-bc3e4214d42b


</div>
