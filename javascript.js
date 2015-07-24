var food = 0;
var foodpersecond = 0;
var trapcost = 1;
var gold = 0;
var goldpersecond = 0;
var minercost = 1;

function update_total_food() {
    var e = document.getElementById("food");
    e.innerHTML = "Food: " + food;
};
function update_total_gold()	{
	var e = document.getElementById("gold");
	e.innerHTML = "Gold: " + gold;
};

document.getElementById('scavenge').onclick = function()	{
    food ++;
    update_total_food()
};
document.getElementById('minegold').onclick = function()	{
	gold ++;
	update_total_gold()
	
};
document.getElementById('trap').onclick = function()	{
	if (food < trapcost)	{
		return ;
	}
	foodpersecond ++;
	food -= trapcost;
	trapcost = trapcost + 3
	var e = document.getElementById("trap");
	e.innerHTML = "Set trap for " + trapcost + " food"
	var e2 = document.getElementById("foodpersecond");
	e2.innerHTML = "Food Income: " + foodpersecond;
	update_total_food()
	
}
document.getElementById('miner').onclick = function()	{
	if (gold < minercost)	{
		return ;
	}
	goldpersecond ++;
	gold -= minercost;
	minercost = minercost + 3
	var e = document.getElementById("miner");
	e.innerHTML = "Train miner for " + minercost + " gold"
	var e2 = document.getElementById("goldpersecond");
	e2.innerHTML = "Gold Income: " + goldpersecond;
	update_total_gold()
	
}
setInterval(function() {
    food += foodpersecond;
    update_total_food();
	gold += goldpersecond;
	update_total_gold();
},1000);