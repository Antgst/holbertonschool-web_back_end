# 📘 Python - Variable Annotations

## 📌 Description

_No description detected._

---

## 📚 Resources

**Read or watch**:


- [Python 3 typing documentation](https://docs.python.org/3/library/typing.html)

- [MyPy cheat sheet](https://mypy.readthedocs.io/en/latest/cheat_sheet_py3.html)

---

## 🎯 Learning Objectives

### General


At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), __without the help of Google__:


- Type annotations in Python 3

- How you can use type annotations to specify function signatures and variable types

- Duck typing

- How to validate your code with `mypy`

---

## ✅ Requirements

### General


- Allowed editors: `vi`, `vim`, `emacs`

- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `python3` (version 3.9)

- All your files should end with a new line

- The first line of all your files should be exactly `#!/usr/bin/env python3`

- A `README.md` file, at the root of the folder of the project, is mandatory

- Your code should use the `pycodestyle` style (version 2.5.)

- All your files must be executable

- The length of your files will be tested using `wc`

- All your modules should have a documentation (`python3 -c 'print(__import__("my_module").__doc__)'`)

- All your classes should have a documentation (`python3 -c 'print(__import__("my_module").MyClass.__doc__)'`)

- All your functions (inside and outside a class) should have a documentation (`python3 -c 'print(__import__("my_module").my_function.__doc__)'` and `python3 -c 'print(__import__("my_module").MyClass.my_function.__doc__)'`)

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
<summary>0. Basic annotations - add</summary>

**Files:**

- [`0-add.py`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/python_variable_annotations/0-add.py)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `python_variable_annotations`

**Task details:**

```text
0. Basic annotations - add
Write a type-annotated function
add
that takes a float
a
and a float
b
as arguments and returns their sum as a float.
bob
@dylan
:~
$
cat
0
-main.py
#!/usr/bin/env python3
add = __import__(
'0-add'
).add

print(add(
1.11
,
2.22
) ==
1.11
+
2.22
)
print(add.__annotations__)

bob
@dylan
:~
$
./
0
-main.py
True
{
'a'
:  <
class
'float'
>,
'b'
: <
class
'float'
>,
'return'
: <
class
'float'
>}
Repo:
GitHub repository:
holbertonschool-web_back_end
Directory:
python_variable_annotations
File:
0-add.py
