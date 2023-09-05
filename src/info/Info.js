import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"




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
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "", //this should be a link to the live version of project
            source: "", // this should be a link to the **repository** of the project
            image: mock1
        },
        {
            title: "Project 2",
            live: "",
            source: "",
            image: mock2
        },
        {
            title: "Project 3",
            live: "",
            source: "",
            image: mock3
        }
       
    ]
}