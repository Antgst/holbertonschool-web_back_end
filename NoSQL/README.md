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
Score of the task
9
/9
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
QA Review
×
0. List all databases
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
Students who are done with "0. List all databases"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>1. Create a database</summary>

**Files:**

- [`1-use_or_create_database`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/NoSQL/1-use_or_create_database)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `NoSQL`

**Task details:**

```text
1. Create a database
Write a script that creates or uses the database
my_db
:
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
guillaume
@ubuntu
:~/$ cat
1
-use_
or
_create_database | mongo
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
switched to db my_db
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
1-use_or_create_database
Score of the task
8
/8
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
QA Review
×
1. Create a database
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
Students who are done with "1. Create a database"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>2. Insert document</summary>

**Files:**

- [`2-insert`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/NoSQL/2-insert)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `NoSQL`

**Task details:**

```text
2. Insert document
Write a script that inserts a document in the collection
school
:
The document must have one attribute
name
with value "Holberton school"
The database name will be passed as option of
mongo
command
guillaume
@ubuntu
:~/$ cat
2
-insert | mongo my_db
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
/my_db
MongoDB server
version
:
3.6
.
3
WriteResult({ "nInserted" :
1
})
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
2-insert
Score of the task
8
/8
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
QA Review
×
2. Insert document
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
Students who are done with "2. Insert document"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>3. All documents</summary>

**Files:**

- [`3-all`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/NoSQL/3-all)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `NoSQL`

**Task details:**

```text
3. All documents
Write a script that lists all documents in the collection
school
:
The database name will be passed as option of
mongo
command
guillaume
@ubuntu
:~/$ cat
3
-all | mongo my_db
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
/my_db
MongoDB server
version
:
3.6
.
3
{ "_id" :
ObjectId
(
"5a8fad532b69437b63252406"
),
"name"
:
"Holberton school"
}
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
3-all
Score of the task
9
/9
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
3. All documents
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
Students who are done with "3. All documents"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>4. All matches</summary>

**Files:**

- [`4-match`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/NoSQL/4-match)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `NoSQL`

**Task details:**

```text
4. All matches
Write a script that lists all documents with
name="Holberton school"
in the collection
school
:
The database name will be passed as option of
mongo
command
guillaume
@ubuntu
:~/$ cat
4
-match | mongo my_db
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
/my_db
MongoDB server
version
:
3.6
.
3
{ "_id" :
ObjectId
(
"5a8fad532b69437b63252406"
),
"name"
:
"Holberton school"
}
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
4-match
Score of the task
11
/11
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
QA Review
×
4. All matches
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
Students who are done with "4. All matches"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>5. Count</summary>

**Files:**

- [`5-count`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/NoSQL/5-count)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `NoSQL`

**Task details:**

```text
5. Count
Write a script that displays the number of documents in the collection
school
:
The database name will be passed as option of
mongo
command
guillaume
@ubuntu
:~/$ cat
5
-count | mongo my_db
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
/my_db
MongoDB server
version
:
3.6
.
3
1
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
5-count
Score of the task
9
/9
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
QA Review
×
5. Count
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
Students who are done with "5. Count"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>6. Update</summary>

**Files:**

- [`6-update`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/NoSQL/6-update)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `NoSQL`

**Task details:**

```text
6. Update
Write a script that adds a new attribute to a document in the collection
school
:
The script should update only document with
name="Holberton school"
(all of them)
The update should add the attribute
address
with the value "972 Mission street"
The database name will be passed as option of
mongo
command
guillaume
@ubuntu
:~/$ cat
6
-update | mongo my_db
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
/my_db
MongoDB server
version
:
3.6
.
3
WriteResult({ "nMatched" :
1
,
"nUpserted"
:
0
,
"nModified"
:
1
})
bye
guillaume
@ubuntu
:~/$
guillaume
@ubuntu
:~/$ cat
4
-match | mongo my_db
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
/my_db
MongoDB server
version
:
3.6
.
3
{ "_id" :
ObjectId
(
"5a8fad532b69437b63252406"
),
"name"
:
"Holberton school"
,
"address"
:
"972 Mission street"
}
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
6-update
Score of the task
11
/11
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
QA Review
×
6. Update
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
Students who are done with "6. Update"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>7. Delete by match</summary>

**Files:**

- [`7-delete`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/NoSQL/7-delete)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `NoSQL`

**Task details:**

