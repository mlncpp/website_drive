// Create a new post
const form = document.getElementById("photoform");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const photo = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("/newphoto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(photo),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Redirect to home page after successful photo
    location.href = "../admin/galeria.html";
  } catch (error) {
    console.error("Error:", error);
  }
});
