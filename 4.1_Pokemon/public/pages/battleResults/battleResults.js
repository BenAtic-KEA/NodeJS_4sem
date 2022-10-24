

fetch("/api/battleResults/winsandlosses")
.then(res => res.json())
.then(data => {
    const totalWins = document.getElementById("wins");
    const totalLosses = document.getElementById("losses"); 
    totalWins.innerText = data.wins
    totalLosses.innerText = data.losses
})