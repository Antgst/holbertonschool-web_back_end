# 📘 Python - Async

## 📌 Description

_No description detected._

---

## 📚 Resources

**Read or watch**:


- [Async IO in Python: A Complete Walkthrough](https://realpython.com/async-io-python/)

- [asyncio - Asynchronous I/O](https://docs.python.org/3/library/asyncio.html)

- [random.uniform](https://docs.python.org/3/library/random.html#random.uniform)

---

## 🎯 Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), __without the help of Google__:


- `async` and `await` syntax

- How to execute an async program with `asyncio`

- How to run concurrent coroutines

- How to create `asyncio` tasks

- How to use the `random` module

---

## ✅ Requirements

### General


- A `README.md` file, at the root of the folder of the project, is mandatory

- Allowed editors: `vi`, `vim`, `emacs`

- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `python3` (**version 3.8**)

- All your files should end with a new line

- All your files must be executable

- The length of your files will be tested using `wc`

- The first line of all your files should be exactly `#!/usr/bin/env python3`

- Your code should use the `pycodestyle` style (version 2.5.x)

- All your functions and coroutines must be type-annotated.

- **Use the right type-annotation types that works with version 3.8 of Python**

- All your modules should have a documentation (`python3 -c 'print(__import__("my_module").__doc__)'`)

- All your functions should have a documentation (`python3 -c 'print(__import__("my_module").my_function.__doc__)'`

- A documentation is not a simple word, it's a real sentence explaining what's the purpose of the module, class or method (the length of it will be verified)

---

## ⚙️ Setup

_No specific setup detected._

---

## 🧠 Quiz

_No quiz detected in the exported HTML._


---

## 🧩 Tasks

<details>
<summary>0. The basics of async</summary>

**Files:**

- [`0-basic_async_syntax.py`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/python_async_function/0-basic_async_syntax.py)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `python_async_function`

**Task details:**

```text
0. The basics of async
Write an asynchronous coroutine that takes in an integer argument (
max_delay
, with a default value of 10) named
wait_random
that waits for a random delay between 0 and
max_delay
(included and float value) seconds and eventually returns it.
Use the
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

wait_random = __import__(
'0-basic_async_syntax'
).wait_random

print(asyncio.run(wait_random()))
print(asyncio.run(wait_random(
5
)))
print(asyncio.run(wait_random(
15
)))

bob
@dylan
:~
$
./
0
-main.py
9.034261504534394
1.6216525464615306
10.634589756751769
Repo:
GitHub repository:
holbertonschool-web_back_end
Directory:
python_async_function
File:
0-basic_async_syntax.py
