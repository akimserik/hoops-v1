import projectsData from "../data";

class ProjectsUI {
  constructor() {
    this.container = document.getElementById("projects-container");
    this.containerPopups = document.getElementById("section-popups");
  }

  renderProjects() {
    if (!projectsData.length) {
      return;
    }

    let fragment = "";
    let fragmentPopups = "";

    projectsData.forEach((project) => {
      const template = ProjectsUI.projectTemplate(project);
      fragment += template;

      const templatePopup = ProjectsUI.popupTemplate(project);
      fragmentPopups += templatePopup;
    });

    this.container.insertAdjacentHTML("afterbegin", fragment);
    this.containerPopups.insertAdjacentHTML("afterbegin", fragmentPopups);
  }

  static projectTemplate(project) {
    return `   
      <div class="card">
        <div class="card__side card__side--front">
          <div class="card__picture card__picture--${project.id}"></div>
          <h4 class="card__heading">
            <span class="card__heading-span card__heading-span--1">
              ${project.title}
            </span>
          </h4>
          <div class="card__details">
            <ul>
              <li>${project.work1}</li>
              <li>${project.work2}</li>
              ${project.work3 ? `<li>${project.work3}</li>` : "&nbsp;"}
            </ul>
          </div>
          <div class="u-center-text">
            <a href="#popup${project.id}" class="btn btn--primary">Подробнее</a>
          </div>
        </div>
      </div>
    `;
  }

  static popupTemplate(project) {
    return `
    <div class="popup" id="popup${project.id}">
      <div class="popup__content">
        <div class="popup__left">
          <img
            src=${project.imgBefore}
            alt="Project photo"
            class="popup__img"
          />
          <img
            src=${project.imgAfter}
            alt="Project photo"
            class="popup__img"
          />
        </div>
        <div class="popup__right">
          <a href="#section-projects" class="popup__close">&times;</a>
          <div class="popup__close-background">&nbsp;</div>
          <h2 class="heading-secondary u-margin-bottom-small">
            ${project.title}
          </h2>
          <h3 class="heading-tertiary u-margin-bottom-small">
            <a href=${project.location} target="_blank"
              >Показать на карте</a
            >
          </h3>
          <div class="popup__text">
            Высота кольца: ${project.height}
            <br />
            Тип кольца: ${project.hoopType}
            <br />
            Внутренний диаметр: ${project.hoopRadius}
            <br />
            Размер щита: ${project.boardProps}
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

const projectsUI = new ProjectsUI();

export default projectsUI;
