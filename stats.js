window.onload = function () {
	var options = "";
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
    if (points <= 27){
        document.getElementById("incorrectPoints").innerHTML = "Good";
    }else{
        document.getElementById("incorrectPoints").innerHTML = "You spent too many points";
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
    var modVal = parseInt((thisMod.options[thisMod.selectedIndex].value-10)/2);
    if (modVal >= 0){
	   document.getElementById(thisMod.id+"Mod").innerHTML = "+" + modVal;
    }else{
        document.getElementById(thisMod.id+"Mod").innerHTML = "" + modVal;
    }
}
