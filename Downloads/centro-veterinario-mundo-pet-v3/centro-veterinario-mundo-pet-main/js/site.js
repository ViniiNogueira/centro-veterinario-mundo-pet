/* ===================================================
   Clínica Veterinária Mundo Pet — comportamento global
   1) Menu retrátil no celular   2) Revelar ao rolar
   3) Botão "voltar ao topo"
   Melhoria progressiva: sem JavaScript o site continua
   100% utilizável.
   =================================================== */
(function () {
  'use strict';

  var reduzirMovimento = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1) Menu retrátil (visível só em telas pequenas, via CSS) */
  var topo = document.querySelector('body > header');
  var nav = topo ? topo.querySelector('nav') : null;

  if (topo && nav) {
    var botaoMenu = document.createElement('button');
    botaoMenu.type = 'button';
    botaoMenu.className = 'menu-toggle';
    botaoMenu.setAttribute('aria-expanded', 'false');
    botaoMenu.setAttribute('aria-controls', 'menu-principal');
    botaoMenu.innerHTML =
      '<svg class="icone-btn" aria-hidden="true" focusable="false"><use href="#icon-menu"></use></svg>' +
      '<span>Menu</span>';
    nav.id = 'menu-principal';
    topo.insertBefore(botaoMenu, nav);
    topo.classList.add('tem-menu');

    var alternarMenu = function (abrir) {
      topo.classList.toggle('aberto', abrir);
      botaoMenu.setAttribute('aria-expanded', String(abrir));
    };

    botaoMenu.addEventListener('click', function () {
      alternarMenu(!topo.classList.contains('aberto'));
    });

    document.addEventListener('keydown', function (evento) {
      if (evento.key === 'Escape' && topo.classList.contains('aberto')) {
        alternarMenu(false);
        botaoMenu.focus();
      }
    });
  }

  /* 2) Revelar seções ao rolar (só opacity e transform) */
  var alvos = document.querySelectorAll(
    'main article > section, main article > aside, main .faixa, section[aria-labelledby="galeria-fotos"] figure'
  );

  if ('IntersectionObserver' in window && !reduzirMovimento) {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visivel');
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.1 });

    alvos.forEach(function (elemento) {
      elemento.classList.add('reveal');
      observador.observe(elemento);
    });
  }

  /* 3) Botão "voltar ao topo" */
  var voltar = document.createElement('button');
  voltar.type = 'button';
  voltar.className = 'topo-voltar';
  voltar.setAttribute('aria-label', 'Voltar ao topo da página');
  voltar.innerHTML =
    '<svg class="icone-btn" aria-hidden="true" focusable="false"><use href="#icon-arrow-up"></use></svg>';
  document.body.appendChild(voltar);

  window.addEventListener('scroll', function () {
    voltar.classList.toggle('mostrar', window.scrollY > 600);
  }, { passive: true });

  voltar.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reduzirMovimento ? 'auto' : 'smooth' });
  });
})();
