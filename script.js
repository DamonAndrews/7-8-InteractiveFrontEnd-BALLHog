const options = {
  method: 'GET',
  headers: {
      'X-RapidAPI-Key': '76793e784dmshefceec1f7ea5020p1ffaf5jsn59003a39243a',
      "X-RapidAPI-Host": 'api-nba-v1.p.rapidapi.com'
  }
}

var ppg = document.getElementById("pointsPerGame");
var rpg = document.getElementById("reboundsPerGame");
var apg = document.getElementById("assistsPerGame");
<<<<<<< HEAD
var team = "Los Angeles Lakers";
var player = 'Booker';
=======
var team = 'Phoenix Suns';
var player = "Booker";
<<<<<<< HEAD
>>>>>>> edd69038a05cb53ae3fc36c588b4351e9719d044
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
=======

var teamIdSearchUrl = 'https://api-nba-v1.p.rapidapi.com/teams?name=' + team;

// var playerSearchurl = "https://api-nba-v1.p.rapidapi.com/players?&team=28&season=2021&id=" + player;

var url = 'https://api-nba-v1.p.rapidapi.com/players/statistics?season=2021&team=' + response.response[0].id + //response.response[0].id;


  
// Fetch the team Array//To get team ID
fetch(teamIdSearchUrl, options)
>>>>>>> 36a5c6718b948f6ab255918a5f5e56f1312c0407
    .then(response => response.json())
    .then(response => {
    console.log("team",response)

//Creates a variable with the Team ID, a URL
  var teamSearchUrl = 'https://api-nba-v1.p.rapidapi.com/players/statistics?season=2021&team=' + response.response[0].id 
  
var superIndivPlayerSearch = 'https://api-nba-v1.p.rapidapi.com/players/statistics?id=

var extraPart = &team=1&season=2021

//Fetch the new URL from above to display all info for the specific team
fetch(teamSearchUrl, options)
    .then(response => response.json())
    .then(response => {
      console.log("allGamesofAllPlayers",response)

//Creates a variable/Fetchable URL with the player's last name



//Feth the new URL from above to display all info for the specific player
fetch(indivPlayerSearch, options)
    .then(response => response.json())
    .then(response => {
      console.log("Players",response)

    
      
  



  




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
