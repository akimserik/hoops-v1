document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("section-features");
  container.insertAdjacentHTML("afterbegin", templateHeader);
});

const templateHeader = `
    <div class="header__logo-box">
      <img
        src="./img/hoops-logo-white.png"
        alt="100hoops-logo"
        class="header__logo"
      />
    </div>

    <div class="header__text-box">
      <h1 class="heading-primary">
        <span class="heading-primary--main">100 HOOPS</span>
        <span class="heading-primary--sub">социальный проект по</span>
        <span class="heading-primary--sub">восстановлению и патронажу</span>
        <span class="heading-primary--sub">
          баскетбольльных колец в Алматы</span
        >
      </h1>
    </div>
  `;
