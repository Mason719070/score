function epdating_score_board () {
    OLED.clear()
    OLED.writeStringNewLine("player 1 score" + player_1_score)
    OLED.writeStringNewLine("player 1 score" + player_1_score)
    OLED.writeStringNewLine("ties" + number_of_ties)
    OLED.writeStringNewLine("number of rounds played" + number_of_rounds_played)
}
let player_1_score = 0
let number_of_ties = 0
let number_of_rounds_played = 0
OLED.init(128, 64)
OLED.writeStringNewLine("come on boy wanna play a game")
number_of_rounds_played = 0
number_of_ties = 0
player_1_score = 0
let player_2_score = 0
