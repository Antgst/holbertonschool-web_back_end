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
Score of the task
1
/1
pt
100.0%
1 correction request
My GitHub
Connect GitHub
Connect as:
Disconnect
Repository
Select a repository…
Folder (optional)
Run the correction
Get a sandbox
×
Students who are done with "0. Basic list of objects"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>1. More mapping</summary>

**Files:**

- [`1-get_list_student_ids.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/1-get_list_student_ids.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_data_manipulation`

**Task details:**

```text
1. More mapping
Create a function
getListStudentIds
that returns an array of ids from a list of object.
This function is taking one argument which is an array of objects - and this array is the same format as
getListStudents
from the previous task.
If the argument is not an array, the function is returning an empty array.
You must use the
map
function on the array.
bob
@dylan
:~
$
cat
1
-main.js
import getListStudentIds from
"./1-get_list_student_ids.js"
;
import getListStudents from
"./0-get_list_students.js"
;

console.log(getListStudentIds(
"hello"
));
console.log(getListStudentIds(getListStudents()));

bob
@dylan
:~
$
bob
@dylan
:~
$
npm run dev
1
-main.js
[]
[
1
,
2
,
5
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
1-get_list_student_ids.js
Score of the task
2
/2
pts
100.0%
1 correction request
My GitHub
Connect GitHub
Connect as:
Disconnect
Repository
Select a repository…
Folder (optional)
Run the correction
Get a sandbox
×
Students who are done with "1. More mapping"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>2. Filter</summary>

**Files:**

- [`2-get_students_by_loc.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/2-get_students_by_loc.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_data_manipulation`

**Task details:**

```text
2. Filter
Create a function
getStudentsByLocation
that returns an array of objects who are located in a specific city.
It should accept a list of students (from
getListStudents
) and a
city
(string) as parameters.
You must use the
filter
function on the array.
bob
@dylan
:~
$
cat
2
-main.js
import getListStudents from
"./0-get_list_students.js"
;
import getStudentsByLocation from
"./2-get_students_by_loc.js"
;

const students = getListStudents();

console.log(getStudentsByLocation(students,
'San Francisco'
));

bob
@dylan
:~
$
bob
@dylan
:~
$
npm run dev
2
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
2-get_students_by_loc.js
Score of the task
2
/2
pts
100.0%
1 correction request
My GitHub
Connect GitHub
Connect as:
Disconnect
Repository
Select a repository…
Folder (optional)
Run the correction
Get a sandbox
×
Students who are done with "2. Filter"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>3. Reduce</summary>

**Files:**

- [`3-get_ids_sum.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/3-get_ids_sum.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_data_manipulation`

**Task details:**

```text
3. Reduce
Create a function
getStudentIdsSum
that returns the sum of all the student ids.
It should accept a list of students (from
getListStudents
) as a parameter.
You must use the
reduce
function on the array.
bob
@dylan
:~
$
cat
3
-main.js
import getListStudents from
"./0-get_list_students.js"
;
import getStudentIdsSum from
"./3-get_ids_sum.js"
;

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);

bob
@dylan
:~
$
bob
@dylan
:~
$
npm run dev
3
-main.js
8
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
3-get_ids_sum.js
Score of the task
2
/2
pts
100.0%
1 correction request
My GitHub
Connect GitHub
Connect as:
Disconnect
Repository
Select a repository…
Folder (optional)
Run the correction
Get a sandbox
×
Students who are done with "3. Reduce"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>4. Combine</summary>

**Files:**

- [`4-update_grade_by_city.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/4-update_grade_by_city.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_data_manipulation`

**Task details:**

```text
4. Combine
Create a function
updateStudentGradeByCity
that returns an array of students for a specific city with their new grade
It should accept a list of students (from
getListStudents
), a
city
(String), and
newGrades
(Array of "grade" objects) as parameters.
newGrades
is an array of objects with this format:
{
studentId:
31
,
grade:
78
,
  }
If a student doesn't have grade in
newGrades
, the final grade should be
N/A
.
You must use
filter
and
map
combined.
bob
@dylan
:~
$
cat
4
-main.js
import getListStudents from
"./0-get_list_students.js"
;
import updateStudentGradeByCity from
"./4-update_grade_by_city.js"
;

console.log(updateStudentGradeByCity(getListStudents(),
"San Francisco"
, [{
studentId:
5
,
grade:
97
}, {
studentId:
1
,
grade:
86
}]));

console.log(updateStudentGradeByCity(getListStudents(),
"San Francisco"
, [{
studentId:
5
,
grade:
97
}]));

bob
@dylan
:~
$
bob
@dylan
:~
$
npm run dev
4
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
,
grade:
86
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
,
grade:
97
}
]
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
,
grade:
'N/A'
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
,
grade:
97
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
4-update_grade_by_city.js
Score of the task
2
/2
pts
100.0%
1 correction request
My GitHub
Connect GitHub
Connect as:
Disconnect
Repository
Select a repository…
Folder (optional)
Run the correction
Get a sandbox
×
Students who are done with "4. Combine"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>5. Typed Arrays</summary>

