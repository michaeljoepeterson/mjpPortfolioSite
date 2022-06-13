let pageData = [
    {
        id:'shakspop',
        image:'images/shakspop.png',
        title:'Shaks Pop Shop',
        description:'This is a Shopify headless eCommerce store. The front-end is built with React and the app back-end is handled by Shopify. The store is completely custom made and is connected to the owners Shopify store. This allows for much easier development through React while still maintaining the advanced eCommerce toolkit provided by Shopify. The store is also connected to the Facebook conversion API. This allows the owner to setup better more targeted ad campaigns. This is one of the benefits of using a headless store as opposed to a standard Shopify store. It allows for easier and more robust customizations. The app itself is hosted on a simple AWS S3 bucket setup to act as a single page website.',
        href:'https://shakspopshop.ca/',
        builtWith:'HTML, CSS, TypeScript, React, Shopify, and AWS S3',
        gitLinks:[]
    },
    {
        id:'jadedsite',
        image:'images/jaded.PNG',
        title:'Jaded Portfolio Site',
        description:'This project was brought to me by a graphic designer who wanted to build a portfolio site that had more user interaction than other portfolio sites. This was an interesting challenge because most of my projects are more complicated from a data and data manipulation side. In my past projects the front ends were usually straightforward, and the complexity comes from handling user interactions and making sure user data is handled correctly. This project was the opposite of that. There is no backend portion to the app, but the graphic designer had developed a design and it was up to me to build out the site as close as possible to that design. The other big ask was to have the cards be draggable by users, because they wanted the user to feel like they had the ability to redesign the site how they like. Because of the complexity I decided to go with Angular to build the interface out. The reason I went with Angular is because I knew Angular had a good library for handling drag and drop and I knew Angular had a system for setting up animations with the Angular router. I built out each card as an easily reusable component. As well some cards can be clicked on and will take the user to a new route on the site. When clicked this starts a route transition and uses Angulars built in animation system to animate the transition between the routes. This was my first time working with Angular animations and was a bit of a learning curve but is an extremely powerful tool that allows you to execute animation that tie into Angulars lifecycle. I am really happy with how this turned out from the visual side and also from the code architecture side and I am excited to bite off more front end challenges!',
        href:'https://jaded-by.web.app/',
        builtWith:'HTML, CSS, TypeScript, and Angular',
        gitLinks:[
            {
                href:"https://github.com/michaeljoepeterson/jade-site",
                ariaLabel:'Github jaded app back end',
                text:'GitHub'
            }
        ]
    },
    {
        id:'yegguitarapp',
        image:'images/yeg-guitar.PNG',
        title:'Edmonton Guitar App',
        description:'In my free time I like to teach guitar and I built this app to help us track lessons at the guitar school I teach at. When I started all the lessons were tracked on paper. This made it difficult to keep track of everyone’s lessons and meant the lesson paperwork was prone to errors. I pitched the idea to them to build out an app to handle all of that and a few months later I built out the app to take care of all that paperwork and more! The app allows us teachers to create lessons and easily add students to that lesson. Once we create lessons, we can easily see a history of our lessons through the different historical views of the lessons. We can also easily see a summary of the lessons broken down based on the number of students in each lesson. This makes it much easier for us to create our invoices for our lessons and means the admins and teachers can easily verify the lessons are correct for the month. Besides the core flow there are different user roles within the app: Super Admin, Admin, and Teacher. Each role has their own permissions that determine what the user can see and do. The front end was built out with React/Redux. This app is a bit different than my other apps because when I was building it react hooks were just gaining popularity. This allowed me the unique opportunity to build out some pages with react hooks and compare the difference between the new way and old way of creating components. After doing that I will never go back to the old way of creating components, I love React hooks! The back end was built out with NodeJS/Express and MongoDB for the database. I also integrated my JWT auth system with the firebase auth system. The reason I did this is because it allows me to easily integrate with different auth methods without having to do it all myself. I use firebase to handle the initial auth request then my server creates its own token to handle requests to the server. Besides that, the server handles typical CRUD operations for all the different actions on the app. Hosting is handled by firebase for the front end and Heroku for the back end server.',
        href:'https://yeg-demo-guitar.web.app/',
        builtWith:'HTML, CSS, JavaScript, ReactJS, Redux, NodeJS, RxJS, Express, MongoDB, Firebase, and Heroku',
        gitLinks:[
            {
                href:"https://github.com/michaeljoepeterson/yeg-demo-guitar-service",
                ariaLabel:'Github edmonton guitar app back end',
                text:'GitHub Back End'
            },
            {
                href:"https://github.com/michaeljoepeterson/yeg-demo-app",
                ariaLabel:'Github edmonton guitar app front end',
                text:'GitHub Front End'
            }
        ]
    },
    {
        id:'ctoms',
        image:'images/ctoms.PNG',
        title:'CTOMS',
        description:'This project was my first major web project. When I started the site was not mobile responsive and had many bugs, including one that was limiting customers from placing orders. I fixed up the existing site\'s bugs and then went to work setting up a Shopify site to replace the old site. This process required learning the Shopify framework along with their templating language, Shopify liquid. This Shopify store was also a Shopify Plus store so that allowed us to setup custom checkout behaviour. This customized checkout experience was built with ruby. It was my first time working with ruby, but once I taught myself the basics, I was able to setup custom discounting and custom product availability based on each customer. The final piece of the integration was setting up the connection between the Shopify store and the backend Netsuite instance. In order to set this up I built a NodeJS server to handle orders from Shopify and create the orders on Netsuite as well it synched up inventories between the Shopify site and Netsuite. This also required building out various endpoints on Netsuite through their scripting language and API scripting language.',
        builtWith:'HTML, CSS, JavaScript, NodeJS, Express,Shopify, Ruby, and Netsuite',
        href:'https://ctoms.ca/',
        gitLinks:[]
    },
    
    {
        id:'canadiansi',
        image:'images/canadiansi.PNG',
        title:'Canadian Security Institute',
        description:'This is an ongoing project and is currently undergoing updates. This is a learning management system (LMS) and Shopify store combined platform. Shopify is used to build out the front-end eCommerce site and unlike my previous sites this site sells online courses. This required finding and selecting a proper LMS that would allow us to host those courses. We eventually landed on NorthPass to host all our online courses. Once that was selected I setup the integration between NorthPass and Shopify, so that courses can be purchased on Shopify and students can go to NorthPass to complete the course all in one seamless action. Besides the integration I also built out a chartJS/Shopify integration to allow users to display custom charts on the home page of the Shopify store and easily add or change data through the Shopify store admin. Lastly, I built out a web scrapper to pull in job data from indeed, this was built out with a NodeJS server and cheerio for scrapping the returned HTML from indeed. The job search sends a request to the NodeJS server which then makes a get request to indeed to grab the HTML data and display that within the Shopify store. ',
        href:'https://canadiansi.ca/',
        builtWith:'HTML, CSS, JavaScript, ChartJS, NodeJS, cheeriojs, NorthPass, and Shopify',
        gitLinks:[]
    },
    {
        id:'foodnearyou',
        image:'images/foodNearYou.PNG',
        title:'Food Near You',
        description:'This app allows the user to search for a type of food (burger, pizza, Italian, etc.) and see restaurants in their city that offer that type of food. The app uses the user’s location to determine their city and search for restaurants in that city. The restaurants are found through the Zomato API. These results are organized by Zomato score and the results are then displayed on Google Maps through the Google Maps API.',
        builtWith:'Built With:  HTML, CSS, JavaScript, Jquery, Google Maps API, and Zomato API',
        href:'https://michaeljoepeterson.github.io/FoodNearYou/',
        gitLinks:[
            {
                href:"https://github.com/michaeljoepeterson/FoodNearYou",
                ariaLabel:'Github food near you link'
            }
        ]
    },
    {
        id:'legendarytracker',
        image:'images/statPage.PNG',
        title:'Legendary Tracker',
        description:'This app was developed to help users track their Marvel Legendary board game scores. The user can enter in their results from the board game and those results will be saved to a online mongo database. The results will be available for the user in a table format, they will be organized based on one of two scoring methods depending on which one the user wants to organize them by. As well this app utilizes JavaScript web tokens(JWT) for authentication.',
        builtWith:'HTML, CSS, JavaScript, Jquery, Node.js, Express.js, passport.js, Marvel API and JWT authentication',
        href:'https://sheltered-shore-84644.herokuapp.com/',
        gitLinks:[
            {
                href:"https://github.com/michaeljoepeterson/LegendaryTracker",
                ariaLabel:'Github legendary tracker link'
            }
        ]
    },
    {
        id:'herobattle',
        image:'images/battlePage.PNG',
        title:'Hero Battle',
        description:'This app allows the users to create their own heroes with their own custom super powers and battle other user created heroes. The heroes can be anything the user wants them to be, an existing hero or just somebody they know. The app utilizes React and Redux for the front end and Node.js for the back end. The battles are determined through a set of rules I came up with and utilizes all the stats the user enters, as well as the super powers the users create. Then it runs one hundred battles on the server side and sends those results back to the client and those results are displayed after each battle. The battles are also recorded and used to update a leaderboard that takes all users and organizes them by number of wins.',
        builtWith:'HTML, CSS, JavaScript, Node.js, express.js, passport.js, React, Redux, Thunk, Redux Form, and JWT authentication',
        href:'https://gentle-castle-50143.herokuapp.com/',
        gitLinks:[
            {
                href:"https://github.com/michaeljoepeterson/ReactCapstoneBackEnd",
                ariaLabel:'Github hero battle link back end',
                text:'GitHub Back End'
            },
            {
                href:"https://github.com/michaeljoepeterson/HeroBattle",
                ariaLabel:'Github hero battle link front end',
                text:'GitHub Front End'
            }
        ]
    }
];