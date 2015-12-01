window.onload = function() {
    var temp = document.getElementById("temp");
    var getSessData = sessionStorage.getItem("classType");
    temp.innerHTML= getSessData;
}
function nextStep(thismod){
    location.href = "stats.html";
}
function backStep(thismod){
    location.href ="main.html";
}