const projects = [
  {
    title: "Projet Coffee",
    image: "images/coffee_homepage.png",
    description: "Projet de détaillant de café",
    languages: ["html", "css", "js", "psql", "sequelize"],
    gallery: [
      "images/coffee_accueil.png",
      "images/coffee_catalogue.png",
      "images/coffee_details.png"]
  },
  {
    title: "Projet Interface IA",
    image: "images/chat_mobile.png",
    description: "Projet API REST chat IA responsive",
    languages: ["html", "css", "svelte", "pocketbase", "Mistral API"],
     gallery: [
      "images/chat_test.png",
      "images/chat_desktop.png",
    "images/chat_mobile.png"]
  },
  {
    title: "Projet 3",
    image: "images/workinprogress.png",
    description: "A venir",
    languages: ["react", "js", "css"]
  },
 
  
];


const languageIcons = {
  html: '<i class="fab fa-html5" title="HTML5" style="color:#e44d26"></i>',
  css: '<i class="fab fa-css3-alt" title="CSS3" style="color:#1572b6"></i>',
  js: '<i class="fab fa-js-square" title="JavaScript" style="color:#f7df1e"></i>',
  python: '<i class="fab fa-python" title="Python" style="color:#3776ab"></i>',
  django: '<img src="images/django.svg" alt="Django" title="Django" class="lang-icon">',
  react: '<i class="fab fa-react" title="React" style="color:#61dafb"></i>',
  psql: '<i class="fas fa-database" title="PostgreSQL" style="color:#336791"></i>',
  sequelize: '<img src="images/sequelize.png" alt="Sequelize" title="Sequelize" class="lang-icon">',
 pocketbase: '<img src="images/pb_icon.png" alt="PocketBase" title="PocketBase" class="lang-icon">',
svelte: '<img src="https://img.icons8.com/?size=100&id=Mm35TzLKahiF&format=png&color=000000" alt="Svelte" title="Svelte" class="lang-icon">',
"Mistral API": '<img src="images/mistral_icon.png" alt="Mistral API" title="Mistral API" class="lang-icon">',
  
};

function getLanguageIcons(langs) {
  return langs.map(l => languageIcons[l] || l).join(' ');
}
let currentIndex = 0;

function showProjects(startIndex = 0) {
  const carousel = document.getElementById('carousel');
  let cards = '';
  for (let i = 0; i < 3; i++) {
    const idx = (startIndex + i) % projects.length;
    const project = projects[idx];
    cards += `
      <div class="carousel-card" style="animation: fadeIn 0.5s cubic-bezier(0.4,0,0.2,1); cursor:pointer;">
        <img src="${project.image}" alt="${project.title}">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <div class="lang-list">${getLanguageIcons(project.languages)}</div>
      </div>
    `;
  }
  carousel.innerHTML = `<div class="carousel-track">${cards}</div>`;

 
  carousel.querySelectorAll('.carousel-card').forEach((card, i) => {
    card.onclick = () => openModal(projects[(startIndex + i) % projects.length]);
  });
}


document.getElementById('prevBtn').onclick = function() {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  showProjects(currentIndex);
};
document.getElementById('nextBtn').onclick = function() {
  currentIndex = (currentIndex + 1) % projects.length;
  showProjects(currentIndex);
};


showProjects(currentIndex);

function openModal(project) {
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalDesc').textContent = project.description;
  document.getElementById('modalLangs').innerHTML = getLanguageIcons(project.languages);
  const gallery = document.getElementById('modalGallery');
  gallery.innerHTML = (project.gallery || [])
    .map(img => `<img src="${img}" alt="${project.title}">`)
    .join('');
  document.getElementById('modal').style.display = 'flex';
}
document.getElementById('closeModal').onclick = function() {
  document.getElementById('modal').style.display = 'none';
};
window.onclick = function(event) {
  if (event.target === document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none';
  }
};
function openModal(project) {
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalDesc').textContent = project.description;
  document.getElementById('modalLangs').innerHTML = getLanguageIcons(project.languages);
  const gallery = document.getElementById('modalGallery');
  gallery.innerHTML = (project.gallery || [])
    .map(img => `<img src="${img}" alt="${project.title}" class="modal-thumb">`)
    .join('');
  document.getElementById('modal').style.display = 'flex';

 
  gallery.querySelectorAll('.modal-thumb').forEach(img => {
    img.onclick = function() {
      document.getElementById('lightboxImg').src = this.src;
      document.getElementById('lightbox').style.display = 'flex';
    };
  });
}


document.getElementById('closeLightbox').onclick = function() {
  document.getElementById('lightbox').style.display = 'none';
};

document.getElementById('lightbox').onclick = function(e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
};