var progress = 0
var pps = 1
var ppstracker = 1
var goldpertick = 1
var goldcount = 2
var autocollect = false
var souls = 0
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
		
		pps += 1;
		ppstracker += 1;
		if (pps == 101){
			pps = 1
			goldpertick = goldpertick * 100
			souls += 1
			document.getElementById('goldpertick').innerHTML = "Gold Per Tick: " + goldpertick
			document.getElementById('souls').innerHTML = "Souls: " + souls
		}
		document.getElementById('productionrate').innerHTML = "Production Rate: " + ppstracker;
		increasegoldproductionrateprice = Math.ceil(Math.pow(ppstracker,3)*0.1*(souls + 1))
		golddisplay.innerHTML = "Gold: " + goldcount;
		
		
		document.getElementById('speed').innerHTML = "Increase Production Rate for " + increasegoldproductionrateprice + " gold";
	}
	
}
document.getElementById('amount').onclick = function()	{
	if (goldcount > increasegoldamountrateprice - 1)	{
		goldcount -= increasegoldamountrateprice
		golddisplay.innerHTML = "Gold: " + goldcount;
		increasegoldamountrateprice += increasegoldamountrateprice * (2 + souls)
		goldpertick = goldpertick * 2
		document.getElementById('goldpertick').innerHTML = "Gold Per Tick: " + goldpertick
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


	