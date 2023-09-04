window.addEventListener("DOMContentLoaded", () => {
  const reservaBtn = document.getElementById("reservaBtn");

  function handleClick() {
    window.alert("Gracias por reservar");
  }

  reservaBtn.addEventListener("click", handleClick);
});
