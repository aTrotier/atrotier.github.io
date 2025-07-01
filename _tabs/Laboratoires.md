---
layout: default
hidden: true
order: 7
---

# Liste des laboratoires et contacts attachés au réseau SAIN
{% raw %}
<!-- Leaflet CSS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

<!-- Map container with fixed height -->
<div id="map" style="height: 400px; margin-bottom: 1em;"></div>

<!-- Leaflet JS + Markers -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function() {
var map = L.map('map').setView([47.0, 2.0], 5); // France center
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// Markers
L.marker([45.75, 4.85]).addTo(map).bindPopup("CERMEP (Lyon/Bron)");
L.marker([43.6045, 1.4442]).addTo(map).bindPopup("CREFRE / ToNIC (Toulouse)");
L.marker([48.8566, 2.3522]).addTo(map).bindPopup("CRI / FRIM, ICM (CENIR), PIV (Paris)");
L.marker([43.2965, 5.3698]).addTo(map).bindPopup("CRMBM (Marseille)");
L.marker([44.8378, -0.5792]).addTo(map).bindPopup("CRMSB / IBIO (Bordeaux)");
L.marker([49.1829, -0.3707]).addTo(map).bindPopup("CYCERON (Caen)");
L.marker([45.1885, 5.7245]).addTo(map).bindPopup("GIN, IRMage (Grenoble)");
L.marker([48.5734, 7.7521]).addTo(map).bindPopup("ICube (Strasbourg)");
L.marker([44.8067, -0.6067]).addTo(map).bindPopup("IHU LIRYC (Pessac)");
L.marker([45.7772, 3.0870]).addTo(map).bindPopup("IVIA (Clermont-Ferrand)");
L.marker([50.6292, 3.0573]).addTo(map).bindPopup("LIIFE / PLBS (Lille)");
L.marker([45.7719, 4.8902]).addTo(map).bindPopup("PILoT/CREATIS (Villeurbanne)");
L.marker([48.1173, -1.6778]).addTo(map).bindPopup("PRISM (Rennes)");
L.marker([47.4784, -0.5632]).addTo(map).bindPopup("PRISM (Angers)");
L.marker([49.8950, 2.3020]).addTo(map).bindPopup("PIRMPA (Amiens)");
});
</script>
{% endraw %}

* TOC
{:toc}


---

## [CERMEP](https://www.cermep.fr) - Lyon/Bron

CERMEP - imagerie du vivant

<span style="font-weight:bold; color:#52bd31;">Lien et réseaux :</span>
* www.cermep.fr

<span style="font-weight:bold; color:#52bd31;">Contacts</span>
* plateforme préclinique ANIMAGE : Radu BOLBOS ( radu.bolbos@cermep.fr )
* directeur du CERMEP : Luc ZIMMER ( luc.zimmer@cermep.fr )
  
---

## [CREFRE](https://anexplo.genotoul.fr/exploration-non-invasive/) / [ToNIC](https://tonic.inserm.fr/) - Toulouse

Unité/Service/Plateforme : UMS 006 – CREFRE , Service Exploration Non Invasive, Plateforme GenoToul Anexplo (IRM 7T, TEP/CT, échocardiographie, échoélastographie).

<span style="font-weight:bold; color:#52bd31;">Lien et réseaux :</span>
* Liens site web: https://anexplo.genotoul.fr/exploration-non-invasive/
* Appartenance FLi : https://www.francelifeimaging.fr/qui-sommes-nous/noeuds/occitan/

<span style="font-weight:bold; color:#52bd31;">Contacts</span>
* liste.crefre-eni@inserm.fr
* Franck Desmoulin (Responsable IRM CR Inserm ToNIC/CREFRE) franck.desmoulin@inserm.fr 05 62 74 61 97 (ToNIC) / 05 82 74 17 67 (CREFRE-ENI)
* Carine Pestourie (Responsable CREFRE-ENI) carine.pestourie@inserm.fr 05 82 74 16 80

---

