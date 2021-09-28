document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("footer");
  container.insertAdjacentHTML("afterbegin", templateFooter);
});

const templateFooter = `
  <div class="footer__logo-box">
    <img
      srcset="
        ./img/hoops-logo-white-small.png 1x,
        ./img/hoops-logo-white.png       2x
      "
      alt="hoops-logo-white"
      class="footer__logo"
    />
  </div>
  <div class="row">
    <div class="col-1-of-2">
      <div class="footer__navigation">
        <ul class="footer__list">
          <li class="footer__item">
            <a href="#section-about" class="footer__link">О проекте</a>
          </li>
          <li class="footer__item">
            <a href="#section-projects" class="footer__link">Проекты</a>
          </li>
          <li class="footer__item">
            <a href="#section-stories" class="footer__link">Связаться</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-1-of-2">
      <p class="footer__copyright">
        Проект <a href="#" class="footer__link">100hoops.kz &copy;</a>
        является некоммерческой социальной инициативой, не имеющей
        зарегистрированной правовой формы и/или торговых марок. Мы не
        собираем деньги и не принимаем переводы. Спонсоры оплачивают
        материалы или работы самостоятельно. Дизайн сайта заимствован из
        курса
        <a
          href="https://www.udemy.com/course/advanced-css-and-sass/"
          class="footer__link"
          >Advanced CSS and Sass by Jonas Schmedtmann</a
        >.
      </p>
    </div>
  </div>
  `;
