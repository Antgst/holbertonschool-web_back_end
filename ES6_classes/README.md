# ðŸ“˜ ES6 classes

## ðŸ“Œ Description

_No description detected._

---

## ðŸ“š Resources

**Read or watch**:



- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

- [Metaprogramming](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies)

---

## ðŸŽ¯ Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), __without the help of Google__:



- How to define a Class

- How to add methods to a class

- Why and how to add a static method to a class

- How to extend a class from another

- Metaprogramming and symbols

---

## âœ… Requirements

- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 9.x.x`

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`

- All your files should end with a new line

- A `README.md` file, at the root of the folder of the project, is mandatory

- Your code should use the `js` extension

- Your code will be tested using `Jest` and the command `npm run test`

- Your code will be verified against lint using ESLint

- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`

---

## âš™ï¸ Setup

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

## ðŸ§  Quiz

_No quiz detected in the exported HTML._


---

## ðŸ§© Tasks

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
Select a repositoryâ€¦
Folder (optional)
Run the correction
Get a sandbox
QA Review
Ã—
0. You used to attend a place like this at some point
Commit used:
User:
---
URL:
Click here
ID:
---
Author:
---
Subject:
---
Date:
---
Ã—
Students who are done with "0. You used to attend a place like this at some point"
Ã—
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>1. Let's make some classrooms</summary>

**Files:**

- [`1-make_classrooms.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_classes/1-make_classrooms.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_classes`

**Task details:**

```text
1. Let's make some classrooms
Import the
ClassRoom
class from
0-classroom.js
.
Implement a function named
initializeRooms
. It should return an array of 3
ClassRoom
objects with the sizes 19, 20, and 34 (in this order).
bob
@dylan
:~
$
cat
1
-main.js
import initializeRooms from
'./1-make_classrooms.js'
;

