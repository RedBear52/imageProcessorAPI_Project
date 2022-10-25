# Image Processor API 

# Project Explanation
The Image Processor API will resize images and store them locally for subsequent, rapid retrieval.

Their are many potential use cases for this API as it could serve as the foundation on which to build:
- A thumbnail generator
- Image editor
- Image placeholder app for prototyping
- etc.

The images our provided in this preliminary version but future build out will include the ability for the user to upload their own images and/or pull them in using URLs.

# Table of Contents
- [Project Title](#image-processor-api-)
- [Project Explanation](#project-explanation)
- [Table of contents](#table-of-contents)
- [Web Technologies](#web-technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)

# Web Technologies
This app is the first project in the Udacity Full Stack Javascript Developer nanodegree program. 

I plan to add quite a few additonal features and functionality in the future to challenge my understanding of the web technologies herein.

Web technologies used in this project include:
- Browser dev tools
- HTML, CSS & Javascript
- ES6 Modules
- APIs
- Express.js
- Node.js
- Typescript
- Sharp.js 
- Jasmine
- Supertest
- Npm
- Git

# Installation
[(Back to Table of Contents)](#table-of-contents)

To run this web app, you'll need to have a rudimentary understanding of git.

**Warning**
`To ensure full and proper functionality, please be sure to use the latest LTS version of Node.`  
`At the time of the creation of this document, that version is: 16.18.0 `   
`If you do not want to change your working version of Node, consider using Node Version Manager which allows you to switch versions on a project by project basis.`    
More info on NVM here: https://github.com/nvm-sh/nvm

After ensuring that you are using Node 16.18.0 or a later LTS version of Node.js, follow the steps below:  

Step 1 - Clone the repo via the CLI with the following command:

`git init`

`git clone https://github.com/RedBear52/imageProcessorAPI_Project.git`

Step 2 - `cd` into the cloned project directory and install all requisite dependencies: `npm install`.

Step 3 - Compile to js: `npm run build`

Optional:
- Run the test script:  `npm run test`
- Run the lint script:  `npm run lint`
- Run the code formatter:  `npm run format`

Step 4 - Launch in production mode: `npm start`

# Usage
[(Back to Table of Contents)](#table-of-contents)
Once you've got the program up and running, you can review the functionality by selectng one of the five provided images and selecting your custom dimensions via the address bar in your browser.

Navigate to API's root endpoint `http://localhost:3200/api/resize` and then add the appropriate query string parameters to the URL.

Available filenames:
- andonia
- elam 
- happel
- mocco
- siue

Examples of properly formatted URLs with query strings:
- `http://localhost:3200/api/resize?filename=siue&width=1200&height=800`
- `http://localhost:3200/api/resize?filename=mocco&width=800&height=600`
- `http://localhost:3200/api/resize?width=800&height=600&filename=elam`

# Testing
[(Back to Table of Contents)](#table-of-contents)
If you'd like to become familiar with the basics of jasmine and other similar testing frameworks, you may want to run the existing tests via the `npm test` command.

This will run all of the tests (living in the __test__ folder) and return a pass/fail evaluation.

# License
[(Back to Table of Contents)](#table-of-contents)
## Udacity Honor Code
This project was submitted by Ryan Spearman as part of a Nanodegree program at Udacity.com.

As part of Udacity Honor code, submissions must be one's own work,
submitting this project as yours will cause you to break the Udacity Honor Code
and the suspension of your account.

The author (me) allows you to use this code as a reference and a leanring tool. Any other use may be in violation of Udacity's Honor code and/or the additional (MIT) licensing.

You are free to use the provided images for personal and educational use.

If you'd like to include any of the provide images in a commercial project, you are welcome to do so only if you credit me (Ryan Spearman) as the photographer and link to my personal website (http://www.RyanSpearman.net)

Copyright (c) 2022 Ryan Spearman

## MIT License

Permission is hereby freely granted to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notices and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.