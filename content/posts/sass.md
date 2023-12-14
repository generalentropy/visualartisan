---
title: "SASS : du CSS, mais en mieux"
date: 2023-12-05T09:10:22+01:00
draft: false
weight: 1
tags: ["sass", "scss", "css", "preprocessor", "mixin"]
# cover:
#   image: /img/posts/javascript.jpg
#   alt: "edc"
#   caption: "caption test"
---

![sass article cover](/img/posts/sass/sasscover.jpg)
https://sass-lang.com/

Lors de mes pérégrinations sur [CodePen](https://codepen.io/), je tombais souvent sur des exemples utilisant SASS, SCSS, mais aussi Less, Stylus, et d'autres...

C'était un peu obscur. J'avais plus ou moins compris que les autres syntaxes CSS offraient des fonctionnalités additionnelles, mais pour moi, le CSS standard me semblait suffisant.

L'idée d'utiliser des outils supplémentaires ne me paraissait pas pertinente, j'étais déjà bien occupé avec le CSS traditionnel. Je me disais que ces outils n'étaient pas pour moi et qu'ils allaient simplement ajouter une couche de complexité à mon code. Surtout que le prix à payer était cher : apprendre une nouvelle syntaxe.
C'est pour ces raisons que je ne m'y étais jamais réellement intéressé. Je me trompais.

Plus tard, avec davantage d'expérience et engagé dans des projets un peu plus complexes, j'ai réalisé l'importance de séparer et d'organiser mon CSS pour une meilleure lisibilité et une meilleure gestion. À ce moment, j'ai compris que j'allais avoir besoin de plus que ce que le CSS standard pouvait offrir. Cela m'a incité à explorer les préprocesseurs CSS.

Mon choix s'est arrêté sur SASS, et j'ai immédiatement accroché !

### Un préprocesseur CSS, dont vous ne pourrez plus vous passer!

Son système de variables, bien que similaire à certaines fonctionnalités du CSS vanilla, son système de mixins, de nesting (sélecteurs imbriqués), d'import/export, et surtout, la possibilité de splitter facilement ses fichiers pendant le développement en font un outil puissant.

C'est bien rangé, c'est beau.

![sass](/img/posts/sass/sass1.png)

_Pour la production SASS compile notre code en un seul fichier CSS standard._

Et surtout, Sass est facile à apprendre et nous permet d'y aller à notre rythme, car on peut tout à fait mélanger la syntaxe CSS classique et le SCSS.

> Note: Si vous utilisez ou prévoyez d'utiliser Sass, pour l'importation, @use est désormais préféré à @import, et ce pour plusieurs raisons, entre autres :
>
> - **Utilisation** : Introduit comme remplacement de `@import`, `@use` est une manière plus moderne et puissante d'inclure des fichiers Sass. Il est conçu pour résoudre de nombreux problèmes associés à `@import`.
> - **Comportement** : Il charge les styles, variables, fonctions et mixins d'un autre fichier Sass. Une fois qu'un fichier est utilisé avec `@use`, il devient un "module", et ses membres (variables, mixins, > etc.) sont uniquement accessibles sous un espace de noms par défaut, ce qui aide à prévenir les conflits de nommage.
> - **Avantages** : `@use` n'inclut le fichier qu'une seule fois, peu importe le nombre de fois qu'il est utilisé, évitant ainsi les CSS en double. Il offre également une meilleure encapsulation et une > meilleure clarté quant à l'origine des différents styles et fonctions.

Pour faire simple, oubliez @import.

### SASS, SCSS, Qu'est-ce donc cette diablerie ?

La différence entre SASS et SCSS tient essentiellement à leur syntaxe respective.

Sass n'utilise pas les accolades ni les points-virgules, mais à la manière de Python utilise l'indentation.

![sass](/img/posts/sass/sass2.png)
_Syntaxe indentée_

![sass](/img/posts/sass/sass3.png)
_Syntaxe apparue plus tard et très largement adoptée._

SCSS (Sassy CSS) a été ajoutée à Sass pour plusieurs raisons clés, visant à améliorer l'expérience de développement et la compatibilité avec le CSS existant

- Compatible avec le CSS standard. Cela signifie que tout fichier CSS valide est également un fichier SCSS valide. Cette compatibilité facilite l'intégration de Sass dans des projets existants sans avoir besoin de réécrire le CSS existant.

- De fait, il est facile d'apprendre et d'adopter SCSS. Permet aux développeurs de commencer à utiliser Sass de manière graduelle. Ils peuvent commencer par écrire du CSS standard et introduire progressivement des fonctionnalités SCSS au besoin.

Personnellement, et comme beaucoup, je préfère la syntaxe SCSS.

### Les mixins

C'est une fonctionnalité puissante qui permet de créer des groupes de déclarations CSS que l'on peut réutiliser comme bon nous semble.

Comme un exemple vaut 1000 mots :
![sass](/img/posts/sass/mixin.png)

Comme illustré dans l'exemple ci-dessus, les mixins de Sass offrent une flexibilité et une puissance remarquables pour la gestion des styles CSS.

Ils permettent de regrouper plusieurs propriétés CSS sous un seul nom de mixin, que l'on peut ensuite réutiliser facilement.

C'est particulièrement utile pour des motifs de style récurrents (boutons personnalisés, configuration flex ou grid...). En plus les mixins peuvent accepter des arguments, ce qui permet une adaptation dynamique des styles.

### Règles imbriquées

Personnellement je n'utilise pas (ou peu) les règles imbriquées car je trouve que ça complexifie le code et le rend moins lisible, alors qu'avec sass je veux faire l'inverse.

![sass](/img/posts/sass/sass4.png)

![sass](/img/posts/sass/sass5.png)
_Règles imbriquées_

Sans compter que si je souhaite rapidement chercher ".navbar li", je ne trouverai rien.

Certains adorent, ce n'est pas mon cas. A vous de tester!

### Pour installer SASS

avec Node.js (installation globale)

```
npm install -g sass
```

Sous Windows si vous utilisez Chocolatey

```
choco install sass
```

Avec Homebrew, pour les utilisateurs de MacOS ou Linux

```
brew install sass/sass/sass
```

> A noter qu'il existe plusieurs versions de Sass, notamment une version en pur JavaScript et une version Dart un peu plus rapide.
