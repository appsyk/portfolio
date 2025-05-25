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
    instaUrl: '',
    githubUrl: '',
    linkedinUrl: '',
    aboutme: {
        desc: `I am Sanjay Khatal, frontend developer with ${experience.years}+ years of experience in building responsive, crossplatform applications. Skilled in translating designs into scalable solutions and
        optimizing performance. Currently working in the healthcare domain, ensuring
        seamless UI/UX for critical applications. Gained on-site experience in Bhutan,
        delivering impactful projects with a focus on innovation and collaboration.`,
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
            desc: 'Collaborate with creative and development teams on the executi',
            university: 'Mumbai University',
            duration: 'Jul 2015 - Apr 2019',
            location: 'Navi Mumbai'
        },
        {
            institute: 'YC Institute of Science',
            degree: 'HSC',
            desc: 'Collaborate with creative and development teams on the executi',
            university: '',
            duration: 'Jun 2013 - Mar 2015',
            location: 'Satara'
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