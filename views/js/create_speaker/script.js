// Create a new post
const form = document.getElementById("speakerform");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const speaker = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("/create_speaker", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(speaker),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Redirect to home page after successful photo
    location.href = "../admin/programa.html";
  } catch (error) {
    console.error("Error:", error);
  }
});
