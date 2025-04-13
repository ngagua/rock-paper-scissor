import './App.css'
import { SelectButtons } from './components/SelectButtons.tsx'
import { ScoreBoard } from './components/ScoreBoard.tsx'
import { ResultDisplay } from './components/ResultDisplay.tsx'
import { GameOver } from './components/GameOver.tsx'
import { choices } from './lib/config/constants.ts'
import { useGame } from './hooks/useGame.tsx'

function App() {
    const {
        playerChoice,
        computerChoice,
        result,
        score,
        isGameOver,
        winner,
        play,
        restartGame,
    } = useGame()

    return (
        <div className="App">
            <ScoreBoard score={score} />
            {isGameOver ? (
                <GameOver winner={winner} onRestart={restartGame} />
            ) : (
                <SelectButtons choices={choices} onPlay={play} />
            )}
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

export { App }
