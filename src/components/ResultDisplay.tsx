interface ResultDisplayProps {
    playerChoice: string
    computerChoice: string
    result: string
}

function ResultDisplay({ playerChoice, computerChoice, result }: ResultDisplayProps) {
    return (
        <div>
            <p>
                Your choice: <strong>{playerChoice || '-'}</strong>
            </p>
            <p>
                Computer's choice: <strong>{computerChoice || '-'}</strong>
            </p>
            <p>
                Result: <strong>{result || '—'}</strong>
            </p>
        </div>
    )
}

export { ResultDisplay }
