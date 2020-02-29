# Suru

## About
Suru is a website I created as a take-home test for a taineeship position at [DTT](https://www.d-tt.nl/). The public API was retrieved from the [Harvard Art Museum](https://www.harvardartmuseums.org/).   

## Author
[Ichmarah Kock](https://www.linkedin.com/in/ichmarah)

## Setup
* Clone this project from https://github.com/ichmarah/DTT-test
* Install [Node](https://nodejs.org)
* At root of project type `npm install && npm run serve` or `yarn install && yarn serve`
 to install the dependencies and to run in development mode
* Open in browser: `http://localhost:8080`

## Requirements
* All pages must be fully responsive
* Fixed menu in header with 3 buttons (Home, Categories, Random) – 4th button About was my own choosing
* Show 10 sortable prints from the public API on Home page
* Prints must be clickable to a detailpage
* Detailpage shows 3 other prints relevant to main print
* Random shows a random print when the button is clicked
* Footer with generated sitemap

## Built with
[Vue.js](https://vuejs.org/) and [TypeScript](https://www.typescriptlang.org/)

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


