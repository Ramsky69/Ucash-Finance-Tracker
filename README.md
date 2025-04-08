Hi this is a simple finance tracker.
Currently Register and Login works.
To be developed:

-Dashboard(/)(Roxas)

-Logout(/) (Roxas)

-Login(/)Roxas

-LandingPage(/)Roxas

-About(/)(Roxas)

-Register(/)(Roxas)

-Terms(/)(Roxas)

Pls do (/) if it is done.


To clone a repository:

```
git clone https://github.com/Ramsky69/Finance-Tracker.git

```
then do
```

cd Finance-Tracker

```

once done, Install the backend dependencies:
```
cd backend
pip install -r requirements.txt
```

after do
```
cd ..
cd frontend
npm install
```
If your using Codespace init the docker container for postgresql,
make a new terminal/bash
```
docker pull postgres
docker run --name financetracker -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=Admin1 -e POSTGRES_DB=financetracker -p 5432:5432 -d postgres:latest
docker ps
```
Optional to start a container:
```
docker start financetracker
```
That is all for the basics

This is made of
-ViteReact-TypeSctript
-TailwindCSS
-Django RestFramework
-PostgreSQL

3 Students made this. 
1. Abraham Ronaldson O. Roxas
2. Ralph Llorenz Baring
3. Samuel Aque



