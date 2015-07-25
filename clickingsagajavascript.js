var progress = 0
var pps = 1
var goldpertick = 1
var goldcount = 0


var increasegoldproductionrateprice = 1
var increasegoldamountrateprice = 10
var pbar = document.getElementById("progressbar");
var golddisplay = document.getElementById("gold");
var clickcollectgold = document.getElementById("collectgold");

golddisplay.innerHTML = "Gold: " + goldcount;

function updateprogress()	{
    pbar.value = progress;
}
document.getElementById('collectgold').onclick = function()	{	
	if (progress > 999) {
		progress = 0
		goldcount += goldpertick
		golddisplay.innerHTML = "Gold: " + goldcount;
		updateprogress()
	}
}
document.getElementById('speed').onclick = function()	{
	if (goldcount > increasegoldproductionrateprice - 1)	{
		goldcount -= increasegoldproductionrateprice
		golddisplay.innerHTML = "Gold: " + goldcount;
		increasegoldproductionrateprice = Math.ceil(increasegoldproductionrateprice = Math.pow(pps,2) * 0.4)
		
		
		document.getElementById('speed').innerHTML = "Increase Production Rate for " + increasegoldproductionrateprice + " gold"
		pps += 1;
	}
	
}
document.getElementById('amount').onclick = function()	{
	if (goldcount > increasegoldamountrateprice - 1)	{
		goldcount -= increasegoldamountrateprice
		golddisplay.innerHTML = "Gold: " + goldcount;
		increasegoldamountrateprice += increasegoldamountrateprice * 2
		goldpertick = goldpertick * 2
		document.getElementById('amount').innerHTML = "Increase Amount Found for " + increasegoldamountrateprice + " gold";
	}
}
setInterval(function() {
    progress += pps;
	updateprogress()
	
},10);


	