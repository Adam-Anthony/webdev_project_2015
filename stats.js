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
	
    document.getElementById("modhead").innerHTML = "JUST";
	document.getElementById("strSelectMod").innerHTML = "DO";
	document.getElementById("dexSelectMod").innerHTML = "IT";
	document.getElementById("conSelectMod").innerHTML = "JUST DO IT";
	document.getElementById("intSelectMod").innerHTML = "DON'T LET YOUR DREAMS";
	document.getElementById("wisSelectMod").innerHTML = "BECOME";
	document.getElementById("chaSelectMod").innerHTML = "DREAMS";
	
	
	
}

function modClick(thisMod) {
    var modVal = parseInt((thisMod.options[thisMod.selectedIndex].value-10)/2);
    if (modVal >= 0){
	   document.getElementById(thisMod.id+"Mod").innerHTML = "+" + modVal;
    }else{
        document.getElementById(thisMod.id+"Mod").innerHTML = "" + modVal;
    }
}
