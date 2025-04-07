interface GameOverProps {
    winner: string
    onRestart: () => void
}

function GameOver({ winner, onRestart }: GameOverProps) {
    return (
        <div className="game-over">
            <h1>{winner} wins!</h1>
            <button onClick={onRestart}>Play Again</button>
        </div>
    )
}

export { GameOver }
