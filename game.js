export function positionCards(imgsSrc){
    console.log("dentro do positionCards")
    console.log(imgsSrc)
    let game_board = document.getElementById("game-board")
    let new_card = document.createElement("img")
    new_card.classList.add('card')
    new_card.src=imgsSrc
    game_board.appendChild(new_card)
}

export function turnCard(){
    
}