```text
7. Delete by match
Write a script that deletes all documents with
name="Holberton school"
in the collection
school
:
The database name will be passed as option of
mongo
command
guillaume
@ubuntu
:~/$ cat
7
-delete | mongo my_db
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
/my_db
MongoDB server
version
:
3.6
.
3
{ "acknowledged" : true,
"deletedCount"
:
1
}
bye
guillaume
@ubuntu
:~/$
guillaume
@ubuntu
:~/$ cat
4
-match | mongo my_db
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
/my_db
MongoDB server
version
:
3.6
.
3
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
7-delete
Score of the task
11
/11
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
QA Review
×
7. Delete by match
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
Students who are done with "7. Delete by match"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>8. List all documents in Python</summary>

**Files:**

- [`8-all.py`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/NoSQL/8-all.py)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `NoSQL`

**Task details:**

```text
8. List all documents in Python
Write a Python function that lists all documents in a collection:
Prototype:
def list_all(mongo_collection):
Return an empty list if no document in the collection
mongo_collection
will be the
pymongo
collection object
guillaume
@ubuntu
:~/
$
cat
8
-main.py
#!/usr/bin/env python3
""
" 8-main "
""
from pymongo import
MongoClient
list_all = __import__(
'8-all'
).list_all
if
__name__ ==
"__main__"
:
    client =
MongoClient
(
'mongodb://127.0.0.1:27017'
)
    school_collection = client.my_db.school
    schools = list_all(school_collection)
for
school
in
schools:
print(
"[{}] {}"
.format(school.get(
'_id'
), school.get(
'name'
)))

guillaume
@ubuntu
:~/
$
guillaume
@ubuntu
:~/
$
./
8
-main.py
[5a8f60cfd4321e1403ba7ab9]
Holberton
school
[5a8f60cfd4321e1403ba7aba]
UCSD
guillaume
@ubuntu
:~/
$
Repo:
GitHub repository:
holbertonschool-web_back_end
Directory:
NoSQL
File:
8-all.py
Score of the task
9
/9
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
QA Review
×
8. List all documents in Python
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
Students who are done with "8. List all documents in Python"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>9. Insert a document in Python</summary>

**Files:**

- [`9-insert_school.py`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/NoSQL/9-insert_school.py)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `NoSQL`

**Task details:**

```text
9. Insert a document in Python
Write a Python function that inserts a new document in a collection based on
kwargs
:
Prototype:
def insert_school(mongo_collection, **kwargs):
mongo_collection
will be the
pymongo
collection object
Returns the new
_id
guillaume
@ubuntu
:~/
$
cat
9
-main.py
#!/usr/bin/env python3
""
" 9-main "
""
from pymongo import
MongoClient
list_all = __import__(
'8-all'
).list_all
insert_school = __import__(
'9-insert_school'
).insert_school
if
__name__ ==
"__main__"
:
    client =
MongoClient
(
'mongodb://127.0.0.1:27017'
)
    school_collection = client.my_db.school
    new_school_id = insert_school(school_collection, name=
"UCSF"
, address=
"505 Parnassus Ave"
)
    print(
"New school created: {}"
.format(new_school_id))

    schools = list_all(school_collection)
for
school
in
schools:
print(
"[{}] {} {}"
.format(school.get(
'_id'
), school.get(
'name'
), school.get(
'address'
,
""
)))

guillaume
@ubuntu
:~/
$
guillaume
@ubuntu
:~/
$
./
9
-main.py
New
school
created:
5a8f60cfd4321e1403ba7abb
[5a8f60cfd4321e1403ba7ab9]
Holberton
school
[5a8f60cfd4321e1403ba7aba]
UCSD
[5a8f60cfd4321e1403ba7abb]
UCSF
505
Parnassus
Ave
guillaume
@ubuntu
:~/
$
Repo:
GitHub repository:
holbertonschool-web_back_end
Directory:
NoSQL
File:
9-insert_school.py
Score of the task
14
/14
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
QA Review
×
9. Insert a document in Python
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
Students who are done with "9. Insert a document in Python"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>10. Change school topics</summary>

**Files:**

- [`10-update_topics.py`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/NoSQL/10-update_topics.py)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `NoSQL`

**Task details:**

```text
10. Change school topics
Write a Python function that changes all topics of a school document based on the name:
Prototype:
def update_topics(mongo_collection, name, topics):
mongo_collection
will be the
pymongo
collection object
name
(string) will be the school name to update
topics
(list of strings) will be the list of topics approached in the school
guillaume
@ubuntu
:~/
$
cat
10
-main.py
#!/usr/bin/env python3
""
" 10-main "
""
from pymongo import
MongoClient
list_all = __import__(
'8-all'
).list_all
update_topics = __import__(
'10-update_topics'
).update_topics
if
__name__ ==
"__main__"
:
    client =
