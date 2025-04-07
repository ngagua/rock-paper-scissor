import rock from '../assets/rock.png'
import paper from '../assets/paper.png'
import scissors from '../assets/scissors.png'
import { Choices } from '../App.tsx'

interface SelectButtonsProps {
    choices: Choices[]
    onPlay: (choice: string) => void
}

interface images {
    rock: string
    paper: string
    scissors: string
}

function SelectButtons({ choices, onPlay }: SelectButtonsProps) {
    const images = { rock, paper, scissors }
    return (
        <div>
            {choices.map((choice) => (
                <button
                    key={choice}
                    onClick={() => onPlay(choice)}
                    className="icon-button"
                >
                    <div className="icon-button-content">
                        <img src={images[choice as keyof images]} alt={choice} />
                        <span>{choice.charAt(0).toUpperCase() + choice.slice(1)}</span>
                    </div>
                </button>
            ))}
        </div>
    )
}

export { SelectButtons }
