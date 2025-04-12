// მსგავსი დამხმარე ფუნქციებისთბის /lib/helpers/*.ts ლოგიკური ადგილი იქნება
// რეაქატი არ გვახვევს თავს რაიმე კონკრეტუკლ ფოლდერ სტრუქრურას, ჯასთ ჩვენთვის გვჭირდება მარტივი წასაკითხია

import { Choices, Results } from '../App.tsx'

export const getWinner = (player: string, computer: string): Results => {
    if (player === computer) return Results.DRAW

    if (
        (player === Choices.ROCK && computer === Choices.SCISSORS) ||
        (player === Choices.PAPER && computer === Choices.ROCK) ||
        (player === Choices.SCISSORS && computer === Choices.PAPER)
    ) {
        return Results.PLAYER
    }

    return Results.COMPUTER
}

export const getRandomChoice = (choices: string[]): string => {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

// თუ რაიმე იუზქეისი არ გვაქ , ყოველტვის ჯობია ნეიმდ ექსპტორები გავაკეთოთ,  სადაც შეიმპორტდება იგივე სახელით ავიღებთ
// export {getWinner,getRandomChoice}
// import {getWinner} from
