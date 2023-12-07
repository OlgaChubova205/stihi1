
document.querySelector("#search").onclick = function(){ 
    let love = "о любви время летит";
    let frendship = "о дружбе есть только сейчас";
    let philosophy = "философия мысли";     
    let str = document.querySelector("#search-input").value;
    if (str.length > 2){
        if(love.indexOf(str) != -1){
            location.href = "/page1/";
        }
        else if (frendship.indexOf(str) != -1){
            location.href = "/page2/";
        }
        else if (philosophy.indexOf(str) != -1){
            location.href = "/page3/";
        }
    }

}

  