---
title: Installation outils de performances
layout: post
---

Nous avons installé quelques plugins dans l'admin Drupal et un tracker pingdom


###Statistiques moyennes###

* Temps moyen de chargement du site par périphérique
  * Sur PC 		: 3.5s
  * Sur tablet 	: 3.7s
  * Sur mobile 	: 7.7s

* Temps moyen de chargement du site par type
  * Network 	: 1.3s
  * Backend 	: 1.1s
  * Frontend 	: 2.5s

###Liste des pages présentant le plus grand temps de chargement###

| Pages	        	| Chargement    | 
| ----------------- |:-------------:|
| ateliers      	| 4.1s 			|
| mej_quoi	    	| 6.4s      	|
| Sujets 			| 11s     		|
| association 		| 16s     		|
| Congres2014 		| 11s     		|
| transports-lille 	| 6.4s     		|

###Action###

Nous allons procéder à l'optimisation du fichier .htacess puis thème et oberserver les changements.

* Modification du .htacess : le 21 mai 2014
* Modification du thème	   : ??