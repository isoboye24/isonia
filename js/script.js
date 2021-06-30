const year = document.querySelector("#year");

const showYear = () => {
  const now = new Date();
  const currYear = now.getFullYear();

  year.textContent = currYear;
};
window.addEventListener("load", showYear);
