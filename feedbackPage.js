const starsContainer = document.querySelectorAll(".stars-container svg");
console.log(starsContainer);

starsContainer.forEach((star, index) => {
  star.addEventListener("mouseover", () => {
    resetStars(); // Resetta le stelle prima di applicare il colore
    colorStars(index); // Colora le stelle fino alla stella corrente
  });

  star.addEventListener("mouseout", () => {
    resetStars(); // Resetta le stelle quando il mouse esce
  });

  star.addEventListener("click", () => {
    colorStars(index, true); // Imposta il colore delle stelle permanenti al click
  });
});

function colorStars(index, permanent = false) {
  for (let i = 0; i <= index; i++) {
    starsContainer[i].querySelector("path").style.fill = "#00f7ff"; // Colore di riempimento delle stelle
  }

  if (permanent) {
    // Memorizza lo stato permanente delle stelle selezionate
    for (let i = 0; i <= index; i++) {
      starsContainer[i].classList.add("selected");
    }
  }
}

function resetStars() {
  starsContainer.forEach((star) => {
    if (!star.classList.contains("selected")) {
      star.querySelector("path").style.fill = "#333"; // Colore di default
    }
  });
}
