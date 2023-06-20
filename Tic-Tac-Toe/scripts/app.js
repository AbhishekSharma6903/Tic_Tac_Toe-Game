let editedPlayer =0;
let activePlayer =0;
const players = [
    {name : '', symbol:'X'},
    {name: '', symbol:'O'}
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutputElement = document.getElementById('Config_errors')

const editPlayer1BtnElement = document.getElementById('edit_player_1_btn');
const editPlayer2BtnElement = document.getElementById('edit_player_2_btn');
const cancelConfigBtnElement = document.getElementById('cancel_config_btn')
const gameAreaElement =document.getElementById('active-game');
const startGameBtnElement = document.getElementById('start_game_btn'); 
const gameFieldElements = document.querySelectorAll('#game-board li')


editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);
cancelConfigBtnElement.addEventListener('click',closePlayerConfig)
backdropElement.addEventListener('click',closePlayerConfig)
formElement.addEventListener('submit', savePlayerConfig)

startGameBtnElement.addEventListener('click', startNewGame);

for(const FieldElement of gameFieldElements){
    FieldElement.addEventListener('click',selectGameField)
}