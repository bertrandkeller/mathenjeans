---
title: Installation outils de performances
layout: post
---

Nous avons installé quelques plugins dans l'admin Drupal et un tracker pingdom


###Statistiques moyennes###

Note : 
- 91/100 (Pingdom) 
- F (Page Speed) 
- C (Yslow)

Temps de chargement : 
- 4,76s (Pingdom) 
- 8,74s (GT metric) 
- 6,81s (local) 


* Temps moyen de chargement du site par périphérique
  * Sur PC 		: 3.5s
  * Sur tablet 	: 3.7s
  * Sur mobile 	: 7.7s

* Temps moyen de chargement du site par type
  * Network 	: 1.3s
  * Backend 	: 1.1s
  * Frontend 	: 2.5s

###Liste des pages présentant le plus grand temps de chargement###

| Pages	        	  | Chargement    | 
| ----------------- |:-------------:|
| ateliers      	  | 4.1s 			    |
| mej_quoi	    	  | 6.4s      	  |
| Sujets 			      | 11s     		  |
| association 		  | 16s     		  |
| Congres2014 		  | 11s     		  |
| transports-lille 	| 6.4s     		  |

###Action###

* Modification du .htacess

###Résultat###

* [Pingdom](http://tools.pingdom.com/fpt/#!/bXRG89/http://www.mathenjeans.fr/)
* [GTMetrix](http://gtmetrix.com/reports/www.mathenjeans.fr/Z1aZYVRJ)

Note : 
- 77/100 (Pingdom) 
- F (Page Speed) 
- B (Yslow)

Temps de chargement : 
- 3,93s (Pingdom) 
- 6,00s (GT metric) 
- 4,30s (local) 

| Pages             | Chargement    | 
| ----------------- |:-------------:|
| ateliers          | 0.59s         |
| mej_quoi          | 6.4s          |
| Sujets            | 2.1s          |
| association       | 7.9s          |
| Congres2014       | 2.5s          |
| transports-lille  | 6.4s          |

###Appréciation###

Nous avons largement fait baissé le temps de chargement de la page d'accueil. (Le score Pingdom est bizarrement plus bas ans en comprendre la raison, nous passerons outre car nous essayerons de la faire remonter par la suite.)

Note : résultat à priori satisfaisant sur la liste de pages mais non significatif car ne prenant pas en compte les problèmes de cache pour certain utilisateurs.