window.onload = function() {
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
function nextStep(thismod){
    location.href = "stats.html";
}
function backStep(thismod){
    location.href ="main.html";
}
