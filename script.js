var ppg = document.getElementById("pointsPerGame");
var rpg = document.getElementById("reboundsPerGame");
var apg = document.getElementById("assistsPerGame");
var team = 'Phoenix Suns';
var player = "Booker";
var teamSearchurl = 'https://api-nba-v1.p.rapidapi.com/teams?name=' + team;
var playerSearchurl = "https://api-nba-v1.p.rapidapi.com/players?&team=28&season=2021&id=" + player;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '76793e784dmshefceec1f7ea5020p1ffaf5jsn59003a39243a',
        "X-RapidAPI-Host": 'api-nba-v1.p.rapidapi.com'
    }
  }
fetch(teamSearchurl, options)
    .then(response => response.json())
    .then(response => {
    console.log("team",response)

  
fetch(player, options)
    .then(response => response.json())
    .then(response => {
        console.log("Players",response)

    
    var url = 'https://api-nba-v1.p.rapidapi.com/players/statistics?season=2021&team=' + response.response[0].id + //response.response[0].id;
  
  fetch(url, options)
    .then(response => response.json())
    .then(response => {
        console.log("allGamesofAllPlayers",response)


  




  //       var url2 = 'https://api-nba-v1.p.rapidapi.com/players/statistics?team=' + response.response[0].id + "&" + player + '&season=2020';

  // fetch(url2, options)
  //   .then(response => response.json())
  //   .then(response => {
  //           console.log("player", response)      
        
        var averagePointsPerGame =  avgPoint(response.response)
        console.log(averagePointsPerGame);
       ppg.textContent = averagePointsPerGame
        
        var averageRebPerGame =  avgReb(response.response)
        console.log(averageRebPerGame);
        rpg.textContent = averageRebPerGame

        var averageAstPerGame =  avgAst(response.response)
        console.log(averageAstPerGame);
        apg.textContent = averageAstPerGame
  // }) 
  })})})

function avgPoint(array){
    let sum = array.reduce(function (cumulativePoints,thisGame) {
    return cumulativePoints + thisGame.points
  }, 0)
   return (sum/array.length).toFixed(2)
}

function avgReb(array){
  let sum = array.reduce(function (cumulativeRebounds,thisGame) {
  return cumulativeRebounds + thisGame.totReb
  }, 0)
 return (sum/array.length).toFixed(2)
}

function avgAst(array){
  let sum = array.reduce(function (cumulativeAssists,thisGame) {
  return cumulativeAssists + thisGame.assists
  }, 0)
 return (sum/array.length).toFixed(2)
}