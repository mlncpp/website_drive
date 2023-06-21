// Get all photos from the server and display them on the page
document.addEventListener("DOMContentLoaded", () => {
    fetch("/newphoto")
      .then((response) => response.json())
      .then((photos) => {
        const photosContainer = document.getElementById("listphotos");
        photos.forEach((photo) => {
          const photoElement = document.createElement("div");
          photoElement.className = "col-6 col-md-3";
          photoElement.id = photo._id;
          photoElement.innerHTML = `
            <div class="gallery-item">
              <img src="http://localhost:3001/images/${photo.photo}" alt="Imagem 1">
                  <div class="overlay">
                      <div class="overlay-content">
                        <h3>${photo.titulo}</h3>
                        <p>${photo.descricao}</p>
                        <p>${photo.ano}</p>
                      </div>
                  </div>
            </div>
                  `;
          photosContainer.appendChild(photoElement);
        });
      });
  });
  