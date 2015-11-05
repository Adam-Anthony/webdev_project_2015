window.onload = function() {
	var options = "";

	for (var i = 4; i < 21; i++) {
		if (i==10) {
			options += "<option selected=\"selected\">"+i+"</option>";
		} else {
			options += "<option value="+i+">"+i+"</option>";
		}
	}

	document.getElementById("strSelect").innerHTML = options;
	document.getElementById("dexSelect").innerHTML = options;
	document.getElementById("conSelect").innerHTML = options;
	document.getElementById("intSelect").innerHTML = options;
	document.getElementById("wisSelect").innerHTML = options;
	document.getElementById("chaSelect").innerHTML = options;
	
	document.getElementById("strSelectMod").innerHTML = "DO IT";
	document.getElementById("dexSelectMod").innerHTML = "JUST DO IT";
	document.getElementById("conSelectMod").innerHTML = "DON'T LET YOUR DREAMS";
	document.getElementById("intSelectMod").innerHTML = "BECOME DREAMS";
	document.getElementById("wisSelectMod").innerHTML = "YESTERDAY YOU SAID TOMMOROW";
	document.getElementById("chaSelectMod").innerHTML = "SO JUST DO IT";
	
	
	
}

function modClick(thisMod) {
	document.getElementById(thisMod.id+"Mod").innerHTML = "+"+((thisMod.options[thisMod.selectedIndex].value-10)/2);
}
