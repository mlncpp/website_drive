document.addEventListener("DOMContentLoaded", () => {
    fetch("/create_speaker")
      .then((response) => response.json())
      .then((speakers) => {
        const speakersContainer = document.getElementById("keynote-speakers-15");
        speakers.forEach((speaker) => {
          const speakerElement = document.createElement("div");
          speakerElement.className = "row align-items-center justify-content-center border-top border-bottom border-white";
          speakerElement.id = speaker._id;
          speakerElement.innerHTML = `
          <div>
              <div class="speaker-card" id="keynoteSpeaker1">
                  <div class="row align-items-center">
                      <div class="col-4 col-md-2 text-center">
                          <img
                              src="http://localhost:3001/images/${speaker.photo}"
                              class="img-fluid custom-img"
                              alt="Speaker 1">
                      </div>
                      <div class="col-6 col-md-8 mt-1">
                          <h1 class="fw-normal">${speaker.titulo} - ${speaker.hora}</h1>
                      </div>
                      <div class="col-2 col-md-2 mb-3 d-flex justify-content-end">
                          <span class="text-primary">+</span>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-2"></div>
                      <div class="col-md-10">
                          <div class="speaker-details text-justify">
                              <p class="texto">${speaker.descricao}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
                  `;
          speakersContainer.appendChild(speakerElement);
        });
      });
  });
  
