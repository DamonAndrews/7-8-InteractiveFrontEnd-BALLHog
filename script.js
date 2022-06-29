const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '76793e784dmshefceec1f7ea5020p1ffaf5jsn59003a39243a',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

fetch('https://api-nba-v1.p.rapidapi.com/players/statistics?id=236&season=2020', options)
	.then(response => response.json())
	.then(response => {
        console.log(response)

    var average =   avgPoint(response.response)
    console.log(average)
    })
	.catch(err => console.error(err));

function avgPoint(array){
    let sum = array.reduce(function (previousGamesTotal, currentGame) {
    return previousGamesTotal + currentGame.points
  }, 0)
    return sum/array.length
}