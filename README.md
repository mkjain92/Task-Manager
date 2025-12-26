# 1. Frontend With React

1. Create new folder task-manager and in this create two new folder frontend and backend.

# installation

1.  React Install

    1. npm create vite@latest
    2. project-name: .
    3. select-framwork: react
    4. select-varient: javascript
    5. use-rolldown-vite: no
    6. install-with-npm-and-start-now: yes

2.  clear unwanted files

    1. app.css
    2. remove all code app.jsx and create new function using rafce sortcute for functional component (rafec shortcut is use by ES7+React/Redux/React-Native extension and Tailwind CSS IntelliSense extension is used for Tailwind CSS)
    3. reamove all css in index.css file

3.  setup on git

    1. create new Repository
       Task Manager
       Choose visibility : Public
       and click on button create Repository
    2. create new terminal D:\Larning\mearn-stack-project\task-manager>
       and run this command

       1. git init
       2. git add . (git add all)
       3. git commit -m "frontend initial setup"
       4. git branch -M main
          git remote add origin https://github.com/mkjain92/Task-Manager.git
          git push -u origin main

          …or create a new repository on the command line
          echo "# Task-Manager" >> README.md
          git init
          git add README.md
          git commit -m "first commit"
          git branch -M main
          git remote add origin https://github.com/mkjain92/Task-Manager.git
          git push -u origin main

          …or push an existing repository from the command line
          git remote add origin https://github.com/mkjain92/Task-Manager.git
          git branch -M main
          git push -u origin main

4.  Tailwind CSS Setup

    1.  Install Tailwind CSS
        Install tailwindcss and @tailwindcss/vite via npm.
        npm install tailwindcss @tailwindcss/vite

    2.  Configure the Vite plugin
        Add the @tailwindcss/vite plugin to your Vite configuration.

        import { defineConfig } from 'vite'
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
        plugins: [
           tailwindcss(),
        ],
       })

    3. Import Tailwind CSS (in index.css file)
       Add an @import to your CSS file that imports Tailwind CSS.
       @import "tailwindcss";

5. using google fonts poppins..
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
add this in index.css

- use Window + . (Dot) for Emoji ❤🧡❤💛💚💙💜💥💖💔😁

6. Routing
npm install react-router-dom #React Router DOM


3. install packages
   npm install react-hot-toast #For Toast message and add this in app.jsx import {Toaster} from 'react-hot-toast'
   npm install react-icons --save # icons in react
   npm install axios # Axios
   npm install @reduxjs/toolkit react-redux # Redux Toolkit

   npm install @mui/material @emotion/react @emotion/styled # MUI
   npm install @mui/icons-material # MUI Icons
   npm install @mui/x-data-grid # data-grid (MUI)
   npm install react-bootstrap bootstrap # bootstrap
   npm install prop-types # prop validation
   npm install react-hook-form yup # form validation
   npm install @hookform/resolvers yup # form validation
   npm install @mui/x-date-pickers dayjs # for date-pickers
   npm install @mui/x-date-pickers @mui/x-date-pickers-pro dayjs
   npm install crypto-js # for encryption or decrytion password
   npm install jwt-decode # for decode token


# 2. Backend With Node

# installation

1. create ba folder

   1. create server.js file in this folder
   2. cd server and run this command
      "npm init" for node packge.json generate (npm init -y if we use -y then not ask any question)
   3. edit package.json file and add
      "type": "module",
      "author": "MK Jain",
      "server": "nodemon server.js"
   4. npm install nodemon //for autorun
      npm install express // for express js
      npm install dotenv //Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
      npm install cors //middleware for CORS
      npm i colors //get color and style in your node.js console
      npm i morgan //HTTP request logger middleware for node.js
      npm install mongoose //for mongodb database
      npm install bcryptjs //Optimized bcrypt in JavaScript with zero dependencies, with TypeScript support. (for encryption)
      npm install jsonwebtoken //for token
      npm install multer //for upload file or image

      //npm install validator //A library of string validators and sanitizers.
      //npm install body-parser

2. in package.json file remove this form scripts
   "test": "echo \"Error: no test specified\" && exit 1",
3. in packge.json file update script section.
   "scripts": {
   "start": "nodemon server.js"
   },

4. add this on top of scripts
   "type": "module",

# now work on node

1. add code in server.js file

# 3. MongoDB Setup

in this project we are not using cloud mongodb we use work on local mongodb

1. dowload Community Edition
2. dowload Mongodb compas

3. mongodb (atlas) login with google.. and mongodb compass download and install.

4. mongodb(atlas) connect with mongodb compass

   1. Cluster/ click on connect button then show Connect to Cluster0 now click on Compass then
      Copy the connection string, then open MongoDB Compass
      Use this connection string in your application

   2. now mongodb comapss click on new Connection or (+) button
      and now past connection string in URL.

5. if show this error.. cluster0.ocg9koy.mongodb.net 635904:error:10000438:SSL routines:OPENSSL_internal:TLSV1_ALERT_INTERNAL_ERROR:..\..\third_party\boringssl\src\ssl\tls_record.cc:486:SSL alert number 80 " when show this eror then"
   "curl -4 ifconfig.me" run this command in cmd. then will show ip this ip add in network access.
6. connect mongodb session
   npm i --save connect-mongodb-session

7. for using CSRF Token
   npm i --save csurf

8. for message
   npm i --save connect-flash

9. send Mail..

   1. for send mail we use thired pairy mail server. SendGrid.
      i. select free Trial
      ii. i am login with google (this my code after login: "EG4NYUAAUTYTBY93C714JWEQ")
      iii. create API key
      a. go to settings
      b. click on API Keys
      c. create API Keys
      name- node-show
      access- Full Access

   2. now install this packages
      npm install --save nodemailer
      npm install --save nodemailer-sendgrid-transport

10. Validation (server side)

    1. install this package
       npm install --save express-validator

11. For File Upload..

    1. install this package
       npm install --save multer

12. for content-security-policy
    npm install helmet

13. for pdf generate
    npm install --save pdfkit
