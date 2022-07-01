const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '76793e784dmshefceec1f7ea5020p1ffaf5jsn59003a39243a',
        "X-RapidAPI-Host": 'api-nba-v1.p.rapidapi.com'
    }
}
    var startBtn = document.getElementById("goBtn")
    var ppg = document.getElementById("pointsPerGame");
    var rpg = document.getElementById("reboundsPerGame");
    var apg = document.getElementById("assistsPerGame");
    var bpg = document.getElementById("blocksPerGame")
    var spg = document.getElementById("stealsPerGame")

    var team = 'Phoenix Suns';
    var player = "Booker";
  
    var teamSearchUrl = 'https://api-nba-v1.p.rapidapi.com/teams?name=' + team; 
  
    fetch(teamSearchUrl, options)
        .then(response => response.json())
        .then(response => {
        console.log("team info",response)

            var responseTeam = response.response[0].id  

            var playersOnTeamSearchUrl = "https://api-nba-v1.p.rapidapi.com/players?&team=" + responseTeam + "&season=2021" + "&name=" + player
    
    fetch(playersOnTeamSearchUrl, options)
        .then(response => response.json())
        .then(response => {
        console.log("player info",response)
  
            var responsePlayer = response.response[0].id
        
            var selectedPlayerAndTeamUrl = "https://api-nba-v1.p.rapidapi.com/players/statistics?id=" + responsePlayer + "&team=" + responseTeam + "&season=2021"

    fetch(selectedPlayerAndTeamUrl, options)
        .then(response => response.json())
        .then(response => {
            console.log("player games",response)

            var averagePointsPerGame =  avg(response.response,"points")
                console.log("ppg" , averagePointsPerGame);
                ppg.textContent = averagePointsPerGame
          
            var averageRebPerGame =  avg(response.response,"totReb")
                console.log("rpg" , averageRebPerGame);
                rpg.textContent = averageRebPerGame
  
            var averageAstPerGame =  avg(response.response, "assists")
                console.log("apg" , averageAstPerGame);
                apg.textContent = averageAstPerGame

            var averageBlocksPerGame =  avg(response.response, "blocks")
                console.log("bpg" , averageBlocksPerGame);
                bpg.textContent = averageBlocksPerGame

            var averageStealsPerGame =  avg(response.response, "steals")
                console.log("spg" , averageStealsPerGame);
                spg.textContent = averageStealsPerGame
})})})

function avg(array , property){
    let sum = array.reduce(function (cumulativePoints,thisGame) {
        return cumulativePoints + thisGame[property]
    }, 0)
        return (sum/array.length).toFixed(2)
}

    fetch(teamSearchUrl, options)
        .then(response => response.json())
        .then(response => {
        console.log("Team info again", response)

        var allPlayersListUrl = "https://api-nba-v1.p.rapidapi.com/players?season=2021&team=" + response.response[0].id

    fetch(allPlayersListUrl, options)
        .then(response => response.json())
        .then(response => {
        console.log("All players on team", response)   
        
        // var allPlayersOnTeam = allPlayers(response.response.lastname)

        // console.log("All players on team" , allPlayersOnTeam)

})})

// function allPlayers (array){
//     let sum = array.reduce(function(cumulativePlayersNames, Players){  
        // return cumulativePlayersNames + Players.response.response[0].lastname
//         }, 0)
//         return (sum)
// }