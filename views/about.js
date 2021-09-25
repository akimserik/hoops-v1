document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("section-about");
  container.insertAdjacentHTML("afterbegin", template);
});

const template = `
    <div class="u-center-text u-margin-bottom-big">
    <h2 class="heading-secondary">Цели проекта</h2>
    </div>

    <div class="row">
    <div class="col-1-of-2">
      <h3 class="heading-tertiary u-margin-bottom-small">
        Карта баскетбольльных площадок
      </h3>
      <p class="paragraph">
        Составление карты баскетбольльных площадок города с фотографиями и
        подробной информацией (высота и размеры колец, размеры щитов,
        наличие разметки и т.д.). Возможность загрузки фотографий
        пользователями на сайт.
      </p>

      <h3 class="heading-tertiary u-margin-bottom-small">
        Восстановление колец
      </h3>
      <p class="paragraph">
        Восстановление 100 баскетбольных колец в городе Алматы. Текущий
        ремонт колец. Привлечение местных ребят к проекту. Воспитание
        бережного отношения к кольцам.
      </p>
      <!-- <a href="#" class="btn-text">Узнать больше &rarr;</a> -->
    </div>

    <div class="col-1-of-2">
      <div class="composition">
        <img
          src="./img/hoop-old-2-bw.jpg"
          alt="hoop-1"
          class="composition__photo composition__photo--p1"
        /><img
          src="./img/hoop-old-3-bw.jpg"
          alt="hoop-2"
          class="composition__photo composition__photo--p2"
        /><img
          src="./img/hoop-old-1.jpg"
          alt="hoop-3"
          class="composition__photo composition__photo--p3"
        />
      </div>
    </div>
    </div>
  `;
