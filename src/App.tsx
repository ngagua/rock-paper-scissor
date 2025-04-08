import './App.css'
import { useState } from 'react'
import { SelectButtons } from './components/SelectButtons.tsx'
import { ScoreBoard } from './components/ScoreBoard.tsx'
import { ResultDisplay } from './components/ResultDisplay.tsx'
import { getRandomChoice, getWinner } from './utils/gameLogic.ts'
import { GameOver } from './components/GameOver.tsx'

export enum Choices {
    ROCK = 'rock',
    PAPER = 'paper',
    SCISSORS = 'scissors',
}

export enum Results {
    PLAYER = 'player',
    COMPUTER = 'computer',
    DRAW = 'draw',
}

export enum ResultsMessages {
    WIN = 'You win!',
    LOSE = 'You lose!',
    DRAW = "It's a draw!",
}

function App() {
    const choices = [Choices.ROCK, Choices.PAPER, Choices.SCISSORS]
    const [playerChoice, setPlayerChoice] = useState('')
    const [computerChoice, setComputerChoice] = useState('')
    const [result, setResult] = useState('')
    const [score, setScore] = useState({ player: 0, computer: 0 })
    const [isGameOver, setIsGameOver] = useState(false)
    const [winner, setWinner] = useState('')

    const play = (playerSelection: string) => {
        const randomChoice = getRandomChoice(choices)
        setPlayerChoice(playerSelection)
        setComputerChoice(randomChoice)

        const winner = getWinner(playerSelection, randomChoice)
        if (winner === Results.PLAYER) {
            setResult(ResultsMessages.WIN)
            setScore((prev) => ({ ...prev, player: prev.player + 1 }))
        } else if (winner === Results.COMPUTER) {
            setResult(ResultsMessages.LOSE)
            setScore((prev) => ({ ...prev, computer: prev.computer + 1 }))
        } else {
            setResult(ResultsMessages.DRAW)
        }

        setScore((prev) => {
            if (prev.player === 3 || prev.computer === 3) {
                setIsGameOver(true)
                setWinner(prev.player === 3 ? 'Player' : 'Computer')
            }
            return prev
        })
    }

    const restartGame = () => {
        setPlayerChoice('')
        setComputerChoice('')
        setResult('')
        setScore({ player: 0, computer: 0 })
        setIsGameOver(false)
        setWinner('')
    }

    return (
        <div className="App">
            <ScoreBoard score={score} />
            {isGameOver ? (
                <GameOver winner={winner} onRestart={restartGame} />
            ) : (
                <SelectButtons choices={choices} onPlay={play} />
            )}
            <ResultDisplay
                playerChoice={playerChoice}
                computerChoice={computerChoice}
                result={result}
            />
        </div>
    )
}

export default App
