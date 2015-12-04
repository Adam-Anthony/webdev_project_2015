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
    
    var temp;
    if (sessionStorage.getItem("str") !== null){
        temp = sessionStorage.getItem("str");
        document.getElementById('strSelect').value = sessionStorage.getItem("str");
        document.getElementById('strSelectMod').innerHTML = convertModValue(temp);
        document.getElementById('strSelectPoints').innerHTML = convertPointBuy(temp);
    }
    if (sessionStorage.getItem("dex") !== null){
        temp = sessionStorage.getItem("dex");
        document.getElementById('dexSelect').value = sessionStorage.getItem("dex");
        document.getElementById('dexSelectMod').innerHTML = convertModValue(temp);
        document.getElementById('dexSelectPoints').innerHTML = convertPointBuy(temp);
    }
    if (sessionStorage.getItem("wis") !== null){
        temp = sessionStorage.getItem("wis");
        document.getElementById('wisSelect').value = sessionStorage.getItem("wis");
        document.getElementById('wisSelectMod').innerHTML = convertModValue(temp);
        document.getElementById('wisSelectPoints').innerHTML = convertPointBuy(temp);
    }
    if (sessionStorage.getItem("int") !== null){
        temp = sessionStorage.getItem("int");
        document.getElementById('intSelect').value = temp;
        document.getElementById('intSelectMod').innerHTML = convertModValue(temp);
        document.getElementById('intSelectPoints').innerHTML = convertPointBuy(temp);
    }
    if (sessionStorage.getItem("cha") !== null){
        temp = sessionStorage.getItem("cha");
        document.getElementById('chaSelect').value = temp;
        document.getElementById("chaSelectMod").innerHTML = convertModValue(temp);
        document.getElementById("chaSelectPoints").innerHTML = convertPointBuy(temp);
    }
    if (sessionStorage.getItem("con") !== null){
        temp = sessionStorage.getItem("con");
        document.getElementById('conSelect').value = sessionStorage.getItem("con");
        document.getElementById('conSelectMod').innerHTML = convertModValue(temp);
        document.getElementById('conSelectPoints').innerHTML = convertPointBuy(temp);
    }
    document.getElementById("incorrectPoints").innerHTML = "You have spent " + getPointsSpent() + "/27 points";
}

//Implement a system to check the points and make sure they don't go over before proceeding to next phase.
function nextStep(thisMod) {
    //Grab the values and map out the total spent points
    var points = getPointsSpent();
    
    if (points == 27){
        location.href = "equipment.html";
    }else if (points <= 27){
        var tmpText = "You have " + (27-points) + " points left.";
        document.getElementById("incorrectPoints").innerHTML = tmpText;
        if (confirm(tmpText + " Are you sure you want to continue?")){
            location.href = "equipment.html";
        }
    }else{
        document.getElementById("incorrectPoints").innerHTML = "You spent too many points (" + points + "/27)";
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
    var modVal = convertModValue(rawVal)
    document.getElementById(thisMod.id+"Mod").innerHTML = modVal;
    document.getElementById(thisMod.id+"Points").innerHTML = convertPointBuy(rawVal);
    
    document.getElementById("incorrectPoints").innerHTML = ('You have spent ' + getPointsSpent() + '/27 points');
    
}

function getPointsSpent(){
    var points = 0;
    points += parseInt(document.getElementById("strSelectPoints").innerHTML);
    points += parseInt(document.getElementById("dexSelectPoints").innerHTML);
    points += parseInt(document.getElementById("wisSelectPoints").innerHTML);
    points += parseInt(document.getElementById("intSelectPoints").innerHTML);
    points += parseInt(document.getElementById("chaSelectPoints").innerHTML);
    points += parseInt(document.getElementById("conSelectPoints").innerHTML);
    return points;
}

function convertModValue(value){
    var modReturn = 0;
    var modVal = parseInt((value-10)/2);
    if (modVal >= 0 && value >=10){
	   modReturn = "+" + modVal;
    }else{
        modVal = parseInt(modVal/2) - 1;
        modReturn = "" + modVal;
    }
    return modReturn;
}