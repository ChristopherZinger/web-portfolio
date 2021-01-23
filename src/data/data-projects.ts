

export type ProjectType = {
    id: number,
    title: string,
    subtitle: string,
    description: string,
    gifSrc: string,
    technologies: string[],
    display: string,
    urlGit: string,
    url: string,
    isLoaded: boolean
}

export const projectData : ProjectType[] = [
    {
        id: 1,
        title: "Typing for fun",
        subtitle: "Simple webside for you to practice typing.",
        description: "This app allows users to practice typing without looking at the keyboard. Simply click 'start' and try to type the letter that is displayed in the circle, you have only a several second to do it! Every time you level-up new letter is unlocked and it becomes more difficult to pass without any mistake! \n This app takes advantage of javascript concepts and features like higher order functions and IFFE.",
        gifSrc: "projects/project_typingforfun.gif",
        technologies: ["Javascript", "HTML", "CSS"],
        display: "landscape",
        urlGit: "https://github.com/ChristopherZinger/Learn-Typing-Tool",
        url: "https://typingforfun.netlify.app/",
        isLoaded: false
    },
    {
        id: 2,
        title: "To-do app",
        subtitle: "Todo app with authentication.",
        description: "This is classic to-do app. Beside core functionality - adding lists and tasks this app allows users to register and login. This single page application's backed API is built with NODE and express. J's. Authorization and authentication use bcrypt and JWT. Authorization uses two tokens - refresh token passed as HTTP only cookie and access token stored in memory and passed as a header. Front-end build with REACT and bootstrap.",
        gifSrc: "projects/todo-app.gif",
        technologies: ["Javascript", "HTML", "CSS", "React", "Node.js"],
        display: "landscape",
        urlGit: "https://github.com/ChristopherZinger/to-do-app",
        url: "",
        isLoaded: false
    },
    {
        id: 3,
        title: "Quiz creator",
        subtitle: "Allows users to create and share quizzes.",
        description: "This app allows users to create quizzes. Each quiz can be published and accessed by other users. In order to find quiz user types a keyword in the searching engine, quizzes that contain queried keyword in the name are pulled out from the database. Backend is built with NODE and Express , while JQuery is used on the frontend to perform asynchronous calls to backend API.",
        gifSrc: "projects/quiz_creator_node.gif",
        technologies: ["Javascript", "HTML", "CSS", "Node.js"],
        display: "landscape",
        urlGit: "https://github.com/ChristopherZinger/NodeJS-Quiz-Game-Creator",
        url: "",
        isLoaded: false
    },
    {
        id: 4,
        title: "Recipe app",
        subtitle: "React based app that pulles data from recipe API.",
        description: "Recipe app is a single page application made with React.js that takes advantage of Tasty database and rapidapi.com to provide you with delicious ideas for your meal.",
        gifSrc: "",
        technologies: ["React", "Javascript", "HTML", "CSS"],
        display: "",
        urlGit: "https://github.com/ChristopherZinger/Receipe-App",
        url: "",
        isLoaded: false
    },
    {
        id: 5,
        title: "Portfolio website",
        subtitle: "My previous portfolio webpage.",
        description: "This is my previous portfolio website. It is a static website created exclusively with CSS, JS and HTML, no framework needed. I designed and coded custom motions and animations in order to create unique user experience. I used this project to practice multiple js concepts and features like promises, DOM manipulation, iiffe, and more. ",
        gifSrc: "projects/project_PortfolioPage.gif",
        technologies: ["Javascript", "HTML", "CSS"],
        display: "portrait",
        urlGit: "https://github.com/ChristopherZinger/PortfolioPage",
        url: "https://christopher-zinger.netlify.app/",
        isLoaded: false
    },
    {
        id: 6,
        title: "Spaceship Game",
        subtitle: "Classic aracde spaceinvaders like game.",
        description: "It is a variation of the iconic game Space Invaders. It takes advantage of OOP and concepts like lambda functions, list comprehension and data structures to create awesome game experience and animations!",
        gifSrc: "projects/project_spaceshipGame.gif",
        technologies: ["Python", "Pygame"],
        display: "portrait",
        urlGit: "https://github.com/ChristopherZinger/SpaceShipGame",
        url: "",
        isLoaded: false
    },
    {
        id: 7,
        title: "Performance Tool",
        subtitle: "Python based app that monitores users activity.",
        description: "This WIP is a tool  that runs in the background and monitors my keystrokes, mouse events and active software. Data is saved in SQLite database.",
        gifSrc: "",
        technologies: ["Python", "Pandas", "NumPy"],
        display: "",
        urlGit: "https://github.com/ChristopherZinger/performance_monitor",
        url: "",
        isLoaded: false,
    },
    {
        id: 8,
        title: "Dijkstra Algorithm",
        subtitle: "Viusualizer of Dijkstra shortest path algorithm.",
        description: "It is a app coded entirely with Python and PyGame. It visualize how Dijkstra shortest path algorithm works. It allows user to choose start and end point on 2 dimension array and draw walls that path has to pass around",
        gifSrc: "projects/project_Dijkstra_krotszy.gif",
        technologies: ["Python", "PyGame"],
        display: "portrait",
        urlGit: "https://github.com/ChristopherZinger/Dijkstra-Shortest-Path-Algorithm",
        url: "",
        isLoaded: false
    },
    {
        id: 9,
        title: "Architecture Quiz",
        subtitle: "Quiz game with questions about history of architecture.",
        description: "Quiz with questions about architecture. This webapp is built with django. asynchronous calls are executed with JQuery",
        gifSrc: "",
        technologies: ["Python", "Javascript", "HTML", "CSS"],
        display: "",
        urlGit: "https://github.com/ChristopherZinger/Quiz",
        url: "",
        isLoaded: false
    }
]