**Files:**

- [`5-typed_arrays.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/5-typed_arrays.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_data_manipulation`

**Task details:**

```text
5. Typed Arrays
Create a function named
createInt8TypedArray
that returns a new
ArrayBuffer
with an
Int8
value at a specific position.
It should accept three arguments:
length
(Number),
position
(Number), and
value
(Number).
If adding the value is not possible the error
Position outside range
should be thrown.
bob
@dylan
:~
$
cat
5
-main.js
import createInt8TypedArray from
"./5-typed_arrays.js"
;

console.log(createInt8TypedArray(
10
,
2
,
89
));

bob
@dylan
:~
$
bob
@dylan
:~
$
npm run dev
5
-main.js
DataView
{
byteLength:
10
,
byteOffset:
0
,
buffer:
ArrayBuffer
{
    [
Uint8Contents
]: <
00
00
59
00
00
00
00
00
00
00
>,
byteLength:
10
}
}
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
5-typed_arrays.js
Score of the task
2
/2
pts
100.0%
1 correction request
My GitHub
Connect GitHub
Connect as:
Disconnect
Repository
Select a repository…
Folder (optional)
Run the correction
Get a sandbox
×
Students who are done with "5. Typed Arrays"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>6. Set data structure</summary>

**Files:**

- [`6-set.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/6-set.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_data_manipulation`

**Task details:**

```text
6. Set data structure
Create a function named
setFromArray
that returns a
Set
from an array.
It accepts an argument (Array, of any kind of element).
bob
@dylan
:~
$
cat
6
-main.js
import setFromArray from
"./6-set.js"
;

console.log(setFromArray([
12
,
32
,
15
,
78
,
98
,
15
]));

bob
@dylan
:~
$
bob
@dylan
:~
$
npm run dev
6
-main.js
Set
{
12
,
32
,
15
,
78
,
98
}
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
6-set.js
Score of the task
5
/5
pts
100.0%
2 correction requests
My GitHub
Connect GitHub
Connect as:
Disconnect
Repository
Select a repository…
Folder (optional)
Run the correction
Get a sandbox
×
Students who are done with "6. Set data structure"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>7. More set data structure</summary>

**Files:**

- [`7-has_array_values.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/7-has_array_values.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_data_manipulation`

**Task details:**

```text
7. More set data structure
Create a function named
hasValuesFromArray
that returns a boolean if all the elements in the array exist within the set.
It accepts two arguments: a
set
(Set) and an
array
(Array).
bob
@dylan
:~$ cat
7
-main.
js
import
hasValuesFromArray
from
"./7-has_array_values.js"
;
console
.
log
(
hasValuesFromArray
(
new
Set
([
1
,
2
,
3
,
4
,
5
]), [
1
]));
console
.
log
(
hasValuesFromArray
(
new
Set
([
1
,
2
,
3
,
4
,
5
]), [
10
]));
console
.
log
(
hasValuesFromArray
(
new
Set
([
1
,
2
,
3
,
4
,
5
]), [
1
,
10
]));

bob
@dylan
:~$
bob
@dylan
:~$ npm run dev
7
-main.
js
true
false
false
bob
@dylan
:~$
Repo:
GitHub repository:
holbertonschool-web_back_end
Directory:
ES6_data_manipulation
File:
7-has_array_values.js
Score of the task
2
/2
pts
100.0%
1 correction request
My GitHub
Connect GitHub
Connect as:
Disconnect
Repository
Select a repository…
Folder (optional)
Run the correction
Get a sandbox
×
Students who are done with "7. More set data structure"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>8. Clean set</summary>

**Files:**

- [`8-clean_set.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/8-clean_set.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_data_manipulation`

**Task details:**

```text
8. Clean set
Create a function named
cleanSet
that returns a string of all the set values that start with a specific string (
startString
).
It accepts two arguments: a
set
(Set) and a
startString
(String).
When a value starts with
startString
you only append the rest of the string. The string contains all the values of the set separated by
-
.
bob
@dylan
:~
$
cat
8
-main.js
import cleanSet from
"./8-clean_set.js"
;

console.log(cleanSet(new
Set
([
'bonjovi'
,
'bonaparte'
,
'bonappetit'
,
'banana'
]),
'bon'
));
console.log(cleanSet(new
Set
([
'bonjovi'
,
'bonaparte'
,
'bonappetit'
,
'banana'
]),
''
));

bob
@dylan
:~
$
bob
@dylan
:~
$
npm run dev
8
-main.js
jovi-aparte-appetit

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
8-clean_set.js
Score of the task
4
/4
pts
100.0%
2 correction requests
My GitHub
Connect GitHub
Connect as:
Disconnect
Repository
Select a repository…
Folder (optional)
Run the correction
Get a sandbox
×
Students who are done with "8. Clean set"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>9. Map data structure</summary>

**Files:**

- [`9-groceries_list.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/9-groceries_list.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_data_manipulation`

**Task details:**

```text
9. Map data structure
Create a function named
groceriesList
that returns a map of groceries with the following items (name, quantity):
Apples, 10
Tomatoes, 10
Pasta, 1
Rice, 1
Banana, 5
Result:
bob
@dylan
:~
$
cat
9
-main.js
import groceriesList from
"./9-groceries_list.js"
;

console.log(groceriesList());

bob
@dylan
:~
$
bob
@dylan
:~
$
npm run dev
9
-main.js
Map
{
'Apples'
=>
10
,
'Tomatoes'
=>
10
,
'Pasta'
=>
1
,
'Rice'
=>
1
,
'Banana'
=>
5
}
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
9-groceries_list.js
Score of the task
4
/4
pts
100.0%
1 correction request
My GitHub
Connect GitHub
Connect as:
Disconnect
Repository
Select a repository…
Folder (optional)
Run the correction
Get a sandbox
×
Students who are done with "9. Map data structure"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>10. More map data structure</summary>

**Files:**

- [`10-update_uniq_items.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_data_manipulation/10-update_uniq_items.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_data_manipulation`

**Task details:**

```text
10. More map data structure
Create a function named
updateUniqueItems
that returns an updated map for all items with initial quantity at 1.
It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task.
For each entry of the map where the quantity is 1, update the quantity to 100.
If updating the quantity is not possible (argument is not a map) the error
Cannot process
should be thrown.
bob
@dylan
:~$ cat
10
-main.
js
import
updateUniqueItems
from
"./10-update_uniq_items.js"
;
import
groceriesList
from
"./9-groceries_list.js"
;
const
map =
groceriesList
();
console
.
log
(map);
updateUniqueItems
(map)
console
.
log
(map);

bob
@dylan
:~$
bob
@dylan
:~$ npm run dev
10
-main.
js
Map
{
'Apples'
=>
10
,
'Tomatoes'
=>
10
,
'Pasta'
=>
1
,
'Rice'
=>
1
,
'Banana'
=>
5
}
Map
{
'Apples'
=>
10
,
'Tomatoes'
=>
10
,
'Pasta'
=>
100
,
'Rice'
=>
100
,
'Banana'
=>
5
}
bob
@dylan
:~$
Repo:
GitHub repository:
holbertonschool-web_back_end
Directory:
ES6_data_manipulation
File:
10-update_uniq_items.js
Score of the task
1
/1
pt
100.0%
2 correction requests
My GitHub
Connect GitHub
Connect as:
Disconnect
Repository
Select a repository…
Folder (optional)
Run the correction
Get a sandbox
×
Students who are done with "10. More map data structure"
×
Recommended Sandboxes
Loading...
```

</details>


---

## 🧪 Testing

Use the provided task examples and Holberton checker to validate the project.

---

## 👤 Author

Project from Holberton School.

README generated with Antoine's README Factory workflow.
