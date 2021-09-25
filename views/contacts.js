document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("section-stories");
  container.insertAdjacentHTML("afterbegin", contactsTemplate);
});

const contactsTemplate = `
    <div class="bg-video">
    <video class="bg-video__content" autoplay muted loop>
      <source src="./img/video-basketball-court.mp4" />
      Браузер не поддерживает видео
    </video>
    </div>

    <div class="u-center-text u-margin-bottom-big">
    <h2 class="heading-secondary">Контакты</h2>
    </div>

    <div class="row">
    <div class="story">
      <figure class="story__shape">
        <img
          src="./img/telegram-logo.svg"
          alt="telegram"
          class="story__img"
        />
        <!-- <figcaption class="story__caption">@100hoops</figcaption> -->
      </figure>
      <div class="story-text">
        <p class="u-margin-bottom-medium">
          Вопросы и предложения пишите в телеграм-чат
        </p>
        <div class="">
          <a href="https://t.me/hoopskz" target="_blank" class="btn-text"
            >Написать &rarr;</a
          >
        </div>
      </div>
    </div>
    </div>
    `;
