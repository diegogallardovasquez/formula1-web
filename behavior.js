const photoButton = document.getElementById("photo-toggle");
if (photoButton) {
  const photo = document.getElementById("smart_thumbnail");
  photoButton.addEventListener("click", function () {
    const small = photo.classList.toggle("small");
    photoButton.setAttribute("aria-expanded", String(!small));
    photoButton.setAttribute("aria-label", small ? "Ampliar foto" : "Reducir foto");
  });
}

const disqusShortname = ""; // Nombre registrado en Disqus para este sitio.
if (disqusShortname && location.protocol.startsWith("http")) {
  const embed = document.createElement("script");
  embed.src = "https://" + disqusShortname + ".disqus.com/embed.js";
  embed.setAttribute("data-timestamp", String(Date.now()));
  document.body.appendChild(embed);
}
