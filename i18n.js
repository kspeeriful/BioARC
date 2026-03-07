
(function(){
  const messages = {
    'en': {
      'site.name': 'BioARC — Biorepositories build Adaptive, Resilient Capacity',
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.consortium': 'Our Consortium',
      'nav.resources': 'Resources',
      'nav.getinvolved': 'Get Involved',
      'hero.tagline': 'Transdisciplinary solutions for early detection of wildlife zoonoses in the Americas.',
      'hero.cta': 'Explore the consortium',
      'about.title': 'A Network Approach',
      'about.note': 'Hover a map point to highlight the matching institution.',
      'about.map.title': 'BioARC partner sites across the Americas'
    },
    'es': {
      'site.name': 'BioARC — Biorepositorios que construyen Capacidad Adaptativa y Resiliente',
      'nav.home': 'Inicio',
      'nav.about': 'Acerca de',
      'nav.consortium': 'Nuestro Consorcio',
      'nav.resources': 'Recursos',
      'nav.getinvolved': 'Participa',
      'hero.tagline': 'Soluciones transdisciplinarias para la detección temprana de zoonosis de vida silvestre en las Américas.',
      'hero.cta': 'Explorar el consorcio',
      'about.title': 'Un enfoque de red',
      'about.note': 'Pase el cursor sobre un punto del mapa para resaltar la institución correspondiente.',
      'about.map.title': 'Sedes asociadas de BioARC en las Américas'
    },
    'pt-BR': {
      'site.name': 'BioARC — Biorepositórios que constroem Capacidade Adaptativa e Resiliente',
      'nav.home': 'Início',
      'nav.about': 'Sobre',
      'nav.consortium': 'Nosso Consórcio',
      'nav.resources': 'Recursos',
      'nav.getinvolved': 'Participe',
      'hero.tagline': 'Soluções transdisciplinares para detecção precoce de zoonoses da vida selvagem nas Américas.',
      'hero.cta': 'Explorar o consórcio',
      'about.title': 'Uma abordagem em rede',
      'about.note': 'Passe o mouse sobre um ponto do mapa para destacar a instituição correspondente.',
      'about.map.title': 'Instituições parceiras da BioARC nas Américas'
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
