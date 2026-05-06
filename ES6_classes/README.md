# 📘 ES6 classes

## 📌 Description

_No description detected._

---

## 📚 Resources

**Read or watch**:


- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

- [Metaprogramming](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies)

---

## 🎯 Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), __without the help of Google__:


- How to define a Class

- How to add methods to a class

- Why and how to add a static method to a class

- How to extend a class from another

- Metaprogramming and symbols

---

## ✅ Requirements

- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 9.x.x`

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`

- All your files should end with a new line

- A `README.md` file, at the root of the folder of the project, is mandatory

- Your code should use the `js` extension

- Your code will be tested using `Jest` and the command `npm run test`

- Your code will be verified against lint using ESLint

- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`

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
<summary>0. You used to attend a place like this at some point</summary>

**Files:**

- [`0-classroom.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_classes/0-classroom.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_classes`

**Task details:**

```text
0. You used to attend a place like this at some point
Implement a class named
ClassRoom
:
Prototype:
export default class ClassRoom
It should accept one attribute named
maxStudentsSize
(Number) and assigned to
_maxStudentsSize
bob
@dylan
:~
$
cat
0
-main.js
import
ClassRoom
from
"./0-classroom.js"
;

const room = new
ClassRoom
(
10
);
console.log(room._maxStudentsSize)

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
10
bob
@dylan
:~
$
Repo:
GitHub repository:
holbertonschool-web_back_end
Directory:
ES6_classes
File:
0-classroom.js
