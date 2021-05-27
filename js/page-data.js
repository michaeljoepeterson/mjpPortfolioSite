let pageData = [
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