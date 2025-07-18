# Treasure-Hunt Image Service

## Table of Contents

- [Treasure-Hunt](#treasure-hunt)
    - [Overview](#overview)
    - [Server File Structure](#server-file-structure)
    - [Features](#features)
    - [Technologies Used](#technologies-used)
    - [Installation and Operation](#installation-and-operation)


## Overview

This program is designed to serve images for the [TreasureHunt App](https://github.com/voyagerfan/Treasure-Hunt). The server is configured for `localhost` and images are served out of the endpoint `/images`.
>[!NOTE]
> All TypesScript files are compiled to Javascript and live in '~/dist' - this folder is included in `.gitignore` but will be available once compiled [see Installation and Operation](#installation-and-operation). 

## Server File Structure
The following is a brief overview of the file structure

[~/src/index.ts](https://github.com/voyagerfan/NodeImageServer-TreasureHunt/blob/main/src/index.ts) - The main entry point to the server. It is very minimal and points to server.ts for the bulk for the logic.

[~/src/server.ts](https://github.com/voyagerfan/NodeImageServer-TreasureHunt/blob/main/src/server.ts) - Router logic.

[~/src/imageRepo](https://github.com/voyagerfan/NodeImageServer-TreasureHunt/tree/main/src/imageRepo) - Contains a folder to store images on the server and a function to map a client key to the correct image.

## Features

This server includes the following features:
* Router logic to handle success and error paths with response codes
* Image storage for testing

## Technologies Used

- **Programming Languages:** TypeScript, JavaScript
- **Frameworks:** Node, Express

## Installation and Operation
*Prerequisites:* A suitable IDE of your choice (e.g. Intellij, Eclipse, VSCode)

With you desired IDE:
* Clone the repo to your desired directory.
* Open your IDE, then open the location you cloned the files to.
* Open a terminal within the IDE. Alternatively, you may open a terminal and navigate to the root directory of the cloned project.
* At the terminal prompt, enter `npm run build` - this will compile TypeScript files to JavaScript
* When then terminal prompt returns, enter `npm run start`

To Receive an image:
* Open a browser and add `localhost:9000/image/{desireImage.jpg}` where `desireImage.jpg` is the image you'd like.
* >[!NOTE]
  > The image must exist in `~/src/ImageRepo/imageFiles` in order for the image to be returned

> [!IMPORTANT]
> This server is a work in progress with plans to add several images for the TreasureHunt app. As the project grows, images may be moved elsewhere.

