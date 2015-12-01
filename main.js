function chooseClass(thismod, classChoice){
    sessionStorage.setItem('classType', classChoice);
    location.href = "classStats.html";
}