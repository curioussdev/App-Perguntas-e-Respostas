const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementsByClassName("fScore")
const mostRecentScore = localStorage.getItem('mostRecentScore');

localStorage.setItem("highScores", []);

console.log(localStorage.setItem("highScores"));

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
} )

saveHighScore = e => {
    console.log('Clicra no botão salvar')
    e.preventDefault()
}