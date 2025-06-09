const marcadores = document.querySelectorAll('.mapa-marcador');
const tooltip = document.getElementById('mapa-tooltip');

marcadores.forEach(marcador => {
  marcador.addEventListener('mousemove', e => {
    tooltip.style.top = `${e.pageY - 40}px`;
    tooltip.style.left = `${e.pageX + 15}px`;
    tooltip.textContent = marcador.getAttribute('data-nome');
    tooltip.style.opacity = 1;
  });

  marcador.addEventListener('mouseleave', () => {
    tooltip.style.opacity = 0;
  });
});
