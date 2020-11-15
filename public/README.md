## [Course title: CPNT-262-A: Web Client & Server Prog.]

### * Assignment 4: Deployed Static Express Website 
### * Author name: Nana

### * Links to:
  + [GH repo](https://github.com/CreativeNana/cpnt262-a4)
  + [HEROKU App](https://nana-cpnt262-a4.herokuapp.com/)

### * Comments: 
  1. Project environment setup
    1. package and module install 
      - NPM(Node package management)
      - Express(web framework)
      - dotenv library
      - ejs module

    2. Directory setup
      - Public: original html files, images & data sources
      - Views: interlink data to view engine files and modularize common files
      - Other setup files

  2. Data Gathering
    1. Download images from Pexel.com and edit them
    2. Copy cpnt260-final 
      - Cleand up CSS files based on feedback: Delete duplicate codes and files.

  3. View Engine setup 
    1. Server.js
      - Use middleware functions: express.static, express.urlencoded
      - Create 3 HTML GET endpoints and Gallery virtual JSON API
      - Return 404 errors when a file cannot be found
      - Set server port with default

  4. Create view pages
    - .ejs files 
    - Bring gallery images from Gallery JSON API by using fetch()
    - Use forEach to call up the menu name and status (active) and display the current page in the navigation: Check if url has a page name after '/' and if not, call index page

  5. Deploy to Heroku
    - Connect between Heroku App and GitHub Repo

  6. Control uploading files 
    - Exclude uploading node modules and environment variables(.env file) using .gitignore

   
### * Attributions: 
  + acidtone: [Client-side animal gallery](https://github.com/sait-wbdv/in-class/tree/main/week09f/animal-fetch) [Sample Animals Import Script](https://github.com/sait-wbdv/in-class/tree/main/week10t/animals)
  + NPMJS.com: [Dotenv](https://www.npmjs.com/package/dotenv)