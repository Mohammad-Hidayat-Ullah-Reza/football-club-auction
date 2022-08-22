const selectVDiv = document.getElementById("select-v");
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
