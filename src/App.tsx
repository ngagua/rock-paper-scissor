import './App.css'
import { useState } from 'react'
import { SelectButtons } from './components/SelectButtons.tsx'
import { ScoreBoard } from './components/ScoreBoard.tsx'
import { ResultDisplay } from './components/ResultDisplay.tsx'
import { getRandomChoice, getWinner } from './utils/gameLogic.ts'
import { GameOver } from './components/GameOver.tsx'

// ტაიპსკრიტპის სპეციფიური კონფიგურაციისთვის იდელაური იქნება /types/*.ts
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
    // კომპონენტის ყოველ რენდერზე თავიდან შექმნის მემორიში choices, ჯობია App სკოუპის გარედან აიღო
    // მსგავსი სტატიკური კონფიგურაციისთვის /lib/config/*.ts იდეალური ადგილი იქნბება
    const choices = [Choices.ROCK, Choices.PAPER, Choices.SCISSORS]
    // ქასთომ ჰუკისთვის იდეალური ადგილია
    // cons {playerChoice, computerChoice,result,score,isGameOver,winner, restartGame, handleStateChange} = useGame()
    // ერთ სტეიტში შეგიძლია გააერთიანო
    // საჭირო სტეიტს და მეთოდებს ამოიღებ, მაგ restartGame()
    const [playerChoice, setPlayerChoice] = useState('')
    const [computerChoice, setComputerChoice] = useState('')
    const [result, setResult] = useState('')
    const [score, setScore] = useState({ player: 0, computer: 0 })
    const [isGameOver, setIsGameOver] = useState(false)
    const [winner, setWinner] = useState('')

    /*
        უმჯობესია ფუნცქციის დეკლარაცია გამოიყენო ვიდრე ექსპრეშენი
        hoisting ერორს არიდებ თავიდან, ყოველ რენდერზე არ მოხდება ფუნქციის რედეკლარაცია
        უფრო კითხვადი და გასაგებია
        function play(){}
    */
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

        if (score.player === 2 || score.computer === 2) {
            setIsGameOver(true)
            setWinner(score.player === 2 ? 'Player' : 'Computer')
        }
    }
    // აქაც ფუნქციის დეკლარაცია
    const restartGame = () => {
        setPlayerChoice('')
        setComputerChoice('')
        setResult('')
        setScore({ player: 0, computer: 0 })
        setIsGameOver(false)
        setWinner('')
    }

    return isGameOver ? (
        <div>
            <GameOver winner={winner} onRestart={restartGame} />
        </div>
    ) : (
        <div className="App">
            <ScoreBoard score={score} />
            <SelectButtons choices={choices} onPlay={play} />
            <ResultDisplay
                playerChoice={playerChoice}
                computerChoice={computerChoice}
                result={result}
            />
        </div>
    )
}
// named export ი ჯობია სადაც შეაიმპორტებ იგივე სახელით აიღებ import {App} from
// export {App}
export default App
