document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const speakerId = urlParams.get("id");
  
    fetch(`/create_speaker/${speakerId}`)
      .then((response) => response.json())
      .then((speaker) => {
        document.getElementById("speakerId").value = speaker._id;
        document.getElementById("titulo").value = speaker.titulo;
        document.getElementById("hora").value = speaker.hora;
        document.getElementById("descricao").value = speaker.descricao;
        document.getElementById("photo").value = speaker.photo;
      });
  });
  
  // Update post
  const form = document.getElementById("speakerform");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const speaker = Object.fromEntries(formData.entries());
  
    try {
      const speakerId = document.getElementById("speakerId").value;
      const response = await fetch(`/create_speaker/${speakerId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(speaker),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      location.href = "programa.html";
    } catch (error) {
      console.error("Error:", error);
    }
  });
  
  const deleteButton = document.getElementById("deleteButton");
  deleteButton.addEventListener("click", async(e) => {
    alert('Deletar speaker')
    e.preventDefault()
    try {
      const speakerId = document.getElementById("speakerId").value;
      const response = await fetch(`/update_speaker/speaker/${speakerId}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        console.log("Speaker deleted successfully");
      } else {
        throw new Error("Network response was not ok");
      }
      location.href = "../admin/programa.html";
    } catch (error) {
      console.error("Error:", error);
    }
  });