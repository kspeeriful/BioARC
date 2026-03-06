
// Simple client-side i18n for BioARC
// Languages: English (en), Spanish (es), Portuguese-Brazil (pt-BR)
(function(){
  const messages = {
    'en': {
      'site.name': 'BioARC — Biorepositories build Adaptive, Resilient Capacity',
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'hero.tagline': 'Transdisciplinary solutions for early detection of wildlife zoonotic spillover',
      'hero.cta': 'Explore the consortium',
      'about.title': 'A Network Approach',
      'about.map.title': 'BioARC partner sites across the Americas',
      'about.note': 'Hover a map point to highlight the matching institution.'
    },
    'es': {
      'site.name': 'BioARC — Biorepositorios que construyen Capacidad Adaptativa y Resiliente',
      'nav.home': 'Inicio',
      'nav.about': 'Acerca de',
      'nav.contact': 'Contacto',
      'hero.tagline': 'Soluciones transdisciplinarias para la detección temprana del desbordamiento zoonótico de fauna silvestre',
      'hero.cta': 'Explorar el consorcio',
      'about.title': 'Un enfoque de red',
      'about.map.title': 'Sedes asociadas de BioARC en las Américas',
      'about.note': 'Pase el cursor sobre un punto del mapa para resaltar la institución correspondiente.'
    },
    'pt-BR': {
      'site.name': 'BioARC — Biorepositórios que constroem Capacidade Adaptativa e Resiliente',
      'nav.home': 'Início',
      'nav.about': 'Sobre',
      'nav.contact': 'Contato',
      'hero.tagline': 'Soluções transdisciplinares para detecção precoce do transbordamento zoonótico da fauna silvestre',
      'hero.cta': 'Explorar o consórcio',
      'about.title': 'Uma abordagem em rede',
      'about.map.title': 'Instituições parceiras da BioARC nas Américas',
      'about.note': 'Passe o mouse sobre um ponto do mapa para destacar a instituição correspondente.'
    }
  };

  function applyI18n(lang){
    const dict = messages[lang] || messages['en'];
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if(dict[key]) el.textContent = dict[key];
    });
    const titleEl = document.querySelector('title[data-i18n="site.name"]');
    if(titleEl && dict['site.name']) titleEl.textContent = dict['site.name'];
    localStorage.setItem('bioarc_lang', lang);
  }

  function initLang(){
    const saved = localStorage.getItem('bioarc_lang');
    const userLang = saved || (navigator.language || 'en');
    const lang = ['en','es','pt-BR'].find(l => userLang.startsWith(l)) || 'en';
    applyI18n(lang);
    const selector = document.getElementById('lang-select');
    if(selector){
      selector.value = lang;
      selector.addEventListener('change', (e)=> applyI18n(e.target.value));
    }
  }

  window.BioARCi18n = { applyI18n };
  document.addEventListener('DOMContentLoaded', initLang);
})();
