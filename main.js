let player_score = 0
let computer_score = 0
let playcount = 0
let button1 = document.querySelector("#btn")

function flipcoin(){
    var flip = Math.floor(Math.random() * 2)
    if (flip === 0) return "heads"
    else return "tails"
}

button1.addEventListener('click', () => {
    if(playcount >= 5){
        player_score = 0
        computer_score = 0
        playcount = 0
    }
    let guess = document.querySelector("#guesstxt").value
    let result = flipcoin()

    if (result === guess) {
        player_score += 1
        document.getElementById("message").innerHTML = "Your score is " + player_score
        document.getElementById("computerscore").innerHTML = "computer_score is " + computer_score
    } else {
        computer_score ++
        document.getElementById("message").innerHTML = result + "Your score is " + player_score
            document.getElementById("computerscore").innerHTML = "computer_score is " + computer_score
    }
    playcount += 1
    console.log(playcount)
})