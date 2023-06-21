// Create a new post
const form = document.getElementById("inscricaoform");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const inscricao = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("/add-inscricao", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inscricao),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Redirect to home page after successful inscricao
    location.href = "/inscricao.html";
  } catch (error) {
    console.error("Error:", error);
  }
});