## [CRI - Paris](https://cri1149.fr/) / [FRIM - Paris](https://plateformes.u-paris.fr/federation-de-recherche-en-imagerie-multimodale-frim/)

<span style="font-weight:bold; color:#52bd31;">Contacts</span>

* Sabrina Doblas: sabrina.doblas@inserm.fr
* Philippe Garteiser: philippe.garteiser@inserm.fr

---

## [CRMBM - Marseille](https://crmbm.univ-amu.fr/)

<span style="font-weight:bold; color:#52bd31;">Contacts</span>
* Frank Kober (séquences) : frank.kober@univ-amu.fr
* Lucas Soustelle (séquences) : lucas.soustelle@univ-amu.fr ; @LucasSoustelle
* Joevin Sourdon (plateforme) : joevin.sourdon@univ-amu.fr
  
---

## [CRMSB](https://www.rmsb.u-bordeaux.fr/) /  [Plateforme IBIO](https://pibio-bordeaux.cnrs.fr) - Bordeaux
<span style="font-weight:bold; color:#52bd31;">Lien et réseaux :</span>
- https://www.rmsb.u-bordeaux.fr/
- https://pibio-bordeaux.cnrs.fr
- https://github.com/CRMSB

<span style="font-weight:bold; color:#52bd31;">Contacts</span>
* Aurélien Trotier : aurelien.trotier@rmsb.u-bordeaux.fr; @aTrotier
* Emeline Ribot : emeline.ribot@rmsb.u-bordeaux.fr
* Sylvain Miraux (directeur plateforme): sylvain.miraux@rmsb.u-bordeaux.fr

---

## [CYCERON - Caen](https://www.cyceron.fr/)

<span style="font-weight:bold; color:#52bd31;">Contacts</span>
* Mikaël Naveau: naveau@cyceron.fr ; @naveau
* Nicolas Delcroix: delcroix@cyceron.fr

---

## [GIN - Grenoble](https://tinyurl.com/d9vx4b3h)
<span style="font-weight:bold; color:#52bd31;">Lien et réseaux :</span>
* https://github.com/nifm-gin
* https://www.researchgate.net/lab/Emmanuel-L-Barbier-Lab
* @nifm_gin

<span style="font-weight:bold; color:#52bd31;">Contacts</span>
* Emmanuel Barbier: emmanuel.barbier@univ-grenoble-alpes.fr
* Michel Dojat: Michel.Dojat@univ-grenoble-alpes.fr; @micheldojat
* Benjamin Lemasson: benjamin.lemasson@univ-grenoble-alpes.fr; @benlemasson

---

## [ICM (CENIR) - Paris](https://institutducerveau-icm.org/en/cenir-irm-en/)

<span style="font-weight:bold; color:#52bd31;">Contact</span>

* Mathieu Santin: mathieu.santin@icm-institute.org

---

## [ICube - Strasbourg](https://icube.unistra.fr/)
<span style="font-weight:bold; color:#52bd31;">Lien et réseaux :</span>
* https://plateforme.icube.unistra.fr/iris/
* https://icube.unistra.fr/
* https://www.linkedin.com/company/icube-strasbourg/

<span style="font-weight:bold; color:#52bd31;">Contacts</span>
* Chrystelle Po : po@unistra.fr
* Mary Mondino : mondino@unistra.fr
* Vincent Noblet : vincent.noblet@unistra.fr
  
---

## [IHU LIRYC - Pessac](https://www.ihu-liryc.fr/les-plateformes-de-recherche-et-dinnovation/#1) 

Plateforme Imagerie IHU LIRYC (IRM, RX, µCT, échographie, scanner) pré clinique petits et gros animaux.
  
<span style="font-weight:bold; color:#52bd31;">Lien et réseaux :</span>
* https://www.ihu-liryc.fr/les-plateformes-de-recherche-et-dinnovation/#1

<span style="font-weight:bold; color:#52bd31;">Contacts</span>
* Julie Magat:  julie.magat@ihu-liryc.fr -  05 56 35 38 19 33
* plateforme@ihu-liryc.fr

