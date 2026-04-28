# ES6 Basic — Cheatsheet

## Objectif du projet

Ce projet introduit les bases modernes de JavaScript avec ES6 / ECMAScript 2015.

Notions principales :

- `const`
- `let`
- block scope
- arrow functions
- default parameters
- rest parameter
- spread operator
- template literals
- object shorthand
- computed property names
- method properties
- `for...of`
- `export` / `import`

---

## 1. ES6 / ECMAScript 2015

ES6 est une version majeure de JavaScript qui ajoute une syntaxe plus moderne, plus lisible et plus sûre.

Exemples de nouveautés :

- variables avec `const` et `let`
- fonctions fléchées
- paramètres par défaut
- rest/spread operator
- template literals
- amélioration de la création d’objets
- modules avec `export` et `import`

---

## 2. `const`, `let`, `var`

### `const`

À utiliser quand une variable ne doit pas être réassignée.

```js
const task = 'I prefer const when I can.';
```

Important :

```js
const user = { name: 'Bob' };

user.name = 'Jane'; // autorisé
user = {};          // interdit
```

`const` empêche la réassignation, mais pas la modification interne d’un objet ou d’un tableau.

---

### `let`

À utiliser quand la valeur doit changer.

```js
let combination = 'But sometimes let';
combination += ' is okay';
```

---

### `var`

À éviter en ES6.

Problème principal : `var` n’est pas limité au bloc `{}` mais à la fonction entière.

```js
if (true) {
  var value = 1;
}

console.log(value); // accessible
```

Avec `let` ou `const` :

```js
if (true) {
  let value = 1;
}

console.log(value); // erreur
```

---

## 3. Block scope

Un bloc est une zone entre accolades :

```js
if (condition) {
  // bloc
}
```

`let` et `const` existent uniquement dans leur bloc.

Exemple :

```js
let task = false;

if (true) {
  let task = true;
}

console.log(task); // false
```

Les deux variables `task` sont différentes.

---

## 4. Arrow functions

Fonction classique :

```js
function add(a, b) {
  return a + b;
}
```

Fonction fléchée :

```js
const add = (a, b) => a + b;
```

Avec plusieurs lignes :

```js
const add = (a, b) => {
  return a + b;
};
```

Point important : une arrow function ne crée pas son propre `this`.  
Elle garde le `this` du contexte extérieur.

Exemple utile :

```js
this.addNeighborhood = (newNeighborhood) => {
  this.sanFranciscoNeighborhoods.push(newNeighborhood);
  return this.sanFranciscoNeighborhoods;
};
```

À retenir :

- syntaxe plus courte
- `this` lexical
- pas adaptée pour être utilisée comme constructeur avec `new`

---

## 5. Default parameters

Avant ES6 :

```js
if (value === undefined) {
  value = 10;
}
```

Avec ES6 :

```js
function example(value = 10) {
  return value;
}
```

Exemple du projet :

```js
function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
```

Important :

```js
example(undefined); // utilise la valeur par défaut
example(null);      // n'utilise pas la valeur par défaut
```

La valeur par défaut s’applique seulement si l’argument vaut `undefined`.

---

## 6. Rest parameter

Le rest parameter récupère plusieurs arguments dans un tableau.

```js
function countArguments(...args) {
  return args.length;
}
```

Exemple :

```js
countArguments('Hello', 'Holberton', 2020);
// 3
```

À retenir :

```js
...args
```

signifie : regrouper plusieurs valeurs dans un tableau.

---

## 7. Spread operator

Le spread operator fait l’inverse du rest parameter.

Il déplie un tableau, un objet ou une chaîne.

```js
const array = [1, 2, 3];

const copy = [...array];
```

Concaténer des tableaux :

```js
const result = [...array1, ...array2];
```

Transformer une string en caractères :

```js
const chars = [...'Hello'];
// ['H', 'e', 'l', 'l', 'o']
```

Dans le projet :

```js
[...array1, ...array2, ...string]
```

À retenir :

```text
rest   = regroupe
spread = déplie
```

Même syntaxe `...`, mais comportement différent selon le contexte.

---

## 8. Template literals

Avant :

```js
'Hello ' + name + ', you are ' + age
```

Avec ES6 :

```js
`Hello ${name}, you are ${age}`
```

Syntaxe :

```js
`${variable}`
```

Avantages :

- plus lisible
- moins d’erreurs de concaténation
- permet les chaînes multilignes

Exemple :

```js
const year = 2017;
const income = '$119,868';

return `As of ${year}, income was ${income}.`;
```

Attention : il faut utiliser des backticks :

```js
``
```

pas des guillemets simples ou doubles.

---

## 9. Object property shorthand

Quand la clé et la variable ont le même nom :

Avant :

```js
const budget = {
  income: income,
  gdp: gdp,
  capita: capita,
};
```

Avec ES6 :

```js
const budget = {
  income,
  gdp,
  capita,
};
```

À retenir :

```js
{ income }
```

équivaut à :

```js
{ income: income }
```

---

## 10. Computed property names

Permet de créer dynamiquement une clé d’objet.

Avant :

```js
const budget = {};

budget[`income-${year}`] = income;
```

Avec ES6 directement dans l’objet :

```js
const budget = {
  [`income-${year}`]: income,
};
```

Syntaxe clé :

```js
[expression]: value
```

