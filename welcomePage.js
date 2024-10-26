const proBtn = document.getElementsByClassName("disabled")[0];
const check = document.getElementById("checkbox");

check.addEventListener("change", function () {
  // Controlla se la checkbox è selezionata o meno
  if (checkbox.checked) {
    proBtn.className = "active";
    proBtn.disabled = false;
  } else {
    proBtn.disabled = true;
    proBtn.className = "disabled";
  }
});

proBtn.addEventListener("click", (e) => {
  e.preventDefault();
  location.assign("benchmarkPage.html");
});
