# Module 9 assignment
---

## Instructions

### Getting started:  

Clone the repository: 

`git clone https://github.com/pranavm7/Expo-full_stack.git`

Then enter into each directory and install the dependencies:  

```sh
cd app && npm i
```

and then

```sh
cd ../backend && npm i
```

And we should be good to go! 🚀


### Running the application:  

Start 3 different terminals

Terminal 1 to serve the frontend:  
```sh
cd ./app && npx expo start 
```

Terminal 2 to serve the backend:
```sh
cd ./backend && mongod --dbpath ./data/db 
```

Terminal 3 to serve the middleware:

```sh
cd ./backend && node server.js
```
---

> Note:
> In windows the directory commands would need to be .\[app | backend]


## Features: 

This repository features a cross-platform react application created with Expo. 
Additionally in the `/backend` directory there exists a definition for a mongodb server that serves the data entered into a NoSQL database.  

