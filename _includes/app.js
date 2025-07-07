console.log('Hello world from app.js');
document.body.insertAdjacentHTML('beforeend', '<p style="color:green">Hello world from app.js</p>');
// Données des laboratoires avec leurs IRM
const labs = [
  { name: "CERMEP (Lyon/Bron)", position: [45.75, 4.85], irm: ["1.5T", "3T", "7T"], spectro: [], cryo: [] },
  { name: "CREFRE / ToNIC (Toulouse)", position: [43.6045, 1.4442], irm: ["7T"], spectro: [], cryo: [] },
  { name: "CRI / FRIM, ICM (CENIR), PIV (Paris)", position: [48.8566, 2.3522], irm: ["3T", "7T", "11.7T"], spectro: ["3T", "7T", "11.7T"], cryo: ["11.7T"] },
  { name: "CRMBM (Marseille)", position: [43.2965, 5.3698], irm: ["3T", "7T"], spectro: ["4.7T"], cryo: ["7T"] },
  { name: "CRMSB / IBIO (Bordeaux)", position: [44.8378, -0.5792], irm: ["4.7T", "7T"], spectro: ["11.7T"], cryo: ["7T"] },
  { name: "CYCERON (Caen)", position: [49.1829, -0.3707], irm: ["3T", "7T"], spectro: [], cryo: ["7T"] },
  { name: "GIN, IRMage (Grenoble)", position: [45.1885, 5.7245], irm: ["3T", "4.7T", "9.4T"], spectro: ["11.7T"], cryo: ["9.4T"] },
  { name: "ICube (Strasbourg)", position: [48.5734, 7.7521], irm: ["1.5T", "3T", "7T", "Autre"], spectro: [], cryo: ["7T"] },
  { name: "IHU LIRYC (Pessac)", position: [44.8067, -0.6067], irm: ["1.5T", "9.4T"], spectro: [], cryo: [] },
  { name: "IVIA (Clermont-Ferrand)", position: [45.7772, 3.0870], irm: ["3T", "4.7T", "9.4T", "11.7T"], spectro: ["9.4T"], cryo: [] },
  { name: "LIIFE / PLBS (Lille)", position: [50.6292, 3.0573], irm: ["7T"], spectro: ["7T"], cryo: [] },
  { name: "PILoT/CREATIS (Villeurbanne)", position: [45.7719, 4.8902], irm: ["1.5T", "3T", "7T", "11.7T"], spectro: [], cryo: [] },
  { name: "PRISM (Rennes)", position: [48.1173, -1.6778], irm: ["4.7T"], spectro: ["11.7T"], cryo: [] },
  { name: "PRISM (Angers)", position: [47.4784, -0.5632], irm: ["7T"], spectro: ["7T"], cryo: ["7T"] },
  { name: "PIRMPA (Amiens)", position: [49.8950, 2.3020], irm: ["7T"], spectro: [], cryo: [] },
];

// Initialisation de la carte
var map = L.map('map2').setView([47.0, 2.0], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Création des marqueurs et gestion du filtrage

let markers = [];
function updateMarkers(selectedIRM, selectedSpectro) {
  // Supprimer les marqueurs existants
  markers.forEach(m => map.removeLayer(m));
  markers = [];
  if ((selectedIRM === 'none' && selectedSpectro === 'none')) {
    return;
  }
  labs.forEach(lab => {
    // Filtrage IRM
    const showIRM = (selectedIRM === 'all' || lab.irm.includes(selectedIRM));
    // Filtrage Spectro
    const showSpectro = (selectedSpectro === 'all' || lab.spectro.includes(selectedSpectro));

    // Cas 1 : Spectro = all => afficher tous les labos avec spectro en rouge
    if (selectedSpectro === 'all' && lab.spectro.length > 0) {
      const marker = L.marker(lab.position, {
        icon: L.icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        })
      }).addTo(map)
        .bindPopup(lab.name + '<br>IRM : ' + lab.irm.join(', ') + '<br>Spectro : ' + (lab.spectro.length ? lab.spectro.join(', ') : 'Aucun'));
      markers.push(marker);
      return;
    }

    // Cas 2 : Spectro spécifique (hors none/all) => afficher en rouge les labos qui ont ce spectro
    if (selectedSpectro !== 'none' && selectedSpectro !== 'all' && lab.spectro.includes(selectedSpectro)) {
      const marker = L.marker(lab.position, {
        icon: L.icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        })
      }).addTo(map)
        .bindPopup(lab.name + '<br>IRM : ' + lab.irm.join(', ') + '<br>Spectro : ' + (lab.spectro.length ? lab.spectro.join(', ') : 'Aucun'));
      markers.push(marker);
      return;
    }

    // Cas 3 : IRM (hors none) => afficher en bleu les labos qui correspondent au filtre IRM
    if (selectedIRM !== 'none' && showIRM) {
      // Si "tous" est sélectionné pour IRM, afficher en violet si le labo a au moins une cryosonde
      let markerOptions = {};
      if (
        (selectedIRM === 'all' && lab.cryo && lab.cryo.length > 0) ||
        (selectedIRM !== 'all' && lab.cryo && lab.cryo.includes(selectedIRM))
      ) {
        markerOptions = { icon: L.icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        }) };
      }
      const marker = L.marker(lab.position, markerOptions).addTo(map)
        .bindPopup(lab.name + '<br>IRM : ' + lab.irm.join(', ') + '<br>Spectro : ' + (lab.spectro.length ? lab.spectro.join(', ') : 'Aucun') + '<br>Cryosonde : ' + (lab.cryo && lab.cryo.length ? lab.cryo.join(', ') : 'Aucune'));
      markers.push(marker);
      return;
    }
    // Sinon, ne rien afficher
  });
}

// Initialiser avec tous les marqueurs
updateMarkers('all', 'all');

// Gérer le changement de sélection
const irmSelect = document.getElementById('irm-select');
const spectroSelect = document.getElementById('spectro-select');
irmSelect.addEventListener('change', function() {
  updateMarkers(irmSelect.value, spectroSelect.value);
});
spectroSelect.addEventListener('change', function() {
  updateMarkers(irmSelect.value, spectroSelect.value);
});