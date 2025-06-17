document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "A modern dashboard for e-commerce platforms with real-time analytics and inventory management.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
      tags: ["React", "Tailwind CSS", "Redux"],
      liveLink: "#",
      githubLink: "#",
      category: "Web App",
    },
    {
      title: "Travel Blog",
      description:
        "A responsive travel blog with dynamic content loading and a custom CMS for easy updates.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["JavaScript", "CSS3", "Firebase"],
      liveLink: "#",
      githubLink: "#",
      category: "Website",
    },
    {
      title: "Fitness Tracker",
      description:
        "A mobile-first fitness tracking application with workout plans and progress visualization.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["React Native", "TypeScript", "Chart.js"],
      liveLink: "#",
      githubLink: "#",
      category: "Mobile App",
    },
    {
      title: "Portfolio Website",
      description:
        "A creative portfolio website for a photographer with a custom image gallery and contact form.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["HTML5", "CSS3", "JavaScript"],
      liveLink: "#",
      githubLink: "#",
      category: "Website",
    },
  ];

  const projectsContainer = document.getElementById("projects-container");
  const filterButtons = document.querySelectorAll("#filter-buttons button");

  // Initial render
  renderProjects(projects);

  // Add event listeners to filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      // Update active button styles
      filterButtons.forEach((btn) => {
        if (btn.getAttribute("data-filter") === filter) {
          btn.classList.add("bg-primary", "text-white", "shadow-md");
          btn.classList.remove("bg-muted", "text-foreground");
        } else {
          btn.classList.remove("bg-primary", "text-white", "shadow-md");
          btn.classList.add("bg-muted", "text-foreground");
        }
      });

      // Filter projects
      const filteredProjects =
        filter === "all"
          ? projects
          : projects.filter((project) => project.category === filter);
      renderProjects(filteredProjects);
    });
  });

  // Function to render projects
  function renderProjects(projects) {
    projectsContainer.innerHTML = "";
    projects.forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");

      projectCard.innerHTML = `
        <img src="${project.image}" alt="${
        project.title
      }" class="project-image" />
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${project.tags
              .map((tag) => `<span class="project-tag">${tag}</span>`)
              .join("")}
          </div>
          <div class="project-links">
            <a href="${
              project.liveLink
            }" class="project-link live-link" target="_blank">Live</a>
            <a href="${
              project.githubLink
            }" class="project-link github-link" target="_blank">GitHub</a>
          </div>
        </div>
      `;
      projectsContainer.appendChild(projectCard);
    });
  }
});
