
// BioARC partner map (Leaflet)
// Expects Leaflet to be loaded and a <div id="map"></div> plus <ul id="partner-list"></ul> list items with data-key="p0.."

(function(){
  function initBioARCMap(){
    if(typeof L === 'undefined') return;
    const mapEl = document.getElementById('map');
    if(!mapEl) return;

    const map = L.map('map', { scrollWheelZoom: true }).setView([5, -75], 3.4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const partners = (window.BIOARC_PARTNERS || []);
    const listItems = Array.from(document.querySelectorAll('#partner-list li'));
    const markers = [];

    partners.forEach((p, idx) => {
      const m = L.circleMarker([p.lat, p.lon], {
        radius: 6,
        color: '#0ea5e9',
        weight: 2,
        fillColor: '#22d3ee',
        fillOpacity: 0.8
      }).addTo(map).bindTooltip(p.name);

      const key = 'p' + idx;
      m.on('mouseover', () => {
        listItems.forEach(li => li.classList.toggle('highlight', li.dataset.key === key));
      });
      m.on('mouseout', () => {
        listItems.forEach(li => li.classList.remove('highlight'));
      });
      markers.push(m);
    });

    // Hover list -> emphasize marker
    listItems.forEach((li, idx) => {
      li.addEventListener('mouseover', () => {
        const m = markers[idx];
        if(m) m.setStyle({ radius: 8, color: '#0284c7' });
      });
      li.addEventListener('mouseout', () => {
        const m = markers[idx];
        if(m) m.setStyle({ radius: 6, color: '#0ea5e9' });
      });
    });
  }

  window.initBioARCMap = initBioARCMap;
  document.addEventListener('DOMContentLoaded', initBioARCMap);
})();
