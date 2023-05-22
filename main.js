import { shuffleCards } from "./card.js";
import {positionCards} from './game.js'
console.log("oi")
var cards = shuffleCards()

for(var i = 0; i< cards.length; i++){
    positionCards(cards[i])
}