---

## [IVIA - Clermont-ferrand](https://ivia.uca.fr/)
<span style="font-weight:bold; color:#52bd31;">Lien et réseaux :</span>
* https://ivia.uca.fr/
* https://www6.inrae.fr/agroresonance
* https://twitter.com/AgroResonance

<span style="font-weight:bold; color:#52bd31;">Contacts</span>
* ivia@uca.fr
* agroresonance-ara@inrae.fr
* Leslie Mazuel : leslie.mazuel@uca.fr

---

## [IRMage - Grenoble](https://irmage.univ-grenoble-alpes.fr)
<span style="font-weight:bold; color:#52bd31;">Lien et réseaux :</span>
* https://irmage.univ-grenoble-alpes.fr

<span style="font-weight:bold; color:#52bd31;">Contacts</span>
* Hervé Mathieu : herve.mathieu@univ-grenoble-alpes.fr



---

## [LIIFE / PLBS - Lille](https://ums-plbs.univ-lille.fr/les-plateformes-constitutives/imagerie-du-vivant-exploration-fonctionnelle)
<span style="font-weight:bold; color:#52bd31;">Lien et réseaux :</span>
* https://ums-plbs.univ-lille.fr/les-plateformes-constitutives/imagerie-du-vivant-exploration-fonctionnelle
  
<span style="font-weight:bold; color:#52bd31;">Contacts :</span>
* florent.auger@inserm.fr

---

## [PILoT/CREATIS - Villeurbanne](https://www.creatis.insa-lyon.fr/site7/en/PILoT)

Plateforme/Laboratoire: Plateforme d'Imagerie multimodale et expérimentale preclinique de LyonTech associée au laboratoire CREATIS, (modalités IRM, ultrasons et optiques)

<span style="font-weight:bold; color:#52bd31;">Lien et réseaux :</span>
* https://www.creatis.insa-lyon.fr/site7/en/PILoT

<span style="font-weight:bold; color:#52bd31;">Contacts</span>
* contact.pilot@creatis.insa-lyon.fr

---

## [PIV - Paris](https://piv.u-paris.fr)
<span style="font-weight:bold; color:#52bd31;">Lien et réseaux :</span>
* https://piv.u-paris.fr

<span style="font-weight:bold; color:#52bd31;">Contacts</span>
* Gwennhael Autret : gwennhael.autret@inserm.fr (plateforme IRM préclinique)
* Fiche contact du site web pour les autres modalités

---

## [PRISM - Rennes & Angers](https://www.pf-prism.org/bio-scans/)
<span style="font-weight:bold; color:#52bd31;">Lien et réseaux :</span>
* https://www.pf-prism.org/bio-scans/

<span style="font-weight:bold; color:#52bd31;">Contacts</span>
* IRM préclinque (Angers) : florence.franconi@univ-angeers.fr
* IRM préclinque (Rennes) : pierre-antoine.eliat@univ-rennes.fr
* Coordinateur PRISM : francois.mariette@inrae.fr

---

## [PIRMPA - Amiens](https://www.u-picardie.fr/recherche/structures-recherche/plateformes-scientifiques-dequipements-mutualises/plateforme-imagerie-par-resonance-magnetique-pour-petits-animaux-pirmpa)
Plateforme Imagerie par Résonance Magnétique pour Petits Animaux (PIRMPA)

<span style="font-weight:bold; color:#52bd31;">Lien et réseaux :</span>
* [https://www.u-picardie.fr/recherche/structures-recherche/plateformes-scientifiques-dequipements-mutualises/plateforme-imagerie-par-resonance-magnetique-pour-petits-animaux-pirmpa](https://www.u-picardie.fr/recherche/structures-recherche/plateformes-scientifiques-dequipements-mutualises/plateforme-imagerie-par-resonance-magnetique-pour-petits-animaux-pirmpa)

<span style="font-weight:bold; color:#52bd31;">Contacts</span>
* Sidy Fall : sidy.fall@u-picardie.fr
* Olivier Balédent