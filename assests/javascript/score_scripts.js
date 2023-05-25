var listEl = document.getElementById("score_list");
var userInfo = JSON.parse(localStorage.getItem("user_score"));

function scoreList(){
    var text = document.createElement("li");
    text.textContent = userInfo.initails + " " + userInfo.score;
    listEl.append(text);
}
