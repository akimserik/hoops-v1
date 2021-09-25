document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("section-projects");
  container.insertAdjacentHTML("afterbegin", projectTemplate);

  const sectionPopups = document.getElementById("section-popups");
  sectionPopups.insertAdjacentHTML("afterbegin", popupTemplate);
});

const projectTemplate = `
    <div class="u-center-text u-margin-bottom-big">
      <h2 class="heading-secondary">Наши проекты</h2>
    </div>

    <div class="row">
      <div class="col-1-of-2">
        <div class="card">
          <div class="card__side card__side--front">
            <div class="card__picture card__picture--1"></div>
            <h4 class="card__heading">
              <span class="card__heading-span card__heading-span--1">
                Терренкур 1</span
              >
            </h4>
            <div class="card__details">
              <ul>
                <li>Укреплен столб у основания при помощи сварки</li>
                <li>Щит заменен на металлический</li>
                <li>Заменены кольцо и сетка</li>
              </ul>
            </div>
            <div class="u-center-text">
              <a href="#popup1" class="btn btn--primary">Подробнее</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1-of-2">
        <div class="card">
          <div class="card__side card__side--front">
            <div class="card__picture card__picture--2"></div>
            <h4 class="card__heading">
              <span class="card__heading-span card__heading-span--1">
                Терренкур 2</span
              >
            </h4>
            <div class="card__details">
              <ul>
                <li>Выровнен столб</li>
                <li>Изготовлен новый металлический щит</li>
                <li>Заменены кольцо и сетка</li>
              </ul>
            </div>
            <div class="u-center-text">
              <a href="#popup2" class="btn btn--primary">Подробнее</a>
            </div>
          </div>
        </div>
      </div>
    </div>`;

const popupTemplate = `
        <div class="popup" id="popup1">
          <div class="popup__content">
            <div class="popup__left">
              <img
                src="./img/projects/terenkur1-before.jpg"
                alt="Project photo"
                class="popup__img"
              />
              <img
                src="./img/projects/terenkur1-after.jpg"
                alt="Project photo"
                class="popup__img"
              />
            </div>
            <div class="popup__right">
              <a href="#section-projects" class="popup__close">&times;</a>
              <h2 class="heading-secondary u-margin-bottom-small">
                Терренкур 1
              </h2>
              <h3 class="heading-tertiary u-margin-bottom-small">
                <a href="https://go.2gis.com/2i1pp" target="_blank"
                  >Показать на карте</a
                >
              </h3>
              <div class="popup__text">
                Высота кольца: 3.0 м
                <br />
                Тип кольца: с амортизатором
                <br />
                Внутренний диаметр: 45 см
                <br />
                Размер щита: 125см х 90см
              </div>
            </div>
          </div>
        </div>

        <div class="popup" id="popup2">
          <div class="popup__content">
            <div class="popup__left">
              <img
                src="./img/projects/terenkur2-before.jpg"
                alt="Project photo"
                class="popup__img"
              />
              <img
                src="./img/projects/terenkur2-after.jpg"
                alt="Project photo"
                class="popup__img"
              />
            </div>
            <div class="popup__right">
              <a href="#section-projects" class="popup__close">&times;</a>
              <h2 class="heading-secondary u-margin-bottom-small">
                Терренкур 2
              </h2>
              <h3 class="heading-tertiary u-margin-bottom-small">
                <a href="https://go.2gis.com/2i1pp" target="_blank"
                  >Показать на карте</a
                >
              </h3>
              <div class="popup__text">
                Высота кольца: 2.95 м
                <br />
                Тип кольца: с амортизатором
                <br />
                Внутренний диаметр: 45 см
                <br />
                Размер щита: 125см х 90см
              </div>
            </div>
          </div>
        </div>
`;
