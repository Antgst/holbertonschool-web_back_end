# 📘 NoSQL

## 📌 Description

_No description detected._

---

## 📚 Resources

**Read or watch**:


- [NoSQL Databases Explained](https://riak.com/resources/nosql-databases/)

- [What is NoSQL ?](https://www.youtube.com/watch?v=qUV2j3XBRHc)

- [MongoDB with Python Crash Course - Tutorial for Beginners](https://www.youtube.com/watch?v=E-1xI85Zog8)

- [MongoDB Tutorial 2 : Insert, Update, Remove, Query](https://www.youtube.com/watch?v=CB9G5Dvv-EE)

- [Aggregation](https://www.mongodb.com/docs/manual/aggregation/)

- [Introduction to MongoDB and Python](https://realpython.com/introduction-to-mongodb-and-python/)

- [mongo Shell Methods](https://www.mongodb.com/docs/manual/reference/method/)

- [The mongo Shell](https://www.mongodb.com/docs/mongodb-shell/)

---

## 🎯 Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), __without the help of Google__:


### General


- What NoSQL means

- What is difference between SQL and NoSQL

- What is ACID

- What is a document storage

- What are NoSQL types

- What are benefits of a NoSQL database

- How to query information from a NoSQL database

- How to insert/update/delete information from a NoSQL database

- How to use MongoDB

---

## ✅ Requirements

### MongoDB Command File


- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `MongoDB` (version 4.4)

- All your files should end with a new line

- The first line of all your files should be a comment: `// my comment`

- A `README.md` file, at the root of the folder of the project, is mandatory

- The length of your files will be tested using `wc`


### Python Scripts


- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `python3` (version 3.9) and `PyMongo` (version 4.8.0)

- All your files should end with a new line

- The first line of all your files should be exactly `#!/usr/bin/env python3`

- A `README.md` file, at the root of the folder of the project, is mandatory

- Your code should use the `pycodestyle` style (version 2.5.\*)

- The length of your files will be tested using `wc`

- All your modules should have a documentation (`python3 -c 'print(__import__("my_module").__doc__)'`)

- All your functions should have a documentation (`python3 -c 'print(__import__("my_module").my_function.__doc__)'`

- Your code should not be executed when imported (by using `if __name__ == "__main__"`:)


---


### Install MongoDB 4.4 in the sandbox (Ubuntu 22.04)


#### 1. Install the missing `libssl1.1` dependency


MongoDB 4.x requires **OpenSSL 1.1**, which isn’t included in Ubuntu 22.04.


```bash

echo "deb http://security.ubuntu.com/ubuntu focal-security main" | sudo tee /etc/apt/sources.list.d/focal-security.list

sudo apt update

sudo apt install -y libssl1.1

sudo rm /etc/apt/sources.list.d/focal-security.list

sudo apt update

```


#### 2. Add the MongoDB 4.4 repository and key


```bash

curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list

sudo apt update

```


#### 3. Install MongoDB 4.4 packages


```bash

sudo apt install -y mongodb-org

```


#### 4. Prepare required directories and permissions


```bash

sudo mkdir -p /var/lib/mongodb /var/log/mongodb

sudo chown -R mongodb:mongodb /var/lib/mongodb /var/log/mongodb

```


#### 5. Start `mongod`


```bash

sudo -u mongodb /usr/bin/mongod --config /etc/mongod.conf &

```


This runs MongoDB in the foreground.


### Verification


Check the MongoDB version:


```bash

mongod --version

```


Expected output should show something like `v4.4.xx`.


---

---

## ⚙️ Setup

_No specific setup detected._

---

## 🧠 Quiz

_No quiz detected in the exported HTML._


---

## 🧩 Tasks

<details>
<summary>0. List all databases</summary>

**Files:**

- [`0-list_databases`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/NoSQL/0-list_databases)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `NoSQL`

**Task details:**

```text
0. List all databases
Write a script that lists all databases in MongoDB.
guillaume
@ubuntu
:~/$ cat
0
-list_databases | mongo
MongoDB shell version v3.
6.3
connecting
to
:
mongodb
://
127.0
.
0.1
:
27017
MongoDB server
version
:
3.6
.
3
admin
0.000
GB
config
0.000
GB
local
0.000
GB
logs
0.005
GB
bye
guillaume
@ubuntu
:~/$
Repo:
GitHub repository:
holbertonschool-web_back_end
Directory:
NoSQL
File:
0-list_databases
