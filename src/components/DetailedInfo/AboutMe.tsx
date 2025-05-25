import SectionLabel from '@/app/common-components/SectionLabel'
import data from '@/data/data'
import React from 'react'

const AboutMe = () => {
    const about = [
        {
            label: 'Age',
            value: `${data.aboutme.age.years}`
        },
        {
            label: 'Industry Experience',
            value: `${data.aboutme.experience.years} years and ${data.aboutme.experience.months} months`
        },
        {
            label: 'Email',
            value: data.email
        },
        {
            label: 'Address',
            value: data.aboutme.address
        },
        {
            label: 'Languages',
            value: data.aboutme.language.join(', ')
        },
        {
            label: 'Skills',
            value: [
                {
                    icon: <i className="devicon-react-original colored h-6 w-6"></i>,
                    name: 'ReactJS'
                },
                {
                    icon: <i className="devicon-javascript-plain colored h-6 w-6"></i>,
                    name: 'JavaScript'
                },
                {
                    icon: <i className="devicon-typescript-plain colored h-6 w-6"></i>,
                    name: 'TypeScript'
                },
                {
                    icon: <i className="devicon-redux-original colored h-6 w-6"></i>,
                    name: 'Redux'
                },
                {
                    icon: <i className="devicon-html5-plain colored h-6 w-6"></i>,
                    name: 'HTML'
                },
                {
                    icon: <i className="devicon-css3-plain colored h-6 w-6"></i>,
                    name: 'CSS'
                },
                {
                    icon: <i className="devicon-tailwindcss-original colored h-6 w-6"></i>,
                    name: 'Taliwind CSS'
                },
                {
                    icon: <i className="devicon-nextjs-plain colored h-6 w-6"></i>,
                    name: 'NextJS'
                }
            ]
        }
    ]
    return (
        <div className='page-change-animation'>
            <div className='divide-y'>
                <SectionLabel label="About Me" />
                <div className=''>
                    <div className='my-4'>
                        {data.aboutme.desc}
                    </div>
                    <div className=''>
                        {
                            about.map(_ => (
                                <div key={_.label} className='flex gap-4 justify-between mb-2 last:mb-0'>
                                    <div className='bg-primary h-fit py-1 text-white text-sm px-2 rounded-sm leading-none flex items-center'>
                                        {_.label}:
                                    </div>
                                    <div className='text-base'>
                                        {!Array.isArray(_.value) ? _.value :
                                            <div className='flex flex-wrap gap-2'>
                                                {
                                                    _.value.map(skill => <div key={skill.name} className='h-[33px] relative text-xl group py-1 px-1.5 bg-gradient-to-br from-blue-200 rounded-lg to-transparent'>
                                                        {skill?.icon && skill?.icon}
                                                        {skill.name && <div className='absolute group-hover:opacity-100 opacity-0 text-sm transition-all duration-700 bg-secondary text-white p-2 rounded-sm whitespace-nowrap'>{skill.name}</div>}
                                                    </div>)
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {data.quote &&
                <div className='divide-y mt-8'>
                    <SectionLabel label="Quote" />
                    <div className='divide-x'>
                        <div className='pr-4 pt-4'>
                            {data.quote}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default AboutMe
