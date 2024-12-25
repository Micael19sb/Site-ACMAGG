let currentSlide = 0; // Índice inicial do slide
const slideInterval = 3000; // Tempo entre as transições (em milissegundos)

function changeSlide(direction) {
  const slides = document.querySelector('.carousel-images');
  const totalSlides = slides.children.length; // Total de imagens no carrossel

  // Atualiza o índice do slide atual
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  // Calcula o deslocamento necessário
  const offset = -currentSlide * 100; // Translado em porcentagem
  slides.style.transform = `translateX(${offset}%)`;
}

// Função para avançar automaticamente os slides
function startAutoSlide() {
  setInterval(() => {
    changeSlide(1); // Avança para o próximo slide
  }, slideInterval);
}

// Inicia a rotação automática após carregar a página
window.onload = startAutoSlide;

var elementosTitulos = document.querySelector(".titulos");

 elementosTitulos.array.forEach(function (titulos) {
  titulos.addEventlistener("click", function (){
    titulos.classList.toggle("ativa");
  })
});

______
function openSideMenu() {
  document.getElementById("sideMenu").style.display = "block";
}

function closeSideMenu() {
  document.getElementById("sideMenu").style.display = "none";
}
________

function openPopup() {
  document.getElementById("popup").style.display = "block";
}

// Função para fechar o popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}


