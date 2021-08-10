export const ProjectData = [
    {
        id: 1,
        title:"Recallama",
        about:"Recallama is my capstone project for Hackbright Academy's Software Engineering Fellowship. I created the back end using Python/Flask and simultaneously learned and implemented the front end in React. Using the openFDA API, Recallama allows you to search for FDA drug and food recalls. Users may save recalls to their profile and share recalls via email.",
        tags: ["Python", "Flask", "PostgreSQL", "React", "React Router", "CSS", "Bootstrap"],
        demo: "https://www.youtube.com/watch?v=_tk0AGjsjgM",
        github: "https://github.com/kristalkung/kristalkung-recallama",
        website: "http://www.recallama.com",
        image: require('../../../src/static/img/recallama.png').default
    },
    {
        id: 2,
        title:"Personal Portfolio",
        about:"You're here! This is my second project in React and my first project using npm and NodeJS. For this project, I focused on styling and making the site compatible with viewing from different web devices.",
        tags: ["Javascript", "React", "HTML", "CSS"],
        demo: null,
        github: "https://github.com/kristalkung/kristalkung-website",
        image: require('../../../src/static/img/website.png').default
    },
    {
        id: 3,
        title:"Movie Ratings App",
        about:"A Flask application that allows users to view information on movies, login, and add personal ratings to a movie. This is my first project utilizing a Python/Flask back end and creating a data model where there is a one to many relationship between users and movie ratings.",
        tags: ["Python", "Flask", "PostgreSQL"],
        demo: null,
        github: "https://github.com/kristalkung/movie-ratings-app",
        image: require('../../../src/static/img/movie-ratings.png').default
    },
    
]