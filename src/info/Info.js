import anne_m_photo from "../img/anne_m_photo.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Anne Mary ",
    lastName: "Wynter",
    selfPortrait: anne_m_photo,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],

    miniBio: [
        { emoji: '🌎', text: 'US citizen' },
        { emoji: "💼", text: "Front-End Software Developer - UI/UX focused and React-driven" },
        { emoji: "📧", text: "annemarywynter@gmail.com" }
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

    bio: "Anne Mary Wynter. Passionate and solutions-driven FE software developer with a Web Development Certificate from Rutgers University. I bring a multidisciplinary background to front-end development. My recent role at Nextiva involved engineering and optimizing UI components for the NCX platform, contributing to user experience improvements and accessibility compliance.",

    skills: {
        proficientWith: [
            'JavaScript (ES6+)',
            'TypeScript',
            'React',
            'Next.js',
            'HTML',
            'CSS/SCSS',
            'Node.js',
            'Webpack',
            'Responsive Design',
            'Web Accessibility (WCAG)',
            'Git',
            'CI/CD',
            'Agile/Scrum',
            'Unit Testing (Jest)',
            'AI Prompt Engineering using Github CLI, Copilot, Gemini and Claude',
            'Figma',
            'Storybook',
            'REST APIs',
            'Jenkins',
            'SQL',
            'Jira',
            'Performance Testing',
            'UI Design',
            'Project Management',
            'WebSockets'
        ]
    },
}
