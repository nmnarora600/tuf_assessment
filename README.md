# TUF_Assessment

This repository contains my assessment submitted to TakeUForward Team for the First Round of SDE Hiring.

## Steps to run app locally

## Clone the repo
* Open your terminal.

* Change the current working directory to the location where you want to clone the repository.

* Run the following command to clone the repository:
```bash
git clone https://github.com/nmnarora600/tuf_assessment.git
```
## Setting Environment Variables
* create/edit .env file inside backend folder
```bash
HOST='0.0.0.0'
USER=''
PASSWORD=''
PORT='3306'
DATABASE='tuf'
CONNECTION_LIMIT=10
```

## Installing the Required Dependencies

After cloning the repo run run following commands to install required node modules.

* check in to tuf_assessment
```bash
cd tuf_assessment
```
* install node modules for frontend
```bash
npm install
```
* install node modules for backend
```bash
cd backend
npm install
```



## Run in Development Mode

After following above steps just open the frontend folder in cmd, powershell etc.
```bash
cd Path/to/the/repo/tuf_assessment
```
* Run the following command to start app in development mode

```bash
npx run dev
```

* Run the following command in another terminal to start backend

```bash
node ./index.js
```

* Open your Browser and go to the following link to see your app 

```bash
http://localhost:5173
```


## Hosted APP
You can check the hosted version of app at

```bash
https://tuf.namanarora.in
```



