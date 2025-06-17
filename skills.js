document.addEventListener("DOMContentLoaded", function () {
  const skills = [
    {
      name: "HTML",
      level: 95,
      icon: '<i class="uil uil-html5"></i>',
      color: "#E44D26",
    },
    {
      name: "CSS",
      level: 90,
      icon: '<i class="uil uil-css3-simple"></i>',
      color: "#1572B6",
    },
    {
      name: "JavaScript",
      level: 85,
      icon: '<i class="uil uil-javascript"></i>',
      color: "#F0DB4F",
    },
    {
      name: "React",
      level: 80,
      icon: '<i class="uil uil-react"></i>',
      color: "#61DAFB",
    },
    {
      name: "Java",
      level: 75,
      icon: '<i class="fab fa-java"></i>',
      color: "#0074BD",
    },
    {
      name: "C++",
      level: 70,
      icon: '<i class="fas fa-code"></i>',
      color: "#00599C",
    },
    {
      name: "Python",
      level: 85,
      icon: '<i class="fab fa-python"></i>',
      color: "#3776AB",
    },
  ];

  const skillsContainer = document.querySelector(".skills-grid");

  skills.forEach((skill) => {
    const skillElement = document.createElement("div");
    skillElement.className = "skill-card";

    skillElement.innerHTML = `
        <div class="skill-icon" style="color: ${skill.color}">${skill.icon}</div>
        <div class="skill-name">${skill.name}</div>
        <div class="skill-level">
          <div class="skill-level-bar" style="--skill-level: ${skill.level}%"></div>
        </div>
      `;

    skillsContainer.appendChild(skillElement);
  });

  // Intersection Observer for animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".skill-card").forEach((card) => {
    observer.observe(card);
  });
});
/*certificates*/
function toggleCertificates() {
  const section = document.getElementById("certificates-section");
  section.classList.toggle("hidden");

  const btn = document.querySelector(".toggle-certificates-btn");
  btn.textContent = section.classList.contains("hidden")
    ? "View Certificates"
    : "Hide Certificates";
}
