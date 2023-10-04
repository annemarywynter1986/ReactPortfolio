import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"




export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Anne Mary ",
    lastName: "Wynter",
    initials: "AM", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [ 
       
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "Quality Assurance Automation Engineer at Nextiva"
        },
        {
            emoji: "📧",
            text: "annemarywynter@gmail.com"
        }
    ],
    socials: [
        
        {
            link: "https://github.com/annemarywynter1986",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/anne-mary-wynter-958852229/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
    

    ],
    bio: "Anne Mary Wynter . Passionate and solutions-driven full stack web developer with a web development certificate from Rutgers University Coding Bootcamp with a solid foundation in Quality Assurance and AutomationTesting. Ability to work in a fast-paced and diverse team environment developing solutions and exceeding expectations.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'html', 'css3'],
            exposedTo: ['nodejs', 'JavaScript']
        }
    ,
    hobbies: [
        {
            label: 'dancing',
            emoji: '💃'
        },
        {
            label: 'aeiral',
            emoji: '🎪'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'travel',
            emoji: '🧳'
        }

    ],
    portfolio: [ 
        {
            title: "Project 1",
            live: "https://rmits.github.io/scrummy-food-recipe-app/", //this should be a link to the live version of project
            source: "https://github.com/rmits/scrummy-food-recipe-app", // this should be a link to the **repository** of the project
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://project-two-20323fc10aa2.herokuapp.com/",
            source: "https://github.com/Allicris/project-two",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://annemarywynter1986.github.io/codeQuiz/game.html",
            source: "https://github.com/annemarywynter1986/codeQuiz.git",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://annemarywynter1986.github.io/WeatherDashboard/",
            source: "https://github.com/annemarywynter1986/WeatherDashboard.git",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://annemarywynter1986.github.io/WorkDayScheduler/",
            source: "https://github.com/annemarywynter1986/WorkDayScheduler.git",
            image: mock5
        },
        {
            title: "Project 6",
            live: "https://annemarywynter1986.github.io/",
            source: "https://github.com/Allicris/nail-booking-site.git",
            image: mock6
        }
       
    ]
}