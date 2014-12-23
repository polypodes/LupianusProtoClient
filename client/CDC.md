## Architecture de l'information

L'organisation de l'information suit une logique arborescente à trois niveaux : Parcours > Point d'intérêt > Informations et documents liés

### Les Parcours

Un parcours est constituée d'une suite de points d'Intérêt proposés dans un ordre particulier, avec un début et une fin. 

En dehors des POI qui le constituent, un parcours peut contenir un petit nombre d'éléments descriptifs (méta-données, etc.).


### Définition d'un Parcours

Les types d'informations que peut contenir un parcours sont :
 
- 1 titre (texte)
- 1 description courte (texte)
- 1 description longue (texte riche)
- n images *uploadées* et hébergées dans l'application web.
- 1 liste ordonnée de points d'intérêts


### Les Points d'Intérêts (POI)

Un même POI peut se retrouver dans plusieurs parcours, mais son contenu est le même à chaque fois.


### Définition d'un POI

Les types d'informations que peut contenir un POI sont : 

- 1 titre (texte)
- 1 géo-localisation par latitude/longitude, sous la forme d'un point
- 1 adresse postale correspondante à la géo-localisaiton
- 1 description courte (texte)
- 1 description longue (texte riche)
- n images *uploadées* et hébergées dans l'application web.
- n sons et n videos qui accompagnent le POI. Ces médias sont hébergées sur une plateforme tierce en ligne : SoundCloud, Youtube, Dailymotion, Vimeo.

Le calcul du point en latitude/longitude sera proposé automatiquement à partir de la saisie d'une adresse correspondant à ce point d'intérêt. Les valeurs latitude/longitude calculées sont librement éditables.  Le service tiers de géo-localisation sera celui de Google Maps Geolocation API, dans sa version gratuite. Un compte Google en version gratuite au nom du CIAP sera ouvert pour ce besoin.


## Principes de mise à jour des parcours disponibles en ligne.

L'interface d'administration qui permet de modifier les parcours en ligne est elle-même hébergée en ligne, et sont directement connectée à ces parcours : il n'y a pas de processus de déploiement manuel des mises à jours de parcours, et les contenus partagés entre l'interface d'administration et les parcours visibles en ligne sont toujours synchrones.

Tous les champs listés ci-dessous sont librement modifiables par le rédacteur. 

L'interface d'administration permet de créer, consulter, modifier et supprimer un parcours ou un point d'intérêt.

Il revient au 

## Principes de mise à jour du Parcours Saint-Lupien

Le Parcours Saint-Lupien est un parcours particulier, qui est disponible hors-ligne : Son contenu est administré de la même manière que les autres parcours. Il est simplement le seul à pouvoir être exporté et consulté hors-ligne via une application dédiée.

Les textes et les images du Parcours Saint-Lupien peuvent être modifiées car elles peuvent être raisonnablement mises à jour. 

En revanche les sons et videos ne peuvent pas être modifiés. Ils sont installés par défaut dans l'application lors du déploiement dans l'application. 

Dans la version en ligne, ces sons et videos sont servis par une plateforme tierce en ligne : SoundCloud, Youtube, Dailymotion, Vimeo. Dans la version hors-ligne (tablettes distribués aux visiteurs) elles sont pré-installées dans l'application et ne pourront pas être modifiées par le rédacteur.
Le processus de mise à jour ignore les modifications effectuées concernant ces médias de type son et vidéo, et la version locale des ces médias est systématiquement utilisée. Les sons et vidéos illustrant le parcours Saint-Lupien doivent donc être produits, intégrés et recettés avant la livraison définitive de l'application sur les tablettes.

## Processus de mise à jour du Parcours Saint-Lupien

Pour mettre à jour le Parcours Saint-Lupien, les tablettes concernés doivent être manipulées les unes après les autres. Le principe de mise à jour sera le même à chaque fois :

- sortie du mode *kiosque* ;
- connexion de la tablette à Internet ;
- un bouton caché permettra à l'administrateur d'enclencher la mise à jour de l'application ;
- le transfert de la mise à jour sur la tablette indiquera si celui-ci s'est déroulé correctement ou non ;
- une fois achevée, l'administrateur est chargé de remettre l'application en mode *kiosque*, à destination du public.


## Limites du support et de la maintenance

- le support ne concerne que l'application, en mode en-ligne et en mode hors-ligne.
- la maintenance de l'application hors-ligne dépend d'une certaine version du système d'exploitation de la tablette qui héberge cette application. Cette version est celle des tablettes à la date où elles sont livrées au prestataire pour qu'il procède au déploiement initial de l'application sur celles-ci. Le changement de version de ce système d'exploitation rend caduque le support et la maintenance de l'application tel qu'il est prévu dans la prestation initiale. Le support et la maintenance restent possible, mais sous une autre forme d'engagement, qui restera à contractualiser avec le Prestataire responsable de cette maintenance applicative; et dans les limites d'une nouvelle version du système d'exploitation, connue à l'avance par le prestataire.