window.onload = function () {
	var classType = sessionStorage.getItem("classType");
	
	var simple_melee = "<select><option value=\"Club\">Club</option>";
	simple_melee += "<option value=\"Dagger\">Dagger</option>";
	simple_melee += "<option value=\"Greatclub\">Greatclub</option>";
	simple_melee += "<option value=\"Handaxe\">Handaxe</option>";
	simple_melee += "<option value=\"Javelin\">Javelin</option>";
	simple_melee += "<option value=\"Light Hammer\">Light Hammer</option>";
	simple_melee += "<option value=\"Mace\">Mace</option>";
	simple_melee += "<option value=\"Quarterstaff\">Quarterstaff</option>";
	simple_melee += "<option value=\"Sickle\">Sickle</option>";
	simple_melee += "<option value=\"Spear\">Spear</option></select>";
	
	var martial_melee = "<select><option value=\"Battleaxe\">Battleaxe</option>";
	martial_melee += "<option value=\"Flail\">Flail</option>";
	martial_melee += "<option value=\"Glaive\">Glaive</option>";
	martial_melee += "<option value=\"Greataxe\">Greataxe</option>";
	martial_melee += "<option value=\"Greatsword\">Greatsword</option>";
	martial_melee += "<option value=\"Halberd\">Halberd</option>";
	martial_melee += "<option value=\"Lance\">Lance</option>";
	martial_melee += "<option value=\"Longsword\">Longsword</option>";
	martial_melee += "<option value=\"Maul\">Maul</option>";
	martial_melee += "<option value=\"Morningstar\">Morningstar</option>";
	martial_melee += "<option value=\"Pike\">Pike</option>";
	martial_melee += "<option value=\"Rapier\">Rapier</option>";
	martial_melee += "<option value=\"Scimitar\">Scimitar</option>";
	martial_melee += "<option value=\"Shortsword\">Shortsword</option>";
	martial_melee += "<option value=\"Trident\">Trident</option>";
	martial_melee += "<option value=\"War pick\">War pick</option>";
	martial_melee += "<option value=\"Warhammer\">Warhammer</option>";
	martial_melee += "<option value=\"Whip\">Whip</option></select>";
	
	if (classType=="fighter") {
		document.getElementById("choice1").innerHTML = "<form><input type=\"radio\" name=\"one\" value=\"Chainmail\">Chainmail<br><input type=\"radio\" name=\"one\" value=\"Leather\">Leather Armour + Longbow + 20 Arrows</form>";
		document.getElementById("choice2").innerHTML = "<form><input type=\"radio\" name=\"two\" value=\"WeaponAndShield\">" + martial_melee + " + Shield <br><input type=\"radio\" name=\"two\" value=\"TwoWeapons\">" + martial_melee + "" + martial_melee + "</form>";
		document.getElementById("choice3").innerHTML = "<form><input type=\"radio\" name=\"three\" value=\"Crossbow\">Light Crossbow + 20 Bolts<br><input type=\"radio\" name=\"three\" value=\"TwoHandaxes\">Two Handaxes</form>";
		document.getElementById("choice4").innerHTML = "<form><input type=\"radio\" name=\"four\" value=\"Dungeoneer\">Dungeoneer's Pack<br><input type=\"radio\" name=\"four\" value=\"Explorer\">Explorer's Pack</form>";
	} else if (classType=="rogue") {
		document.getElementById("choice1").innerHTML = "<form><input type=\"radio\" name=\"one\" value=\"rapier\">Rapier<br><input type=\"radio\" name=\"one\" value=\"shortsword\">Short Sword</form>";
		document.getElementById("choice2").innerHTML = "<form><input type=\"radio\" name=\"two\" value=\"shortbow\">Shortbow + 20 Arrows<br><input type=\"radio\" name=\"two\" value=\"shortsword\">Short Sword</form>";
		document.getElementById("choice3").innerHTML = "<form><input type=\"radio\" name=\"three\" value=\"Dungeoneer\">Dungeoneer's Pack<br><input type=\"radio\" name=\"three\" value=\"Explorer\">Explorer's Pack<br><input type=\"radio\" name=\"three\" value=\"Burglar\">Burglar's Pack</form>";
		document.getElementById("choice4").innerHTML = "Leather armor, two daggers, and thieves' tools";
	} else if (classType=="barbarian") {
		document.getElementById("choice1").innerHTML = "<form><input type=\"radio\" name=\"one\" value=\"greataxe\">Greataxe<br><input type=\"radio\" name=\"one\" value=\"martialmelee\">" + martial_melee + "</form>";
		document.getElementById("choice2").innerHTML = "<form><input type=\"radio\" name=\"two\" value=\"handaxes\">Two Handaxes<br><input type=\"radio\" name=\"two\" value=\"simplemelee\">"+simple_melee+"</form>";
		document.getElementById("choice3").innerHTML = "An Explorer's Pack";
		document.getElementById("choice4").innerHTML = "Four Javelins";
	}
}

function backStep(thismod){
    location.href ="stats.html"
}
