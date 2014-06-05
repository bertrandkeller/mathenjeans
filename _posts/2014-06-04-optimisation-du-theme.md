---
title: Optimisation des images d'illustration
layout: post
---

Certaines pages affichent des temps de chargement très important (/mej_quoi), il est possible que ce soit dû aux images de la colonne de gauche.
Nous allons appeler des images plus adaptées.


###Statistiques moyennes###

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

####Liste des pages présentant le plus grand temps de chargement####

{:.table .table-striped}
| Pages             | Chargement    | 
| ----------------- |:-------------:|
| ateliers          | 3.9s          |
| mej_quoi          | 0.94s         |
| Sujets            | 2.1s          |
| association       | 1.7s          |
| Congres2014       | 2.5s          |

###Action###

* Optimisation du thème du site et suppression des image d'illustration pour diminuer les requêtes.

###Résultat###

* [Pingdom](http://tools.pingdom.com/fpt/#!/ck3HNl/http://www.mathenjeans.fr/)
* [GTMetrix](http://gtmetrix.com/reports/www.mathenjeans.fr/96PE5pB2)

Note : 
- 76/100 (Pingdom) 
- E (Page Speed) 
- B (Yslow)

Temps de chargement : 
- 2,18s (Pingdom) 
- 3,25s (GT metric) 
- 2,56s (local)

* Temps moyen de chargement du site par périphérique
  * Sur PC      : 2.0s
  * Sur tablet  : 5.8s
  * Sur mobile  : 0.60s

* Temps moyen de chargement du site par type
  * Network   : 1.2s
  * Backend   : 1.1s
  * Frontend  : 1.1s

####Liste des pages présentant le plus grand temps de chargement####

{:.table .table-striped}
| Pages             | Chargement    | 
| ----------------- |:-------------:|
| ateliers          | 3.3s          |
| mej_quoi          | 0.56s         |
| Sujets            | 1.0s          |
| association       | 1.1s          |
| Congres2014       | 1.2s          |

###Appréciation###

Après la mise en place des 4 actions d'optimisation des performances, on remarque que le chargement du frontend a nettement diminué. On arrive à des temps de chargement raisonnable (quand les pages sont en cache Drupal). Les tablettes et portables présentent des chargement moins ahurissant qu'auparavant.

On peut donc penser que l'optimisation du front-end est terminée. Les résultats de chargement de pages caractéristiques nous aménera à présenter des moyens de diminuer leur chargement. 
