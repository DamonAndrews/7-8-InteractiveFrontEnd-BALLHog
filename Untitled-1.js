const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '76793e784dmshefceec1f7ea5020p1ffaf5jsn59003a39243a',
        "X-RapidAPI-Host": 'api-nba-v1.p.rapidapi.com'
    }}
const options2 ={
        method: 'GET',
	headers: {
		'X-RapidAPI-Key': '76793e784dmshefceec1f7ea5020p1ffaf5jsn59003a39243a',
		'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com'
	}
}

    var startBtn = document.getElementById("goBtn");
    var ppg = document.getElementById("pointsPerGame");
    var rpg = document.getElementById("reboundsPerGame");
    var apg = document.getElementById("assistsPerGame");
    var bpg = document.getElementById("blocksPerGame");
    var spg = document.getElementById("stealsPerGame");
    var showTime1 = document.querySelector("#showTime1");
    var showTime2 = document.querySelector("#showTime2");
    var sportsTeam = document.querySelector("#allTeams");
    var ballers = document.getElementById("ballers");
    let team = " ";
    var fullNameSplit = team.split(" ");
    let nameSplit = fullNameSplit[1].toLowerCase();
    var nbaTeam = document.getElementById("teamName");
    var openingPage = document.querySelector("#openingPage");

    console.log(nameSplit)
    
    var player = "durant";
    var allPlayersList ;

    var teamSearchUrl;


sportsTeam.addEventListener("change", function() {
    team = sportsTeam.value;
    teamSearchUrl = 'https://api-nba-v1.p.rapidapi.com/teams?name=' + team;
    nbaTeam.textContent = sportsTeam.value;
})    



startBtn.addEventListener("click", tipOff) 
  
function tipOff() {
    showTime1.classList.remove("hide");
    showTime2.classList.remove("hide");
    openingPage.classList.add("hide");
    

    fetch(teamSearchUrl, options)
        .then(response => response.json())
        .then(response => {
        console.log("Team info again", response)

        var allPlayersListUrl = "https://api-nba-v1.p.rapidapi.com/players?season=2021&team=" + response.response[0].id

    fetch(allPlayersListUrl, options)
        .then(response => response.json())
        .then(response => {
        console.log("All players on team", response);
        
        var playersArray = response.response; 
        console.log(playersArray);   

        
        var allPlayersOnTeam = allPlayers(playersArray)

        console.log("All names of players list" , allPlayersOnTeam)

     

})})

function allPlayers (array){

    var allPlayersList = [];
    
    for(let i = 0; i < array.length; i++) {
        allPlayersList.push(array[i].lastname);
    }
        console.log(allPlayersList);
    
    for (let i = 0; i < allPlayersList.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = allPlayersList[i];
        ballers.appendChild(li);
    }
        return allPlayersList
}}
    
    
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

var newsArticle = 'https://nba-latest-news.p.rapidapi.com/news/team/' + nameSplit

    fetch(newsArticle, options2)
    .then(response => response.json())
    .then(response => {
    console.log("news", response)
})