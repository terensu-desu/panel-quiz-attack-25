const table = document.getElementById("play-space");
const row = document.getElementById("button-row");
const teams = ["green", "pink", "orange", "purple", "blue", "red"];
let selectedTeam = "";
let scoreCount = {
  green: 0,
  pink: 0,
  orange: 0,
  purple: 0,
  blue: 0,
  red: 0
};

function handleSquareClick(e) {
  e.target.className = selectedTeam;
  handleScoreUpdate();
}

function handleButtonClick(e) {
  for(button of document.getElementsByClassName("btn")) {
    button.classList.remove("active");
  }
	selectedTeam = `${e.target.id}`;
  e.target.classList.add("active");
}

function handleScoreUpdate() {
	for(let team of teams) {
  	scoreCount[team] = table.getElementsByClassName(team).length;
  }
  handleScoreDisplay();
}

function handleScoreDisplay() {
	document.getElementById("green-score").innerHTML = scoreCount.green;
  document.getElementById("pink-score").innerHTML = scoreCount.pink;
  document.getElementById("orange-score").innerHTML = scoreCount.orange;
  document.getElementById("purple-score").innerHTML = scoreCount.purple;
  document.getElementById("blue-score").innerHTML = scoreCount.blue;
  document.getElementById("red-score").innerHTML = scoreCount.red;
}

handleScoreUpdate();
table.addEventListener("click", handleSquareClick);
row.addEventListener("click", handleButtonClick);
document.getElementById("erase").addEventListener("click", handleButtonClick);