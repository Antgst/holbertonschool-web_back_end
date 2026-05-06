# 📘 ES6 Basics

## 📌 Description

_No description detected._

---

## 📚 Resources

**Read or watch**:


- [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)

- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

- [Javascript ES6 — Iterables and Iterators](https://medium.com/data-science/javascript-es6-iterables-and-iterators-de18b54f4d4)

---

## 🎯 Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), __without the help of Google__:


- What ES6 is

- New features introduced in ES6

- The difference between a constant and a variable

- Block-scoped variables

- Arrow functions and function parameters default to them

- Rest and spread function parameters

- String templating in ES6

- Object creation and their properties in ES6

- Iterators and for-of loops

---

## ✅ Requirements

### General


- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 9.x.x`

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`

- All your files should end with a new line

- A `README.md` file, at the root of the folder of the project, is mandatory

- Your code should use the `js` extension

- Your code will be tested using the [Jest Testing Framework](https://jestjs.io/)

- Your code will be analyzed using the linter [ESLint](https://eslint.org/) along with specific rules that we'll provide

- All of your functions must be exported

---

## ⚙️ Setup

### Install NodeJS 20.x.x

(in your home directory):


```

curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh

sudo bash nodesource_setup.sh

sudo apt install nodejs -y

```


```

$ nodejs -v

v20.15.1

$ npm -v

10.7.0

```


### Install Jest, Babel, and ESLint

in your project directory:


- Install Jest using: `npm install --save-dev jest`

- Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`

- Install ESLint using: `npm install --save-dev eslint`

---

## 🧠 Quiz

_No quiz detected in the exported HTML._


---

## 🧩 Tasks

<details>
<summary>0. Const or let?</summary>

**Files:**

- [`0-constants.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_basic/0-constants.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_basic`

**Task details:**

```text
0. Const or let?
Modify
function
taskFirst
to instantiate variables using
const
function
taskNext
to instantiate variables using
let
export
function
taskFirst
(
) {
var
task =
'I prefer const when I can.'
;
return
task;
}
export
function
getLast
(
) {
return
' is okay'
;
}
export
function
taskNext
(
) {
var
combination =
'But sometimes let'
;
  combination +=
getLast
();
return
combination;
}
Execution example:
bob
@dylan
:~
$
cat
0
-main.js
import { taskFirst, taskNext } from
'./0-constants.js'
;

console.log(
`${taskFirst()} ${taskNext()}`
);

bob
@dylan
:~
$
bob
@dylan
:~
$
npm run dev
0
-main.js
I prefer const
when
I can.
But
sometimes let is okay
bob
@dylan
:~
$
Repo:
GitHub repository:
holbertonschool-web_back_end
Directory:
ES6_basic
File:
0-constants.js
