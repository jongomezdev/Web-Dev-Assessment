// *************** Grab DOM Elements ***************
const highScoreList = document.getElementById("highScores");
const clearScores = document.getElementById("clear-scores");

// ************* show scores function *****************
function runScores() {
  savedScores = JSON.parse(localStorage.getItem("scores"));
  if (savedScores !== null) {
    scoreList = savedScores;
  }
  showScores();
}

function showScores() {
  if (savedScores !== null) {
    scoreList.sort((a, b) => {
      return a.newScore - b.newScore;
    });
    scoreList.reverse((a, b) => {
      return a.newScore - b.newScore;
    });
    for (i = 0; i < scoreList.length; i++) {
      let scoreListItem = scoreList[i];
      let tr = document.createElement("tr");
      let cellName = document.createElement("td");
      let cellNameText = document.createTextNode(scoreListItem.name);
      let cellScore = document.createElement("td");
      let cellScoreNum = document.createTextNode(scoreListItem.newScore);

      tr.setAttribute("tr-index", i);
      document.getElementById("highScores").appendChild(tr);
      tr.appendChild(cellName);
      cellName.appendChild(cellNameText);
      tr.appendChild(cellName);
      cellScore.appendChild(cellScoreNum);
    }
  }
}