Exemple :

```js
const year = 2026;

const obj = {
  [`income-${year}`]: 1000,
};
```

Résultat :

```js
{
  'income-2026': 1000
}
```

---

## 11. Object spread

Permet de copier ou fusionner des objets.

```js
const budget = {
  income: 20,
  gdp: 50,
};

const fullBudget = {
  ...budget,
  capita: 10,
};
```

Résultat :

```js
{
  income: 20,
  gdp: 50,
  capita: 10
}
```

À retenir :

```js
...budget
```

copie les propriétés de `budget` dans un nouvel objet.

---

## 12. Method properties

Avant ES6 :

```js
const obj = {
  getValue: function (value) {
    return value;
  },
};
```

Avec ES6 :

```js
const obj = {
  getValue(value) {
    return value;
  },
};
```

Exemple du projet :

```js
const fullBudget = {
  ...budget,

  getIncomeInDollars(income) {
    return `$${income}`;
  },

  getIncomeInEuros(income) {
    return `${income} euros`;
  },
};
```

À retenir : dans un objet, tu peux déclarer une méthode directement sans écrire `function`.

---

## 13. `for...of`

`for...of` sert à parcourir les valeurs d’un élément iterable.

Exemple :

```js
const names = ['Bob', 'Jane'];

for (const name of names) {
  console.log(name);
}
```

Affiche :

```text
Bob
Jane
```

Différence avec `for...in` :

```js
for (const index in array) {
  console.log(index);
}
```

`for...in` parcourt les index ou les clés.

```js
for (const value of array) {
  console.log(value);
}
```

`for...of` parcourt les valeurs.

À retenir :

```text
for...of = valeurs
for...in = index / clés
```

---

## 14. Dynamic object key

Dans `createEmployeesObject`, il fallait créer une clé d’objet avec une variable.

Exemple :

```js
const departmentName = 'Software';
const employees = ['Bob', 'Sylvie'];

const obj = {
  [departmentName]: employees,
};
```

Résultat :

```js
{
  Software: ['Bob', 'Sylvie']
}
```

Attention :

```js
{
  departmentName: employees
}
```

donnerait :

```js
{
  departmentName: [...]
}
```

Alors que :

```js
{
  [departmentName]: employees
}
```

utilise la valeur de la variable comme nom de clé.

---

## 15. `Object.keys`

Dans `createReportObject`, il fallait compter le nombre de départements.

```js
Object.keys(employeesList)
```

renvoie un tableau des clés.

Exemple :

```js
const employees = {
  engineering: ['Bob', 'Jane'],
  marketing: ['Sylvie'],
};

Object.keys(employees);
// ['engineering', 'marketing']
```

Donc :

```js
Object.keys(employees).length;
// 2
```

---

## 16. Modules ES6 : `export` / `import`

Tous les fichiers doivent exporter leurs fonctions.

### Export nommé

```js
export function taskFirst() {}
```

Import nommé :

```js
import { taskFirst } from './0-constants.js';
```

---

### Export par défaut

```js
export default function getBudgetObject() {}
```

Import par défaut :

```js
import getBudgetObject from './7-getBudgetObject.js';
```

---

Différence clé :

```text
export nommé   → import avec {}
export default → import sans {}
```

---

## 17. Commandes utiles

Lancer un fichier avec Babel :

```bash
npm run dev 0-main.js
```

Lancer les tests Jest :

```bash
npm run test
```

Lancer ESLint + Jest :

```bash
npm run full-test
```

Installer les dépendances :

```bash
npm install
```

---

## 18. Pièges classiques

### Confondre rest et spread

```js
function f(...args) {}
```

Ici `...` regroupe.

```js
const copy = [...array];
```

Ici `...` déplie.

---

### Croire que `const` rend tout immuable

```js
const arr = [];

arr.push(1); // OK
arr = [];    // KO
```

---

### Utiliser `var`

Dans ce projet, éviter `var`.

Priorité :

```js
const
```

Puis seulement si réassignation nécessaire :

```js
let
```

---

### Oublier les crochets dans les clés dynamiques

Mauvais si on veut utiliser la valeur de la variable :

```js
{
  departmentName: employees
}
```

Bon :

```js
{
  [departmentName]: employees
}
```

---

### Confondre `for...of` et `for...in`

```text
for...of = valeurs
for...in = index / clés
```

---

## 19. Résumé ultra court

```text
const          → valeur non réassignée
let            → valeur réassignable
var            → ancien, à éviter

arrow function → syntaxe courte + this lexical
default param  → valeur par défaut si undefined
rest           → regroupe les arguments dans un tableau
spread         → déplie tableau / objet / string

template literal → `Hello ${name}`

object shorthand → { income } au lieu de { income: income }

computed key      → { [keyName]: value }

method property   → method() {} au lieu de method: function() {}

for...of          → parcourt les valeurs

export default    → import sans {}
export nommé      → import avec {}
```

---

## 20. Lien avec ES6_classes

ES6_basic prépare directement ES6_classes.

Notions importantes à garder pour la suite :

- `const` / `let`
- `export default`
- `import`
- object methods
- `this`
- arrow functions
- template literals
- spread operator
- computed properties

ES6_classes ajoutera surtout :

- `class`
- `constructor`
- `this`
- getters / setters
- static methods
- inheritance
- `super()`
