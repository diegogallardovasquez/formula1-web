const photoButton = document.getElementById("photo-toggle");
if (photoButton) {
  const photo = document.getElementById("smart_thumbnail");
  photoButton.addEventListener("click", function () {
    const small = photo.classList.toggle("small");
    photoButton.setAttribute("aria-expanded", String(!small));
    photoButton.setAttribute("aria-label", small ? "Ampliar foto" : "Reducir foto");
  });
}

const disqusShortname = "mi-pasion-por-la-formula-1"; // Nombre registrado en Disqus para este sitio.
if (disqusShortname && location.protocol.startsWith("http")) {
  const page = location.pathname.split("/").pop() || "index.html";
  window.disqus_config = function () {
    this.page.identifier = page;
    this.page.url = "https://diegogallardovasquez.github.io/formula1-web/" + page;
    this.language = "es";
  };
  const embed = document.createElement("script");
  embed.src = "https://" + disqusShortname + ".disqus.com/embed.js";
  embed.setAttribute("data-timestamp", String(Date.now()));
  document.body.appendChild(embed);
}
