---
title: "React - Mises à jour d'état"
date: 2023-11-11T15:50:17+01:00
draft: false
weight: 1
tags: ["javascript", "useState()", "code", "hook", "react"]
# cover:
#   image: /img/posts/javascript.jpg
#   alt: "edc"
#   caption: "caption test"
---

![javascript](/img/posts/react.jpg)

S'il y a bien une chose avec React qui m'a donné du mal, ce sont les mises à jour d'état et surtout la nature asynchrone de ces mises à jour. Je n'arrivais pas à y voir clair et bien comprendre ce qui se passait _behind the scenes_. C'est à dire : quand est-ce que l'état était réellement mis à jour ? Quand les composants étaient-ils rendus ? et surtout pourquoi ça fonctionnait ainsi.

Je les utilisais, ça fonctionnait, mais sans vraiment comprendre.

Pour commencer prenons la fonction fetchMovies() qui contient des mises à jour d'état.

Une fois le composant monté et la fonction fetchMovies() exécutée, que vont afficher les deux console.log() ?

> 1. true/false ?
> 2. true/true ?
> 3. false/false ?

```
export default function MonComposant()
{
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(function () {
    async function fetchMovies() {

      setIsLoading(true);

      console.log(isLoading);

      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
      );
      const data = await res.json();

      setMovies(data.Search);

      setIsLoading(false);

      console.log(isLoading);

    }

    fetchMovies();
  }, []);

 ...

```

La bonne réponse est **3. false/false**.

### Mais pourquoi ?

Ceci tient au fait que React planifie **et** batch les mises à jour d'état.

**Planifie** : les mises à jour d'état **ne sont pas executées directement** mais planifiées, elles sont en file d'attente, pour ainsi dire.
Ceci est valable que vous ayez une mise à jour d'état ou plusieurs.

**Batch** : React va regrouper toutes les mises à jour d'état (pour optimiser les performances). Si vous avez plusieurs appels à `setState` dans le même bloc de code, React les "regroupe" et les planifie pour s'exécuter après la fin de l'exécution du bloc de code.

C'est la raison pour laquelle, après `setIsLoading(true)` `console.log(isLoading)` affiche **false** : à ce moment, l'état n'est pas encore mis à jour.

A noter : le batching ne garantit pas que toutes les mises à jour d'état se produiront dans un seul rendu **dans tous les cas**. Il y a des exceptions, notamment avec des mises à jour d'état déclenchées dans certains contextes.

### Mises à jour d'état dans les fonctions imbriquées

Lorsque vous avez des mises à jour d'état dans des fonctions imbriquées, le même principe s'applique. React attend la fin de l'exécution de **l'ensemble du contexte d'exécution** avant de procéder aux mises à jour d'état.

**Cela signifie que même si vous avez des mises à jour d'état dans des fonctions imbriquées ou des callbacks, React les regroupe et les applique en une seule fois à la fin de l'exécution du contexte englobant.**

```
function someFunction() {
  // du code

  // Mise à jour d'état 1
  setSomeState(newValue);

  function nestedFunction() {
     // du code

    // Mise à jour d'état 2
    setAnotherState(anotherValue);
  }

  nestedFunction();

  // Mise à jour d'état 3
  setYetAnotherState(yetAnotherValue);
}

```

Dans cet exemple, `setSomeState`, `setAnotherState` et `setYetAnotherState` sont toutes planifiées pour être mises à jour après la fin de l'exécution de `someFunction`, y compris l'exécution de `nestedFunction`. Il n'y aura pas de rendus séparés pour chaque mise à jour d'état, au lieu de cela, un seul rendu qui reflètera toutes ces mises à jour se produira.

### Revenons à la fonction `fetchMovies()`

Avec ces élements et si on suit le déroulement de l'execution, on peut avoir du mal à comprendre quand se produit la mise à jour de l'état et quand notre loader qui dépend de l'état de `Loading` va etre déclenché.

```
async function fetchMovies()

```

Notre fonction s'execute

```
      setIsLoading(true);

```

La mise à jour d'état est planifiée.

Mais alors ? Si notre loader dépend de cet état et qu'il est toujours à `false` quand va t'il démarrer ?

```

      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
      );
      const data = await res.json();

```

`await fetch(...)` est exécutée. Le mot-clé `await` met en pause l'exécution de `fetchMovies` jusqu'à ce que la promesse retournée par `fetch` soit résolue.

Pendant cette pause, le moteur JavaScript ne reste pas inactif, il peut exécuter d'autres tâches, y compris des rendus React.

Et ceci n'est finalement pas spécifique à React, c'est le fonctionnement normal de JavaScript "vanilla".

Pendant que la requête `fetch` est en attente, React en profite donc pour mettre à jour l'état et procéder au rendu du composant.

Une fois la requête `fetch` terminée, la fonction `fetchMovies` reprend son exécution normale là ou elle s'est arrêtée. La suite s'exécute, y compris la nouvelle mise à jour de l'état avec `setIsLoading(false)` qui démontera le composant.

Ce qu'il faut retenir, c'est que même si le code est écrit de manière linéaire, la nature asynchrone de JavaScript et le système de rendu de React permettent des comportements plus complexes pas forcément visibles ni évidents.

> _A noter que depuis React 18 tout est batché (event handler, timeout, promises, et les evenements natifs)_
