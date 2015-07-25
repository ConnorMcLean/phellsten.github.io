var progress = 0
var pps = 1
var goldpertick = 1
var goldcount = 0
var autocollect = false

var increasegoldproductionrateprice = 1
var increasegoldamountrateprice = 10
var pbar = document.getElementById("progressbar");
var golddisplay = document.getElementById("gold");
var clickcollectgold = document.getElementById("collectgold");

golddisplay.innerHTML = "Gold: " + goldcount;

function updateprogress()	{
    pbar.value = progress;
}
document.getElementById('autocollect').onclick = function()	{
	
	if (document.getElementById('autocollect').innerHTML == "Enable Auto Collect for 50 gold")	{
		if (goldcount < 50)	{
			return
		}	2
		goldcount -= 50
		autocollect = true;
		document.getElementById('autocollect').innerHTML = "Disable Auto Collect";
	} else {
		autocollect = false;
		document.getElementById('autocollect').innerHTML = "Enable Auto Collect for 50 gold";
	}
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
		increasegoldproductionrateprice = Math.ceil(Math.pow(pps,3)*0.1)
		golddisplay.innerHTML = "Gold: " + goldcount;
		
		
		document.getElementById('speed').innerHTML = "Increase Production Rate for " + increasegoldproductionrateprice + " gold";
		pps += 1;
		document.getElementById('productionrate').innerHTML = "Production Rate: " + pps;
		
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
	if (progress > 999) {
		if (autocollect == true) {
			progress = 0
			goldcount += goldpertick
			golddisplay.innerHTML = "Gold: " + goldcount;
			updateprogress()
		}
	}
	
},10);


	