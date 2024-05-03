// =============== Scroll
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});


// =============== Habilidades y Herramientas
fetch('assets/js/skills.json')
  .then(response => response.json())
  .then(data => {
    const skillsContainer = document.querySelector('.container-skills');
    const toolsContainer = document.querySelector('.container-tools');

    data.skills.forEach(skill => {
      const skillHTML = `
      <div class="badge">
        <img src="${skill.imagen}" alt="${skill.nombre}">
        <p class="name-skill">${skill.nombre}</p>
      </div>
    `;
      skillsContainer.innerHTML += skillHTML;
    });

    data.tools.forEach(tool => {
      const toolHTML = `
      <div class="badge">
        <img src="${tool.imagen}" alt="${tool.nombre}">
        <p class="name-tools">${tool.nombre}</p>
      </div>
    `;
      toolsContainer.innerHTML += toolHTML;
    });
  })
  .catch(error => console.error('Error al cargar las habilidades y herramientas:', error));

// =============== Proyectos
fetch('assets/js/proyectos.json')
  .then(response => response.json())
  .then(data => {

    const proyectosContainer = document.getElementById('proyects-container');

    data.forEach(proyecto => {
      const proyectoHTML = `
      <div class="proyect">
        <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="img-proyect">
        <h3>${proyecto.titulo}</h3>
        <div class="btn-proyects">
          <a href="${proyecto.repositorio}" target="_blank" class="btn-proyect" aria-label="Repositorio del Proyecto"><i class="bi bi-github"></i> Repositorio</a>
          <a href="${proyecto.link}" target="_blank" class="btn-proyect" aria-label="Deploy"><i class="bi bi-link-45deg"></i> Link</a>
        </div>
      </div>
    `;
      proyectosContainer.innerHTML += proyectoHTML;
    });
  })
  .catch(error => console.error('Error al cargar los proyectos:', error));

// =============== Menú
function hamMenuClick() {
  document.getElementById("hamMenu").classList.toggle("active");
  document.getElementById("ul").classList.toggle("link");
}