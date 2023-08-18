# register-app
This is a simple register app built using React Native. The project was created in secondary school.

<details>
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#setup">Setup</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#technologies">Technologies</a></li>
  </ul>
</details>

## Setup

####  To get a production version of this project, follow these steps:

1. Download the latest APK file of the application: 

    - Go to the [Releases](https://github.com/piechnikk/register-app/releases) section of my GitHub repository.

    - Find the latest release version and click on it to open the release page.

    - Look for the downloadable APK file attached to the release (usually named something like `register-app-v1.0.0.apk`).

    - Download the APK file by clicking on it.

2. Install the application on your phone:

   - Navigate to the directory where you downloaded the APK file.

   - Install the application.

#### To set up a development version of this project, follow these steps:

1. Clone the repository: 
    ```
    git clone https://github.com/piechnikk/register-app.git
    ```
2. Navigate to the server directory: 
    ```
    cd register-app/server
    ```
3. Install the server dependencies:
    ```
    npm install
    ```
4. Run the Node.js server:
    ```
    npm start
    ```
5. Change url in client/components/Settings.json to your ip address: 

    `http://[your-ip-address]:3000`
6. Open another terminal and navigate to the client directory: 
    ```
    cd register-app/client
    ```
7. Install the client dependencies using npm:
    ```
    npm install
    ```
8. Run the application using the following command:
    ```
    npm run start
    ```
9. Scan the qr code with the Expo go app.

## Usage

Open the register-app. Registered user data are stored on the server. You can manage registered users in the admin tab.
<div>
  <img src="https://github.com/piechnikk/register-app/assets/51060535/bf43a13e-bb77-414b-8f4e-e1c370ed6d86" alt="home" width="33%"/>
  <img src="https://github.com/piechnikk/register-app/assets/51060535/b3da7b6c-603f-4348-88b9-a083b64ad291" alt="users list" width="33%"/>
  <img src="https://github.com/piechnikk/register-app/assets/51060535/1d20858e-e3da-4144-afb8-48faa9f0fb37" alt="details" width="33%"/>
</div>

## Technologies

#### CLIENT
<div>
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript">
    <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native">
    <img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white" alt="Expo">
</div>

#### SERVER
<div>
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript">
    <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node js">
    <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express js">
</div>

---

**Note**: This project was created in secondary school and serves as an example of a simple react native app.
