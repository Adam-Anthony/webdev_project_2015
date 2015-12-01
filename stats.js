window.onload = function () {
	var options = "";
    var selected;
	for (var i = 8; i < 16; i++) {
		if (i===10) {
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
	
    document.getElementById("modhead").innerHTML = "Modifier";
	document.getElementById("strSelectMod").innerHTML = "+0";
	document.getElementById("dexSelectMod").innerHTML = "+0";
	document.getElementById("conSelectMod").innerHTML = "+0";
	document.getElementById("intSelectMod").innerHTML = "+0";
	document.getElementById("wisSelectMod").innerHTML = "+0";
	document.getElementById("chaSelectMod").innerHTML = "+0";
    
    if (sessionStorage.getItem("str") !== null){
        document.getElementById('strSelect').value = sessionStorage.getItem("str");
    }
    if (sessionStorage.getItem("dex") !== null){
        document.getElementById('dexSelect').value = sessionStorage.getItem("dex");
    }
    if (sessionStorage.getItem("wis") !== null){
        document.getElementById('wisSelect').value = sessionStorage.getItem("wis");
    }
    if (sessionStorage.getItem("int") !== null){
        document.getElementById('intSelect').value = sessionStorage.getItem("int");
    }
    if (sessionStorage.getItem("cha") !== null){
        document.getElementById('chaSelect').value = sessionStorage.getItem("cha");
    }
    if (sessionStorage.getItem("con") !== null){
        document.getElementById('conSelect').value = sessionStorage.getItem("con");
    }
}

//Implement a system to check the points and make sure they don't go over before proceeding to next phase.
function nextStep(thisMod) {
    //Grab the values and map out the total spent points
    var points = 0;
    
    var tempObj, tempValue;
    temp = document.getElementById("strSelect");
    tempValue = temp.options[ temp.selectedIndex ].value;
    points += convertPointBuy(tempValue);
    
    temp = document.getElementById("dexSelect");
    tempValue = temp.options[ temp.selectedIndex ].value;
    points += convertPointBuy(tempValue);
    
    temp = document.getElementById("chaSelect");
    tempValue = temp.options[ temp.selectedIndex ].value;
    points += convertPointBuy(tempValue);
    
    temp = document.getElementById("intSelect");
    tempValue = temp.options[ temp.selectedIndex ].value;
    points += convertPointBuy(tempValue);
    
    temp = document.getElementById("wisSelect");
    tempValue = temp.options[ temp.selectedIndex ].value;
    points += convertPointBuy(tempValue);
    
    temp = document.getElementById("conSelect");
    tempValue = temp.options[ temp.selectedIndex ].value;
    
    points += convertPointBuy(tempValue);
    if (points == 27){
        location.href = "equipment.html";
    }else if (points <= 27){
        var tmpText = "You have " + (27-points) + " points left.";
        confirm(tmpText + " Are you sure you want to continue?")
        document.getElementById("incorrectPoints").innerHTML = tmpText;
    }else{
        document.getElementById("incorrectPoints").innerHTML = "You spent too many points (" + points + ")";
    }
}

function backStep(modval){
    location.href= "classStats.html";
}
function convertPointBuy(value){
    if(value==8){ return 0;}
    if(value==9){ return 1;}
    if(value==10){ return 2;}
    if(value==11){ return 3;}
    if(value==12){ return 4;}
    if(value==13){ return 5;}
    if(value==14){ return 7;}
    if(value==15){ return 9;}
    else{
        return 10000;
    }
}

//Called when changing the stat values
//Maybe add another column to show "points" spent, and a total of points spent to make it easy to track.
function modClick(thisMod) {
    var rawVal = thisMod.options[thisMod.selectedIndex].value;
    sessionStorage.setItem(thisMod.id.substr(0,3), rawVal);
    var modVal = parseInt((rawVal-10)/2);
    if (modVal >= 0 && rawVal >=10){
	   document.getElementById(thisMod.id+"Mod").innerHTML = "+" + modVal;
    }else{
        modVal = parseInt(modVal/2) - 1;
        document.getElementById(thisMod.id+"Mod").innerHTML = "" + modVal;
    }
    document.getElementById(thisMod.id+"Points").innerHTML = convertPointBuy(rawVal);
}
