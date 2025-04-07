

# ✊ 🖐️ ✌️ Rock Paper Scissors – React Game

A classic Rock Paper Scissors game built using **React**, featuring:
- Simple player vs. computer gameplay
- Score tracking
- Game over logic (first to 3 wins)
- Reset functionality
- Image-based buttons

## 🖼️ Demo

![image](https://github.com/user-attachments/assets/3f958b1a-eff7-469c-b52c-c9c4ce9e48c9)
![image](https://github.com/user-attachments/assets/a36015a2-e437-445f-bfb0-b38789d86e4e)

---

## 🚀 Features

- 🎮 Choose rock, paper, or scissors to play
- 💻 Computer picks a random move
- 🧠 Game logic determines the winner
- 🏆 First to 5 points wins the game
- 🔁 Reset game button to play again

---

## 📦 Tech Stack

- [React](https://reactjs.org/)
- TypeScript (optional but recommended)
- CSS for basic styling
- PNG image support

---

## 📁 Project Structure

src/
│
├── App.tsx              # Main game logic & state
├── components/
│   ├── SelectButtons.tsx  # Renders rock/paper/scissors buttons
│   └── ResultDisplay.tsx  # Shows result
│   └── ScoreBoard.tsx     # Shows score
│   └── GameOver.tsx       # Shows Game Over screen
├── assets/
│   ├── rock.png
│   ├── paper.png
│   └── scissors.png
└── utils/
└── gameLogic.ts       # Game logic helpers (getWinner, etc.)
---

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/ngagua/rock-paper-scissor.git
cd rock-paper-scissor

2. Install dependencies
pnpm install

3. Start the development server
pnpm run dev
