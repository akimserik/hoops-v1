document.addEventListener("DOMContentLoaded", () => {
  const sectionFeatures = document.getElementById("section-features");
  sectionFeatures.insertAdjacentHTML("afterbegin", templateFeatures);
});

const templateFeatures = `
    <div class="row">
      <div class="col-1-of-3">
        <div class="feature-box">
          <i class="feature-box__icon icon-basic-diamonds"></i>
          <h3 class="heading-tertiary u-margin-bottom-small">
            Поддержать проект
          </h3>
          <p class="feature-box__text">
            Купи кольцо, щит или сетку - мы поможем установить.
          </p>
        </div>
      </div>

      <div class="col-1-of-3">
        <div class="feature-box">
          <i class="feature-box__icon icon-basic-hammer"></i>
          <h3 class="heading-tertiary u-margin-bottom-small">
            Сообщить о проблеме
          </h3>
          <p class="feature-box__text">
            Предложи, какое кольцо нужно починить.
          </p>
        </div>
      </div>

      <div class="col-1-of-3">
        <div class="feature-box">
          <i class="feature-box__icon icon-basic-calculator"></i>
          <h3 class="heading-tertiary u-margin-bottom-small">Помочь</h3>
          <p class="feature-box__text">
            Следи за кольцом в своем дворе. Скидывай локации и фотки
            площадок.
          </p>
        </div>
      </div>
      </div>

      <div class="row" style="text-align: center">
      <a href="#section-stories" class="btn btn--white btn--animated"
        >Связаться</a
      >
    </div>
  `;
