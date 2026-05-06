# 📘 ES6 data manipulation

## 📌 Description

_No description detected._

---

## 📚 Resources

**Read or watch**:


- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

- [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays)

- [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

- [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

---

## 🎯 Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), __without the help of Google__:


- How to use map, filter and reduce on arrays

- Typed arrays

- The Set, Map, and Weak link data structures

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
<summary>0. Basic list of objects</summary>

**Files:**

- [`0-get_list_students.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/0-get_list_students.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_data_manipulation`

**Task details:**

```text
0. Basic list of objects
Create a function named
getListStudents
that returns an array of objects.
Each object should have three attributes:
id
(Number),
firstName
(String), and
location
(String).
The array contains the following students in order:
Guillaume
, id:
1
, in
San Francisco
James
, id:
2
, in
Columbia
Serena
, id:
5
, in
San Francisco
bob
@dylan
:~
$
cat
0
-main.js
import getListStudents from
"./0-get_list_students.js"
;

console.log(getListStudents());

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
[
  {
id:
1
,
firstName:
'Guillaume'
,
location:
'San Francisco'
},
  {
id:
2
,
firstName:
'James'
,
location:
'Columbia'
},
  {
id:
5
,
firstName:
'Serena'
,
location:
'San Francisco'
}
]
bob
@dylan
:~
$
Repo:
GitHub repository:
holbertonschool-web_back_end
Directory:
ES6_data_manipulation
File:
0-get_list_students.js
