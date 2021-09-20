document.addEventListener("DOMContentLoaded", () => {
  const navList = document.querySelector(".navigation__list");
  const checkBox = document.getElementById("navi-toggle");

  if (navList) {
    navList.addEventListener("click", (e) => {
      e.preventDefault();
      checkBox.checked = false;

      const elTarget = document.querySelector(e.target.hash);

      if (elTarget)
        elTarget.scrollIntoView({ block: "center", behavior: "smooth" });
    });
  }
});
