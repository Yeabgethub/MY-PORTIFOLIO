// Initialize Main Swiper for Projects
const mainSwiper = new Swiper(".swiper-container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Initialize Nested Swiper for Project Screenshots
document.querySelectorAll(".sub-swiper-container").forEach((container) => {
  new Swiper(container, {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    pagination: {
      el: container.querySelector(".swiper-pagination"),
      clickable: true,
    },
  });
});

// Toggle "View in Detail" Button Function
function toggleDetails(button) {
  const detailBox = button
    .closest(".portfolio__content")
    .querySelector(".portfolio__detail");
  if (detailBox.style.display === "none" || detailBox.style.display === "") {
    detailBox.style.display = "block";
    button.innerHTML =
      '<i class="uil uil-times button__icon"></i> Hide Details';
  } else {
    detailBox.style.display = "none";
    button.innerHTML =
      '<i class="uil uil-eye button__icon"></i> View in Detail';
  }
}

// Optional: Handle Image Load Errors
document.querySelectorAll("img").forEach((img) => {
  img.onerror = function () {
    this.style.display = "none";
    const warning = this.nextElementSibling;
    if (warning && warning.classList.contains("image-error")) {
      warning.style.display = "block";
    }
  };
});
