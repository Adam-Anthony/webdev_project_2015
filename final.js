window.onload = function() {
    var classData = sessionStorage.getItem("classType");
	var equipData = sessionStorage.getItem("classEquipment");
	var conData = sessionStorage.getItem("con");
	var dexData = sessionStorage.getItem("dex");
	var wisData = sessionStorage.getItem("wis");
	var intData = sessionStorage.getItem("int");
	var strData = sessionStorage.getItem("str");
	var chaData = sessionStorage.getItem("cha");
	document.getElementById("equip1").innerHTML = equipData;
	document.getElementById("con").innerHTML = conData;
	document.getElementById("dex").innerHTML = dexData;
	document.getElementById("str").innerHTML = strData;
	document.getElementById("cha").innerHTML = chaData;
	document.getElementById("wis").innerHTML = wisData;
	document.getElementById("int").innerHTML = intData;
    document.getElementById("className").innerHTML += classData;
    
    $.getJSON('characters.json', function (data){
    var index = getClass();
        $dice = data.classType[index].hitDice;
        var hitDice = "Hit dice: 1d" + $dice;
        document.getElementById("hitDice").innerHTML = hitDice;
        
        $a = data.classType[index].armor;
        var armor = "Armor Proficiences: " + $a;
        document.getElementById("aProf").innerHTML = armor;
        
        $w = data.classType[index].weapons;
        var weapon = "Weapon Proficiences: " + $w;
        document.getElementById("wProf").innerHTML = weapon;
        
        $t = data.classType[index].tools;
        var tools = "Tool Proficiences: " + $t;
        document.getElementById("tProf").innerHTML = tools;
    });
    
}

//We did basic reading from JSON with JQuery, but if we had more time would have liked to do more with our file.


//The get class function is used to transfer the class type selected into it's queryable integer.
function getClass(){
    var compare = sessionStorage.getItem("classType");
    if (compare == "rogue"){
        return 2;
    }
    if (compare == "fighter"){
        return 1;
    }
    if (compare == "barbarian"){
        return 0;
    }
    return -1;
}

function backStep(thismod){
    location.href ="equipment.html"
}
