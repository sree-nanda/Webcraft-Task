
//Object Array to hold quotes, sources, citaitons and years
const data = {
	"quotes": [
		{
			"web":"Web",
			"dev":"Developer"
			 
		},
		{
			"web":"UI/UX",
			"dev":"Designer"
			
		},
		{
			"web":"Tech",
			"dev":"Ethusiast"
			
		}
    ]
};

  
const qoutes = data.quotes;

function getRandomQuote() {
	arraysize = qoutes.length;
	random = Math.random() * arraysize;
	randomnumber = Math.floor(random);
	return qoutes[randomnumber];

}



function printOutput() {
	var Quote = getRandomQuote();
	let web = document.getElementById("web");
	let dev = document.getElementById("dev");
	web.innerHTML = Quote.web;
	dev.innerHTML = Quote.dev;

}

window.setInterval(printOutput, 1500);


