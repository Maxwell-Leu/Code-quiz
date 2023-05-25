var listEl = document.getElementById("score_list");
var userInfo = JSON.parse(localStorage.getItem("user_score"));

function scoreList(){
    var text = document.createElement("li");
    var capital = (userInfo.initails)
    text.textContent = capital.toUpperCase() + "  Score: " + userInfo.score;
    listEl.append(text);
}

function storageClear(){
    localStorage.clear();
    location.reload();
    console.log("should be cleared");
}
