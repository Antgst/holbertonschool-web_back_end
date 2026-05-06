# 📘 Python - Async Comprehension

## 📌 Description

_No description detected._

---

## 📚 Resources

**Read or watch**:



- [PEP 530 -- Asynchronous Comprehensions](https://peps.python.org/pep-0530/)

- [What’s New in Python: Asynchronous Comprehensions / Generators](https://blog.pythonlibrary.org/2017/02/14/whats-new-in-python-asynchronous-comprehensions-generators/)

- [Type-hints for generators](https://stackoverflow.com/questions/42531143/how-can-i-type-hint-a-generator-in-python-3)

---

## 🎯 Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), __without the help of Google__:



- How to write an asynchronous generator

- How to use async comprehensions

- How to type-annotate generators

---

## ✅ Requirements

### General



- Allowed editors: `vi`, `vim`, `emacs`

- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `python3` (version 3.9)

- All your files should end with a new line

- The first line of all your files should be exactly `#!/usr/bin/env python3`

- A `README.md` file, at the root of the folder of the project, is mandatory

- Your code should use the `pycodestyle` style (version 2.5.x)

- The length of your files will be tested using `wc`

- All your modules should have a documentation (`python3 -c 'print(__import__("my_module").__doc__)'`)

- All your functions should have a documentation (`python3 -c 'print(__import__("my_module").my_function.__doc__)'`

- A documentation is not a simple word, it's a real sentence explaining what's the purpose of the module, class or method (the length of it will be verified)

- All your functions and coroutines must be type-annotated.

---

## ⚙️ Setup

_No specific setup detected._

---

## 🧠 Quiz

_No quiz detected in the exported HTML._


---

## 🧩 Tasks

<details>
<summary>0. Async Generator</summary>

**Files:**

- [`0-async_generator.py`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/python_async_comprehension/0-async_generator.py)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `python_async_comprehension`

**Task details:**

```text
0. Async Generator
Write a coroutine called
async_generator
that takes no arguments.
The coroutine will loop 10 times, each time asynchronously wait 1 second, then yield a random number between 0 and 10. Use the
random
module.
bob
@dylan
:~
$
cat
0
-main.py
#!/usr/bin/env python3
import asyncio

async_generator = __import__(
'0-async_generator'
).async_generator

async
def
print_yielded_values
():
    result = []
    async
for
i
in
async_generator():
        result.append(i)
    print(result)

asyncio.run(print_yielded_values())

bob
@dylan
:~
$
./
0
-main.py
[
4.403136952967102
,
6.9092712604587465
,
6.293445466782645
,
4.549663490048418
,
4.1326571686139015
,
9.99058525304903
,
6.726734105473811
,
9.84331704602206
,
1.0067279479988345
,
1.3783306401737838
]
Repo:
GitHub repository:
holbertonschool-web_back_end
Directory:
python_async_comprehension
File:
0-async_generator.py
Score of the task
6
/6
pts
100.0%
7 correction requests
My GitHub
Connect GitHub
Connect as:
Disconnect
Repository
Select a repository…
Folder (optional)
Run the correction
Get a sandbox
QA Review
×
0. Async Generator
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
×
Students who are done with "0. Async Generator"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>1. Async Comprehensions</summary>

**Files:**

- [`1-async_comprehension.py`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/python_async_comprehension/1-async_comprehension.py)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `python_async_comprehension`

**Task details:**

```text
1. Async Comprehensions
Import
async_generator
from the previous task and then write a coroutine called
async_comprehension
that takes no arguments.
The coroutine will collect 10 random numbers using an async comprehensing over
async_generator
, then return the 10 random numbers.
bob
@dylan
:~
$
cat
1
-main.py
#!/usr/bin/env python3
import asyncio

async_comprehension = __import__(
'1-async_comprehension'
).async_comprehension


async
def
main
():
    print(await async_comprehension())

asyncio.run(main())

bob
@dylan
:~
$
./
1
-main.py
[
9.861842105071727
,
8.572355293354995
,
1.7467182056248265
,
4.0724372912858575
,
0.5524750922145316
,
8.084266576021555
,
8.387128918690468
,
1.5486451376520916
,
7.713335177885325
,
7.673533267041574
]
Repo:
GitHub repository:
holbertonschool-web_back_end
Directory:
python_async_comprehension
File:
1-async_comprehension.py
Score of the task
6
/6
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
QA Review
×
1. Async Comprehensions
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
×
Students who are done with "1. Async Comprehensions"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>2. Run time for four parallel comprehensions</summary>

**Files:**

- [`2-measure_runtime.py`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/python_async_comprehension/2-measure_runtime.py)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `python_async_comprehension`

**Task details:**

```text
2. Run time for four parallel comprehensions
Import
async_comprehension
from the previous file and write a
measure_runtime
coroutine that will execute
async_comprehension
four times in parallel using
asyncio.gather
.
measure_runtime
should measure the total runtime and return it.
Notice that the total runtime is roughly 10 seconds, explain it to yourself.
bob
@dylan
:~
$
cat
2
-main.py
#!/usr/bin/env python3
import asyncio


measure_runtime = __import__(
'2-measure_runtime'
).measure_runtime


async
def
main
():
return
await(measure_runtime())

print(
    asyncio.run(main())
)

bob
@dylan
:~
$
./
2
-main.py
10.021936893463135
Repo:
GitHub repository:
holbertonschool-web_back_end
Directory:
python_async_comprehension
File:
2-measure_runtime.py
Score of the task
6
/6
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
QA Review
×
2. Run time for four parallel comprehensions
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
×
Students who are done with "2. Run time for four parallel comprehensions"
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
