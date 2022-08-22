//global vairables
const selectVDiv = document.getElementById("select-v");
const perPlayerInputField = document.getElementById("per-player-input-field");
const btnCalculate = document.getElementById("btn-calculate");
const playerExpensesValue = document.getElementById("player-expenses-value");
const MangerInputField = document.getElementById("manager-input-field");
const coachInputField = document.getElementById("coach-input-field");
const btnCalculateTotal = document.getElementById("btn-calculate-total");
const totalValue = document.getElementById("total-value");

function clickBtnAppendPlayerName(btnId, PlayerNameId) {
  const selectButton = document.getElementById(btnId);
  selectButton.addEventListener("click", function () {
    if (selectVDiv.childElementCount < 5) {
      const playerName = document.getElementById(PlayerNameId).innerText;
      const paragraphElement = document.createElement("p");
      paragraphElement.innerHTML =
        `<span class="text-red-500">` + "#" + `</span>` + " " + playerName;
      paragraphElement.classList.add("font-bold", "text-xl");
      selectVDiv.appendChild(paragraphElement);
      selectButton.setAttribute("disabled", "");
      selectButton.classList.remove("bg-blue-800");
      selectButton.classList.remove("hover:bg-blue-700");
      selectButton.classList.add("bg-gray-400");
    } else {
      alert(
        "You have already selected 5 player. You can't select any more player."
      );
    }
  });
}

clickBtnAppendPlayerName("btn-select-messi", "name-messi");
clickBtnAppendPlayerName("btn-select-neymar", "name-neymar");
clickBtnAppendPlayerName("btn-select-mbappe", "name-mbappe");
clickBtnAppendPlayerName("btn-select-vitor", "name-vitor");
clickBtnAppendPlayerName("btn-select-ramos", "name-ramos");
clickBtnAppendPlayerName("btn-select-sanches", "name-sanches");

// clickBtnAppendPlayerName("btn-select-messi", "name-messi");
// clickBtnAppendPlayerName("btn-select-messi", "name-messi");
// clickBtnAppendPlayerName("btn-select-messi", "name-messi");
// clickBtnAppendPlayerName("btn-select-messi", "name-messi");
// clickBtnAppendPlayerName("btn-select-messi", "name-messi");
// clickBtnAppendPlayerName("btn-select-messi", "name-messi");
// clickBtnAppendPlayerName("btn-select-messi", "name-messi");
