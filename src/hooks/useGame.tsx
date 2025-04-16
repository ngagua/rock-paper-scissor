import { useState } from 'react'
import { getRandomChoice, getWinner } from '../lib/helpers/gameLogic.ts'
import { choices } from '../lib/config/constants.ts'
import { Results, ResultsMessages } from '../types/types.ts'

export function useGame() {
    const [state, setState] = useState({
        playerChoice: '',
        computerChoice: '',
        result: '',
        score: { player: 0, computer: 0 },
        isGameOver: false,
        winner: '',
    })

    const play = (playerSelection: string) => {
        const randomChoice = getRandomChoice(choices)
        const winner = getWinner(playerSelection, randomChoice)

        const newScore = { ...state.score }
        let resultMessage = ResultsMessages.DRAW

        if (winner === Results.PLAYER) {
            newScore.player += 1
            resultMessage = ResultsMessages.WIN
        } else if (winner === Results.COMPUTER) {
            newScore.computer += 1
            resultMessage = ResultsMessages.LOSE
        }

        const isGameOver = newScore.player === 3 || newScore.computer === 3
        const finalWinner = isGameOver
            ? newScore.player === 3
                ? 'Player'
                : 'Computer'
            : ''

        setState({
            playerChoice: playerSelection,
            computerChoice: randomChoice,
            result: resultMessage,
            score: newScore,
            isGameOver,
            winner: finalWinner,
        })
    }

    const restartGame = () => {
        setState({
            playerChoice: '',
            computerChoice: '',
            result: '',
            score: { player: 0, computer: 0 },
            isGameOver: false,
            winner: '',
        })
    }

    return {
        ...state,
        play,
        restartGame,
    }
}
