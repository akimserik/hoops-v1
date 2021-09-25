document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("navigation");
  container.insertAdjacentHTML("afterbegin", navigationTemplate);

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

const navigationTemplate = `
    <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

    <label for="navi-toggle" class="navigation__button">
      <span class="navigation__icon">&nbsp;</span>
    </label>

    <div class="navigation__background">&nbsp;</div>

    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item">
          <a href="#section-about" class="navigation__link">О проекте</a>
        </li>
        <li class="navigation__item">
          <a href="#section-features" class="navigation__link">Поддержать</a>
        </li>
        <li class="navigation__item">
          <a href="#section-projects" class="navigation__link"
            >Наши проекты</a
          >
        </li>
        <li class="navigation__item">
          <a href="#section-stories" class="navigation__link">Связаться</a>
        </li>
      </ul>
    </nav>
  `;
