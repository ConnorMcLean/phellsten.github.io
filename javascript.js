var food = 0;
var foodpersecond = 0;
var trapcost = 1;

function update_total_food() {
    var e = document.getElementById("food");
    e.innerHTML = "Food: " + food;
};

document.getElementById('scavenge').onclick = function()	{
    food ++;
    update_total_food()
};

document.getElementById('trap').onclick = function()	{
	if (food < trapcost)	{
		return alert("you can't afford that!");
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
setInterval(function() {
    food += foodpersecond;
    update_total_food();
},1000);