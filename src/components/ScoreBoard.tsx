interface ScoreBoardProps {
    score: {
        player: number
        computer: number
    }
}

function ScoreBoard({ score }: ScoreBoardProps) {
    return (
        <div className="score-board">
            <div>
                <p>You:</p>
                <p>{score.player}</p>
            </div>
            <h2>Rock Paper Scissors</h2>
            <div>
                <p>Computer:</p>
                <p> {score.computer}</p>
            </div>
        </div>
    )
}

export { ScoreBoard }
