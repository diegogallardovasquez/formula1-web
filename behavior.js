const photoButton = document.getElementById("photo-toggle");
if (photoButton) {
  const photo = document.getElementById("smart_thumbnail");
  photoButton.addEventListener("click", function () {
    const small = photo.classList.toggle("small");
    photoButton.setAttribute("aria-expanded", String(!small));
    photoButton.setAttribute("aria-label", small ? "Ampliar foto" : "Reducir foto");
  });
}
