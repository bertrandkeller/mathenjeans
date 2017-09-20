---
title: Optimisation des images d'illustration
layout: post
---

Certaines pages affichent des temps de chargement très important (/mej_quoi), il est possible que ce soit dû aux images de la colonne de gauche.
Nous allons appeler des images plus adaptées.


### Statistiques moyennes ###

* [Pingdom](http://tools.pingdom.com/fpt/#!/bXRG89/http://www.mathenjeans.fr/)
* [GTMetrix](http://gtmetrix.com/reports/www.mathenjeans.fr/Z1aZYVRJ)

Note : 
- 78/100 (Pingdom) 
- F (Page Speed) 
- B (Yslow)

Temps de chargement : 
- 3,72s (Pingdom) 
- 4,59s (GT metric) 
- 4,01s (local)  

* Temps moyen de chargement du site par périphérique
  * Sur PC    : 3.5s
  * Sur tablet  : 3.7s
  * Sur mobile  : 7.7s

* Temps moyen de chargement du site par type
  * Network   : 1.3s
  * Backend   : 1.1s
  * Frontend  : 2.5s

#### Liste des pages présentant le plus grand temps de chargement ####

{:.table .table-striped}
| Pages             | Chargement    | 
| ----------------- |:-------------:|
| ateliers          | 4.1s          |
| mej_quoi          | 6.4s          |
| Sujets            | 11s           |
| association       | 16s           |
| Congres2014       | 11s           |

### Action ###

* Optimisation des images d'illustration en page d'accueil et en colonne de gauche (/mej_quoi).

### Résultat ###

* [Pingdom](http://tools.pingdom.com/fpt/#!/GvVPd/http://www.mathenjeans.fr/)
* [GTMetrix](http://gtmetrix.com/reports/www.mathenjeans.fr/Io9dV0uk)

Note : 
- 76/100 (Pingdom) 
- F (Page Speed) 
- B (Yslow)

Temps de chargement : 
- 2,60s (Pingdom) 
- 3,82s (GT metric) 
- 2,67s (local)

* Temps moyen de chargement du site par périphérique
  * Sur PC      : 2.7s
  * Sur tablet  : 4.8s
  * Sur mobile  : 2.2s

* Temps moyen de chargement du site par type
  * Network   : 1.2s
  * Backend   : 1.2s
  * Frontend  : 1.7s

#### Liste des pages présentant le plus grand temps de chargement ####

{:.table .table-striped}
| Pages             | Chargement    | 
| ----------------- |:-------------:|
| ateliers          | 3.9s          |
| mej_quoi          | 0.94s         |
| Sujets            | 2.1s          |
| association       | 1.7s          |
| Congres2014       | 2.5s          |

### Appréciation ###

Le gain de temps de chargement sur la page d'accueil est très important après avoir optimisé les 2 images (affiche et carte). Nous devrions avoir un gain important aussi sur les pages affichant des images en colonne de gauche (/mej_quoi).
