[![Backbone](https://github.com/Iggy-Codes/logo-images/blob/master/logos/backbone.png)](http://backbonejs.org/) 
[![NodeJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/) 
[![ExpressJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/expressjs.png)](http://expressjs.com/)   
[![HTML5, CSS3 and JS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/html5-css3-js.png)](https://www.w3.org/) 
[![ES6](https://github.com/Iggy-Codes/logo-images/blob/master/logos/es6.png)](http://www.ecma-international.org/ecma-262/6.0/)
[![Standard - JavaScript Style Guide](https://github.com/Iggy-Codes/logo-images/blob/master/logos/js-standard.png)](https://github.com/feross/standard) 
[![Bower](https://github.com/Iggy-Codes/logo-images/blob/master/logos/bower.png)](https://bower.io/) 
[![npm](https://github.com/Iggy-Codes/logo-images/blob/master/logos/npm.png)](https://www.npmjs.com/)

## Fullstack Carousel Application build with ES6, HTML5, CSS3, BackboneJS and ExpressJS 


### Motivation

My motivation was to learn a new javascript framework. So I built a carousel that:
- by default displays 4 blocks.
- navigation is made with next and previous buttons.
- Next button should be disabled, if user is at the very end of the carousel.
- Previous button should be disabled, if user is at the very beginning of carousel.
- Clicking on next/previous buttons shows next/prev 4 carousel blocks accordingly.
- The source of carousel block is endpoint on server that return following JSON:

[{
title: "First Block",
images: [url1, url2, url3]
},
{
title: “Second Block",
images: [url7, url8]
}
,...]

- Display a random image for each block from the set of images.

### Installation

You need to have installed [NodeJS](https://nodejs.org/), [npm](https://www.npmjs.com/) and [Bower](https://bower.io/)

1. Download the zip or clone the repository
You will need a ```.env``` files containing
```
PORT=XXXX (Port where the server will listen petitions, by default is 3000)
```

2. Open your terminal and type ```npm start``` (it installs all npm and bower dependencies)

3. Go to your browser and type ```localhost:3000``` (o the PORT value of your choice)

### How it works

1. The server, a NodeJS with ExpressJS webserver, will serve up a client, a BackboneJS SAP, at ```localhost:3000/carousel```
2. The client requests at ```localhost:3000/api``` for the carousel information
3. The server sends a JSON as a response
4. The JSON object is read by the client and the data is rendered accordingly on HTML

#### Observations:
* Server:
  * Valid requests:
    - ```localhost:3000/carousel```
    - ```localhost:3000/api```
    - any other request will be redirect to the first one
  * In ```server/routes/api/index.js``` is the file where the JSON is defined.
* Client
  * Responsive:
    * The application is responsive, and the style sheet has been optimized to display 4 images at the same time  
  * Configuration:
    * on ```client/js/config/constants.js``` you can specify:
      + ```imgsGroup``` how many pictures your carousel shows at the same time
      + ```startingGroup``` is the index of the group of images that will show initially (1 for the first, 2 for the second, ...)
  * Error control:
    * If the JSON is not received, an error message will be displayed
  * Backbone routes control:
    * With the routes we can specify the group of images to display (```#1``` for the first, ```#2``` for the second, ...)
      * ```#1``` will be assign to a non numeric value or values less than 1
      * if the value passed is greater than the total of the groups of images available, the app will show the last group of images
  * JSON
    * The client is waiting for a structure like the one shown on Motivation section, but also accepts:
      - Accepts a single object (it doesn't need to be wrap in an Array structure)
      - ```images```
        - can be an ```Array``` (we can random the image to show) or a ```String``` (the image is fix)
        - if no information is provided, the ```singleBlockModel``` will assign an default address.
### Coding Style

All the code has been developed under the [JavaScript Standard Style](http://standardjs.com/)   

### Built With

* [SublimeText](http://https://https:/npmdejs.org/www.sublimetext.com) - Text editor

### Authors

* [Ignasi Amargós](http://github.com/Iggy-Codes) 

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
