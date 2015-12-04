window.onload = function() {
    var classData = sessionStorage.getItem("classType");
	var equipData = sessionStorage.getItem("classEquipment");
	var conData = sessionStorage.getItem("classCon");
	var dexData = sessionStorage.getItem("classDex");
	var wisData = sessionStorage.getItem("classWis");
	var intData = sessionStorage.getItem("classInt");
	var strData = sessionStorage.getItem("classStr");
	var chaData = sessionStorage.getItem("classCha");
	document.getElementById("equip1").innerHTML = equipData;
	document.getElementById("class").innerHTML = classData;
	document.getElementById("con").innerHTML = conData;
	document.getElementById("dex").innerHTML = dexData;
	document.getElementById("str").innerHTML = strData;
	document.getElementById("cha").innerHTML = chaData;
	document.getElementById("wis").innerHTML = wisData;
	document.getElementById("int").innerHTML = intData;
	
}

function backStep(thismod){
    location.href ="equipment.html"
}