MongoClient
(
'mongodb://127.0.0.1:27017'
)
    school_collection = client.my_db.school
    update_topics(school_collection,
"Holberton school"
, [
"Sys admin"
,
"AI"
,
"Algorithm"
])

    schools = list_all(school_collection)
for
school
in
schools:
print(
"[{}] {} {}"
.format(school.get(
'_id'
), school.get(
'name'
), school.get(
'topics'
,
""
)))

    update_topics(school_collection,
"Holberton school"
, [
"iOS"
])

    schools = list_all(school_collection)
for
school
in
schools:
print(
"[{}] {} {}"
.format(school.get(
'_id'
), school.get(
'name'
), school.get(
'topics'
,
""
)))

guillaume
@ubuntu
:~/
$
guillaume
@ubuntu
:~/
$
./
10
-main.py
[5a8f60cfd4321e1403ba7abb]
UCSF
[5a8f60cfd4321e1403ba7aba]
UCSD
[5a8f60cfd4321e1403ba7ab9]
Holberton
school [
'Sys admin'
,
'AI'
,
'Algorithm'
]
[5a8f60cfd4321e1403ba7abb]
UCSF
[5a8f60cfd4321e1403ba7aba]
UCSD
[5a8f60cfd4321e1403ba7ab9]
Holberton
school [
'iOS'
]
guillaume
@ubuntu
:~/
$
Repo:
GitHub repository:
holbertonschool-web_back_end
Directory:
NoSQL
File:
10-update_topics.py
Score of the task
11
/11
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
QA Review
×
10. Change school topics
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
Students who are done with "10. Change school topics"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>11. Where can I learn Python?</summary>

**Files:**

- [`11-schools_by_topic.py`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/NoSQL/11-schools_by_topic.py)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `NoSQL`

**Task details:**

```text
11. Where can I learn Python?
Write a Python function that returns the list of school having a specific topic:
Prototype:
def schools_by_topic(mongo_collection, topic):
mongo_collection
will be the
pymongo
collection object
topic
(string) will be topic searched
guillaume
@ubuntu
:~/
$
cat
11
-main.py
#!/usr/bin/env python3
""
" 11-main "
""
from pymongo import
MongoClient
list_all = __import__(
'8-all'
).list_all
insert_school = __import__(
'9-insert_school'
).insert_school
schools_by_topic = __import__(
'11-schools_by_topic'
).schools_by_topic
if
__name__ ==
"__main__"
:
    client =
MongoClient
(
'mongodb://127.0.0.1:27017'
)
    school_collection = client.my_db.school

    j_schools = [
        {
'name'
:
"Holberton school"
,
'topics'
: [
"Algo"
,
"C"
,
"Python"
,
"React"
]},
        {
'name'
:
"UCSF"
,
'topics'
: [
"Algo"
,
"MongoDB"
]},
        {
'name'
:
"UCLA"
,
'topics'
: [
"C"
,
"Python"
]},
        {
'name'
:
"UCSD"
,
'topics'
: [
"Cassandra"
]},
        {
'name'
:
"Stanford"
,
'topics'
: [
"C"
,
"React"
,
"Javascript"
]}
    ]
for
j_school
in
j_schools:
insert_school(school_collection, **j_school)

    schools = schools_by_topic(school_collection,
"Python"
)
for
school
in
schools:
print(
"[{}] {} {}"
.format(school.get(
'_id'
), school.get(
'name'
), school.get(
'topics'
,
""
)))

guillaume
@ubuntu
:~/
$
guillaume
@ubuntu
:~/
$
./
11
-main.py
[5a90731fd4321e1e5a3f53e3]
Holberton
school [
'Algo'
,
'C'
,
'Python'
,
'React'
]
[5a90731fd4321e1e5a3f53e5]
UCLA
[
'C'
,
'Python'
]
guillaume
@ubuntu
:~/
$
Repo:
GitHub repository:
holbertonschool-web_back_end
Directory:
NoSQL
File:
11-schools_by_topic.py
Score of the task
13
/13
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
QA Review
×
11. Where can I learn Python?
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
Students who are done with "11. Where can I learn Python?"
×
Recommended Sandboxes
Loading...
```