console.log(initializeRooms());

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
[
ClassRoom
{
_maxStudentsSize:
19
},
ClassRoom
{
_maxStudentsSize:
20
},
ClassRoom
{
_maxStudentsSize:
34
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
ES6_classes
File:
1-make_classrooms.js
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
Select a repositoryâ€¦
Folder (optional)
Run the correction
Get a sandbox
QA Review
Ã—
1. Let's make some classrooms
Commit used:
User:
---
URL:
Click here
ID:
---
Author:
---
Subject:
---
Date:
---
Ã—
Students who are done with "1. Let's make some classrooms"
Ã—
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>2. A Course, Getters, and Setters</summary>

**Files:**

- [`2-hbtn_course.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_classes/2-hbtn_course.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_classes`

**Task details:**

```text
2. A Course, Getters, and Setters
Implement a class named
HolbertonCourse
:
Constructor attributes:
name
(String)
length
(Number)
students
(array of Strings)
Make sure to verify the type of attributes during object creation
Each attribute must be stored in an "underscore" attribute version (ex:
name
is stored in
_name
)
Implement a getter and setter for each attribute.
bob
@dylan
:~$ cat
2
-main.
js
import
HolbertonCourse
from
"./2-hbtn_course.js"
;
const
c1 =
new
HolbertonCourse
(
"ES6"
,
1
, [
"Bob"
,
"Jane"
])
console
.
log
(c1.
name
);
c1.
name
=
"Python 101"
;
console
.
log
(c1);
try
{
    c1.
name
=
12
;
}
catch
(err) {
console
.
log
(err);
}
try
{
const
c2 =
new
HolbertonCourse
(
"ES6"
,
"1"
, [
"Bob"
,
"Jane"
]);
}
catch
(err) {
console
.
log
(err);
}

bob
@dylan
:~$
bob
@dylan
:~$ npm run dev
2
-main.
js
ES6
HolbertonCourse
{
_name
:
'Python 101'
,
_length
:
1
,
_students
: [
'Bob'
,
'Jane'
]
}
TypeError
:
Name
must be a
string
...
TypeError
:
Length
must be a
number
...
bob
@dylan
:~$
Repo:
GitHub repository:
holbertonschool-web_back_end
Directory:
ES6_classes
File:
2-hbtn_course.js
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
Select a repositoryâ€¦
Folder (optional)
Run the correction
Get a sandbox
QA Review
Ã—
2. A Course, Getters, and Setters
Commit used:
User:
---
URL:
Click here
ID:
---
Author:
---
Subject:
---
Date:
---
Ã—
Students who are done with "2. A Course, Getters, and Setters"
Ã—
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>3. Methods, static methods, computed methods names..... MONEY</summary>

**Files:**

- [`3-currency.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_classes/3-currency.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_classes`

**Task details:**

```text
3. Methods, static methods, computed methods names..... MONEY
Implement a class named
Currency
:
- Constructor attributes:
code
(String)
name
(String)
Each attribute must be stored in an "underscore" attribute version (ex:
name
is stored in
_name
)
Implement a getter and setter for each attribute.
Implement a method named
displayFullCurrency
that will return the attributes in the following format
name (code)
.
bob
@dylan
:~
$
cat
3
-main.js
import
Currency
from
"./3-currency.js"
;

const dollar = new
Currency
(
'$'
,
'Dollars'
);
console.log(dollar.displayFullCurrency());

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
Dollars
(
$)
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
3-currency.js
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
Select a repositoryâ€¦
Folder (optional)
Run the correction
Get a sandbox
QA Review
Ã—
3. Methods, static methods, computed methods names..... MONEY
Commit used:
User:
---
URL:
Click here
ID:
---
Author:
---
Subject:
---
Date:
---
Ã—
Students who are done with "3. Methods, static methods, computed methods names..... MONEY"
Ã—
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>4. Pricing</summary>

**Files:**

- [`4-pricing.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_classes/4-pricing.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_classes`

**Task details:**

```text
4. Pricing
Import the class
Currency
from
3-currency.js
Implement a class named
Pricing
:
Constructor attributes:
amount
(Number)
currency
(Currency)
Each attribute must be stored in an "underscore" attribute version (ex:
name
is stored in
_name
)
Implement a getter and setter for each attribute.
Implement a method named
displayFullPrice
that returns the attributes in the following format
amount currency_name (currency_code)
.
Implement a static method named
convertPrice
. It should accept two arguments:
amount
(Number),
conversionRate
(Number). The function should return the amount multiplied by the conversion rate.
bob
@dylan
:~$ cat
4
-main.
js
import
Pricing
from
'./4-pricing.js'
;
import
Currency
from
'./3-currency.js'
;
const
p =
new
Pricing
(
100
,
new
Currency
(
"EUR"
,
"Euro"
))
console
.
log
(p);
console
.
log
(p.
displayFullPrice
());

bob
@dylan
:~$
bob
@dylan
:~$ npm run dev
4
-main.
js
Pricing
{
_amount
:
100
,
_currency
:
Currency
{
_code
:
'EUR'
,
_name
:
'Euro'
}
}
100
Euro
(
EUR
)
bob
@dylan
:~$
Repo:
GitHub repository:
holbertonschool-web_back_end
Directory:
ES6_classes
File:
4-pricing.js
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
Select a repositoryâ€¦
Folder (optional)
Run the correction
Get a sandbox
QA Review
Ã—
4. Pricing
Commit used:
User:
---
URL:
Click here
ID:
---
Author:
---
Subject:
---
Date:
---
Ã—
Students who are done with "4. Pricing"
Ã—
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>5. A Building</summary>

**Files:**

- [`5-building.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_classes/5-building.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_classes`

**Task details:**

```text
5. A Building
Implement a class named
Building
:
Constructor attributes:
sqft
(Number)
Each attribute must be stored in an "underscore" attribute version (ex:
name
is stored in
_name
)
Implement a getter for each attribute.
Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named
evacuationWarningMessage
.
If a class that extends from it does not have a
evacuationWarningMessage
method, throw an error with the message
Class extending Building must override evacuationWarningMessage
bob
@dylan
:~$ cat
5
-main.
js
import
Building
from
'./5-building.js'
;
const
b =
new
Building
(
100
);
console
.
log
(b);
class
TestBuilding
extends
Building
{}
try
{
new
TestBuilding
(
200
)
}
catch
(err) {
console
.
log
(err);
}

bob
@dylan
:~$
bob
@dylan
:~$ npm run dev
5
-main.
js
Building
{
_sqft
:
100
}
Error
:
Class
extending
Building
must
override
evacuationWarningMessage
    ...
bob
@dylan
:~$
Repo:
GitHub repository:
holbertonschool-web_back_end
Directory:
ES6_classes
File:
5-building.js
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
Select a repositoryâ€¦
Folder (optional)
Run the correction
Get a sandbox
QA Review
Ã—
5. A Building
Commit used:
User:
---
URL:
Click here
ID:
---
Author:
---
Subject:
---
Date:
---
Ã—
Students who are done with "5. A Building"
Ã—
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>6. Inheritance</summary>

**Files:**

- [`6-sky_high.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_classes/6-sky_high.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_classes`

**Task details:**

```text
6. Inheritance
Import
Building
from
5-building.js
.
Implement a class named
SkyHighBuilding
that extends from
Building
:
Constructor attributes:
sqft
(Number) (must be assigned to the parent class
Building
)
floors
(Number)
Each attribute must be stored in an "underscore" attribute version (ex:
name
is stored in
_name
)
Implement a getter for each attribute.
Override the method named
evacuationWarningMessage
and return the following string
Evacuate slowly the NUMBER_OF_FLOORS floors
.
bob
@dylan
:~
$
cat
6
-main.js
import
SkyHighBuilding
from
'./6-sky_high.js'
;

const building = new
SkyHighBuilding
(
140
,
60
);
console.log(building.sqft);
console.log(building.floors);
console.log(building.evacuationWarningMessage());

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
140
60
Evacuate
slowly the
60
floors
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
6-sky_high.js
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
Select a repositoryâ€¦
Folder (optional)
Run the correction
Get a sandbox
QA Review
Ã—
6. Inheritance
Commit used:
User:
---
URL:
Click here
ID:
---
Author:
---
Subject:
---
Date:
---
Ã—
Students who are done with "6. Inheritance"
Ã—
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>7. Airport</summary>

**Files:**

- [`7-airport.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_classes/7-airport.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_classes`

**Task details:**

```text
7. Airport
Implement a class named
Airport
:
Constructor attributes:
name
(String)
code
(String)
Each attribute must be stored in an "underscore" attribute version (ex:
name
is stored in
_name
)
The default string description of the class should return the airport
code
(example below).
bob
@dylan
:~
$
cat
7
-main.js
import
Airport
from
"./7-airport.js"
;

const airportSF = new
Airport
(
'San Francisco Airport'
,
'SFO'
);
console.log(airportSF);
console.log(airportSF.toString());

bob
@dylan
:~
$
bob
@dylan
:~
$
npm run dev
7
-main.js
Airport
[
SFO
] {
_name:
'San Francisco Airport'
,
_code:
'SFO'
}
[object
SFO
]
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
7-airport.js
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
Select a repositoryâ€¦
Folder (optional)
Run the correction
Get a sandbox
QA Review
Ã—
7. Airport
Commit used:
User:
---
URL:
Click here
ID:
---
Author:
---
Subject:
---
Date:
---
Ã—
Students who are done with "7. Airport"
Ã—
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>8. Primitive - Holberton Class</summary>

**Files:**

- [`8-hbtn_class.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_classes/8-hbtn_class.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_classes`

**Task details:**

```text
8. Primitive - Holberton Class
Implement a class named
HolbertonClass
:
Constructor attributes:
size
(Number)
location
(String)
Each attribute must be stored in an "underscore" attribute version (ex:
name
is stored in
_name
)
When the class is cast into a
Number
, it should return the size.
When the class is cast into a
String
, it should return the location.
bob
@dylan
:~
$
cat
8
-main.js
import
HolbertonClass
from
"./8-hbtn_class.js"
;

const hc = new
HolbertonClass
(
12
,
"Mezzanine"
)
console.log(
Number
(hc));
console.log(
String
(hc));

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
12
Mezzanine
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
8-hbtn_class.js
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
Select a repositoryâ€¦
Folder (optional)
Run the correction
Get a sandbox
QA Review
Ã—
8. Primitive - Holberton Class
Commit used:
User:
---
URL:
Click here
ID:
---
Author:
---
Subject:
---
Date:
---
Ã—
Students who are done with "8. Primitive - Holberton Class"
Ã—
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>9. Hoisting</summary>

**Files:**

- [`9-hoisting.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_classes/9-hoisting.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_classes`

**Task details:**

```text
9. Hoisting
Fix this code and make it work.
const
class2019 =
new
HolbertonClass
(
2019
,
'San Francisco'
);
const
class2020 =
new
HolbertonClass
(
2020
,
'San Francisco'
);
export
class
HolbertonClass
{
constructor
(
year, location
) {
this
.
_year
= year;
this
.
_location
= location;
  }
get
year
() {
return
this
.
_year
;
  }
get
location
() {
return
this
.
_location
;
  }
}
const
student1 =
new
StudentHolberton
(
'Guillaume'
,
'Salva'
, class2020);
const
student2 =
new
StudentHolberton
(
'John'
,
'Doe'
, class2020);
const
student3 =
new
StudentHolberton
(
'Albert'
,
'Clinton'
, class2019);
const
student4 =
new
StudentHolberton
(
'Donald'
,
'Bush'
, class2019);
const
student5 =
new
StudentHolberton
(
'Jason'
,
'Sandler'
, class2019);
export
class
StudentHolberton
{
constructor
(
firstName, lastName
) {
this
.
_firstName
= firstName;
this
.
_lastName
= lastName;
this
.
_holbertonClass
= holbertonClass;
  }
get
fullName
() {
return
`
${
this
._firstName}
${
this
._lastName}
`
;
  }
get
holbertonClass
() {
return
this
.
holbertonClass
;
  }
get
fullStudentDescription
() {
return
`
${self._firstName}
${self._lastName}
-
${self._holbertonClass.year}
-
${self._holbertonClass.location}
`
;
  }
}
export
const
listOfStudents = [student1, student2, student3, student4, student5];
Result:
bob
@dylan
:~
$
cat
9
-main.js
import listOfStudents from
"./9-hoisting.js"
;

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted)

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
[
StudentHolberton
{
_firstName:
'Guillaume'
,
_lastName:
'Salva'
,
_holbertonClass:
HolbertonClass
{
_year:
2020
,
_location:
'San Francisco'
}
  },
StudentHolberton
{
_firstName:
'John'
,
_lastName:
'Doe'
,
_holbertonClass:
HolbertonClass
{
_year:
2020
,
_location:
'San Francisco'
}
  },
StudentHolberton
{
_firstName:
'Albert'
,
_lastName:
'Clinton'
,
_holbertonClass:
HolbertonClass
{
_year:
2019
,
_location:
'San Francisco'
}
  },
StudentHolberton
{
_firstName:
'Donald'
,
_lastName:
'Bush'
,
_holbertonClass:
HolbertonClass
{
_year:
2019
,
_location:
'San Francisco'
}
  },
StudentHolberton
{
_firstName:
'Jason'
,
_lastName:
'Sandler'
,
_holbertonClass:
HolbertonClass
{
_year:
2019
,
_location:
'San Francisco'
}
  }
]
[
'Guillaume Salva - 2020 - San Francisco'
,
'John Doe - 2020 - San Francisco'
,
'Albert Clinton - 2019 - San Francisco'
,
'Donald Bush - 2019 - San Francisco'
,
'Jason Sandler - 2019 - San Francisco'
]
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
9-hoisting.js
Score of the task
3
/3
pts
100.0%
2 correction requests
My GitHub
Connect GitHub
Connect as:
Disconnect
Repository
Select a repositoryâ€¦
Folder (optional)
Run the correction
Get a sandbox
QA Review
Ã—
9. Hoisting
Commit used:
User:
---
URL:
Click here
ID:
---
Author:
---
Subject:
---
Date:
---
Ã—
Students who are done with "9. Hoisting"
Ã—
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>10. Vroom</summary>

**Files:**

- [`10-car.js`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/ES6_classes/10-car.js)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `ES6_classes`

**Task details:**

```text
10. Vroom
Implement a class named
Car
:
Constructor attributes:
brand
(String)
motor
(String)
color
(String)
Each attribute must be stored in an "underscore" attribute version (ex:
name
is stored in
_name
)
Add a method named
cloneCar
. This method should return a new object of the class.
Hint: Symbols in ES6
bob
@dylan
:~$ cat
10
-main.
js
import
Car
from
"./10-car.js"
;
class
TestCar
extends
Car
{}
const
tc1 =
new
TestCar
(
"Nissan"
,
"Turbo"
,
"Pink"
);
const
tc2 = tc1.
cloneCar
();
console
.
log
(tc1);
console
.
log
(tc1
instanceof
TestCar
);
console
.
log
(tc2);
console
.
log
(tc2
instanceof
TestCar
);
console
.
log
(tc1 == tc2);

bob
@dylan
:~$
bob
@dylan
:~$ npm run dev
10
-main.
js
TestCar
{
_brand
:
'Nissan'
,
_motor
:
'Turbo'
,
_color
:
'Pink'
}
true
TestCar
{
_brand
:
undefined
,
_motor
:
undefined
,
_color
:
undefined
}
true
false
bob
@dylan
:~$
Repo:
GitHub repository:
holbertonschool-web_back_end
Directory:
ES6_classes
File:
10-car.js
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
Select a repositoryâ€¦
Folder (optional)
Run the correction
Get a sandbox
QA Review
Ã—
10. Vroom
Commit used:
User:
---
URL:
Click here
ID:
---
Author:
---
Subject:
---
Date:
---
Ã—
Students who are done with "10. Vroom"
Ã—
Recommended Sandboxes
Loading...
```

</details>


---

## ðŸ§ª Testing

Use the provided task examples and Holberton checker to validate the project.

---

## ðŸ‘¤ Author

Project from Holberton School.

README generated with Antoine's README Factory workflow.
