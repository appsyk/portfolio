export function getDuration(startDate: Date, endDate: Date) {

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const lastDayOfMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
        days = lastDayOfMonth + days;
    }

    if (months < 0) {
        years--;
        months = 12 + months;
    }

    return { years, months, days };
}

const experience = getDuration(new Date('07/11/2019'), new Date())
const age = getDuration(new Date('10/19/1997'), new Date())

const data = {
    name: 'Sanjay Khatal',
    role: ['Software Developer', 'Frontend Developer', 'React Developer', 'UI Developer'],
    email: 'sanjoy.k1997@gmail.com',
    avatar: '/sanjay2.jpg',
    instaUrl: 'https://www.instagram.com/sanjaykhtal',
    githubUrl: 'https://github.com/appsyk',
    linkedinUrl: 'https://www.linkedin.com/in/sanjay-khatal-bb4454152/',
    resume: 'https://drive.google.com/file/d/1_XwI472XY9qmK5B4mx8Bj4iL3YohBbdZ/view',
    aboutme: {
        desc: `I am Sanjay Khatal, frontend developer with ${experience.years}+ years of experience in building responsive, crossplatform applications. Skilled in translating designs into scalable solutions and optimizing performance. Currently working in the healthcare domain, ensuring seamless UI/UX for critical applications. Gained on-site experience in Bhutan, delivering impactful projects with a focus on innovation and collaboration.`,
        age: age,
        experience: experience,
        address: 'Pune, Maharashtra',
        language: ['English', 'Hindi', 'Marathi']
    },
    quote: '',
    experience: [
        {
            role: 'Senior Software Developer',
            desc: 'Developing a healthcare domain product using ReactJS, RTK Query for optimized APIs, and Tailwind CSS, while collaborating in Agile teams for efficient delivery.',
            duration: 'May 2024 - Present',
            organization: 'SA Technologies',
            logo: '/sa-tech.png'
        },
        {
            role: 'Software Developer',
            desc: 'Built company websites with AstroJS and Strapi, delivering projects for Bhutan\'s Digital Identity and NFT Redemption, while contributing to CREDEBL with ReactJS and blockchain best practices.',
            duration: 'Dec 2021 - Apr 2024',
            organization: 'Ayanworks',
            logo: '/ayanworks.jpeg'
        },
        {
            role: 'Software Developer',
            desc: 'Worked under a scrum Agile with daily standups and sprint planning for efficient collaboration, project coordination, and optimized software delivery.',
            duration: 'Jan 2021 - Dec 2021',
            organization: 'FirstCry',
            logo: '/firstcry.png'
        },
        {
            role: 'Consultant - Web Developer',
            desc: 'Developed, tested, and implemented software while continuously enhancing soft skills and professional practices.',
            duration: 'Jul 2019 - Dec 2020',
            organization: 'Ixia Solutions LLP',
            logo: '/ixia.png'
        }
    ],
    education: [
        {
            institute: 'Datta Meghe College of Engineering, Airoli (Mumbai University)',
            degree: "Bachelor's of Engineering in Computer Science",
            desc: 'Completed a degree in Computer Engineering and actively participated in coding practices, including developing web applications and a final year project.',
            university: 'Mumbai University',
            duration: 'Jul 2015 - Apr 2019',
            location: 'Navi Mumbai'
        },
        {
            institute: 'YC Institute of Science',
            degree: 'HSC',
            desc: 'Completed Higher Secondary Education with a focus on the Science stream.',
            university: '',
            duration: 'Jun 2013 - Mar 2015',
            location: 'Satara'
        }
    ],
    onsiteExperience: [
        {
            role: 'Software Developer',
            desc: 'Maintained productive communication, with responsibilities including gathering requirements, offering solutions for project improvement, and providing progress updates to align with client expectations.',
            duration: 'Apr 2023 - Aug 2023',
            organization: 'DHI, Thimphu, Bhutan',
            logo: '/ndi.webp'
        }
    ],
    skills: [
        {
            name: 'ReactJS',
            level: 80
        },
        {
            name: 'JavaScript',
            level: 80
        },
        {
            name: 'TypeScript',
            level: 65
        },
        {
            name: 'HTML/CSS/SCSS',
            level: 80
        },
        {
            name: 'Redux/RTK',
            level: 60
        }
    ],
    projects: [
        {
            role: 'Front end Developer',
            desc: [
                'Contributed to the frontend development of Tendable, a healthcare domain product used in the UK and other countries.',
                'Implemented UI designs, collaborated with cross-functional teams for QA, product requirement gathering, and deployment.',
                'Worked closely with product owners, mobile developers to ensure consistency across web and mobile platforms.',
                'Created feature documentation and flowcharts to streamline development and improve clarity.',
                'Developed new features, handled bug fixes, and implemented change requests as per client requirements.'
            ],
            duration: 'May 2024 - Present',
            name: 'Tendable',
            poster: '/project/tendable.png'
        },
        {
            role: 'Full-stack Developer',
            desc: [
                'Contributed to an open-source project as a full-stack developer using ReactJS and NestJS.',
                'Engaged in peer code reviews and optimized code implementation for efficiency.',
                'Adhered to best Git practices, ensuring clean commits and pull request management.',
                'Implemented form validations on the frontend and working on API validations and errors handling on the backend.'
            ],
            duration: 'Sep 2023 - Apr 2024',
            name: 'CREDEBL 2.0',
            poster: '/project/credebl.png'
        },
        {
            role: 'Front end Developer',
            desc: [
                'NDI website core functionality implemented for seamless content updates and blog posts: Utilized AWS Amplify as a CMS platform, Enabled non-technical users to contribute',
                'Backend tasks focused on data normalization and establishing table relationships in the datastore',
                'Enhanced search engine optimization: Implemented NextJS as the frontend framework, Enabled dynamic SEO updates on all pages for the business team'
            ],
            duration: 'Apr 2023 - Sep 2023',
            name: 'National Digital Identity',
            poster: '/project/ndi.png'
        },
        {
            role: 'Front end Developer',
            desc: [
                'Full-stack role with JIRA for task understanding and optimized reusable components implementation',
                'Ensured responsive UI meeting client criteria and design',
                'Conducted weekly client calls and daily team calls for queries and task clarification',
                'Project included Angular web app, Ionic mobile app, and NestJS backend',
                'Implemented Docker-based parallel deployment and deployed 3 projects at the same time'
            ],
            duration: 'Aug 2022 - Jan 2023',
            name: 'NFT Benefit Redemption',
            poster: '/project/nft.jpg'
        }
    ],
    knowledge: [
        'Website hosting',
        'iOS and android apps',
        'Create logo design',
        'Design for print',
        'Modern and mobile-ready',
        'Advertising services include',
        'Graphics and animations',
        'Search engine marketing',
    ]
}

export default data;