</details>

<details>
<summary>12. Log stats</summary>

**Files:**

- [`12-log_stats.py`](https://github.com/Antgst/holbertonschool-web_back_end/blob/main/NoSQL/12-log_stats.py)

**Repository:** `holbertonschool-web_back_end`

**Directory:** `NoSQL`

**Task details:**

```text
12. Log stats
Write a Python script that provides some stats about Nginx logs stored in MongoDB:
Database:
logs
Collection:
nginx
Display (same as the example):
first line:
x logs
where
x
is the number of documents in this collection
second line:
Methods:
5 lines with the number of documents with the
method
=
["GET", "POST", "PUT", "PATCH", "DELETE"]
in this order (see example below - warning: it's a tabulation before each line)
one line with the number of documents with:
method=GET
path=/status
You can use this dump as data sample:
dump.zip
The output of your script
must be exactly the same as the example
guillaume
@ubuntu
:~/
$
curl -o dump.zip -s
"https://s3.eu-west-3.amazonaws.com/hbtn.intranet.project.files/holbertonschool-webstack/411/dump.zip"
guillaume
@ubuntu
:~/
$
guillaume
@ubuntu
:~/
$
unzip dump.zip
Archive
:  dump.zip
creating:
dump/
creating:
dump/logs/
inflating:
dump/logs/nginx.metadata.json
inflating:
dump/logs/nginx.bson
guillaume
@ubuntu
:~/
$
guillaume
@ubuntu
:~/
$
mongorestore dump
2018
-
02
-23
T20:
12
:
37.807
+
0000
preparing collections to restore from
2018
-
02
-23
T20:
12
:
37.816
+
0000
reading metadata
for
logs.nginx from dump/logs/nginx.metadata.json
2018
-
02
-23
T20:
12
:
37.825
+
0000
restoring logs.nginx from dump/logs/nginx.bson
2018
-
02
-23
T20:
12
:
40.804
+
0000
[
##......................]  logs.nginx  1.21MB/13.4MB  (9.0%)
2018
-
02
-23
T20:
12
:
43.803
+
0000
[
#####...................]  logs.nginx  2.88MB/13.4MB  (21.4%)
2018
-
02
-23
T20:
12
:
46.803
+
0000
[
#######.................]  logs.nginx  4.22MB/13.4MB  (31.4%)
2018
-
02
-23
T20:
12
:
49.803
+
0000
[
##########..............]  logs.nginx  5.73MB/13.4MB  (42.7%)
2018
-
02
-23
T20:
12
:
52.803
+
0000
[
############............]  logs.nginx  7.23MB/13.4MB  (53.8%)
2018
-
02
-23
T20:
12
:
55.803
+
0000
[
###############.........]  logs.nginx  8.53MB/13.4MB  (63.5%)
2018
-
02
-23
T20:
12
:
58.803
+
0000
[
#################.......]  logs.nginx  10.1MB/13.4MB  (74.9%)
2018
-
02
-23
T20:
13
:
01
.
803
+
0000
[
####################....]  logs.nginx  11.3MB/13.4MB  (83.9%)
2018
-
02
-23
T20:
13
:
04
.
803
+
0000
[
######################..]  logs.nginx  12.8MB/13.4MB  (94.9%)
2018
-
02
-23
T20:
13
:
06
.
228
+
0000
[
########################]  logs.nginx  13.4MB/13.4MB  (100.0%)
2018
-
02
-23
T20:
13
:
06
.
230
+
0000
no indexes to restore
2018
-
02
-23
T20:
13
:
06
.
231
+
0000
finished restoring logs.nginx (
94778
documents)
2018
-
02
-23
T20:
13
:
06
.
232
+
0000
done
guillaume
@ubuntu
:~/
$
guillaume
@ubuntu
:~/
$
./
12
-log_stats.py
94778
logs
Methods
:
    method
GET
:
93842
method
POST
:
229
method
PUT
:
0
method
PATCH
:
0
method
DELETE
:
0
47415
status check
guillaume
@ubuntu
:~/
$
Repo:
GitHub repository:
holbertonschool-web_back_end
Directory:
NoSQL
File:
12-log_stats.py
Score of the task
12
/12
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
12. Log stats
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
Students who are done with "12. Log stats"
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
