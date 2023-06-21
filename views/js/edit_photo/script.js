// Get post by id and populate form with post data
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const photoId = urlParams.get("id");

  fetch(`/newphoto/${photoId}`)
    .then((response) => response.json())
    .then((photo) => {
      document.getElementById("photoId").value = photo._id;
      document.getElementById("titulo").value = photo.titulo;
      document.getElementById("descricao").value = photo.descricao;
      document.getElementById("ano").value = photo.ano;
      document.getElementById("photo").value = photo.photo;
    });
});

// Update post
const form = document.getElementById("photoform");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const photo = Object.fromEntries(formData.entries());

  try {
    const photoId = document.getElementById("photoId").value;
    const response = await fetch(`/newphoto/${photoId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(photo),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Redirect to home page after successful post
    location.href = "galeria.html";
  } catch (error) {
    console.error("Error:", error);
  }
});

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", async(e) => {
  alert('Deletar foto')
  e.preventDefault()
  try {
    const photoId = document.getElementById("photoId").value;
    const response = await fetch(`/newphoto/photo/${photoId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("Photo deleted successfully");
      // Perform any additional actions after successful deletion
    } else {
      throw new Error("Network response was not ok");
    }
    location.href = "../admin/galeria.html";
  } catch (error) {
    console.error("Error:", error);
  }
});