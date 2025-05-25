import SectionLabel from '@/common-components/SectionLabel'
import data from '@/data/data'
import React, { useState } from 'react'

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

    const [isCopied, setIsCopied] = useState(false);

    const copyText = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div id="about-me" className='page-change-animation'>
            <div className='divide-y'>
                <SectionLabel label="About Me" />
                <div className=''>
                    <div className='my-4'>
                        Hey, there &#128075; {data.aboutme.desc}
                    </div>
                    <div className=''>
                        {
                            about.map(_ => (
                                <div key={_.label} className='flex gap-4 justify-between mb-2 last:mb-0'>
                                    <div className='bg-primary h-fit py-1 text-white text-sm px-2 rounded-sm leading-none flex items-center w-min sm:w-fit'>
                                        {_.label}:
                                    </div>
                                    <div className='text-base flex gap-2 items-center text-end'>
                                        {!Array.isArray(_.value) ? _.value :
                                            <div className='flex flex-wrap gap-2 justify-end'>
                                                {
                                                    _.value.map(skill => <div key={skill.name} className='h-[33px] relative text-xl group py-1 px-1.5 bg-gradient-to-br from-blue-200 rounded-lg to-transparent'>
                                                        {skill?.icon && skill?.icon}
                                                        {skill.name && <div className='absolute group-hover:opacity-100 opacity-0 text-sm transition-all duration-700 bg-secondary text-white p-2 rounded-sm whitespace-nowrap'>{skill.name}</div>}
                                                    </div>)
                                                }
                                            </div>
                                        }
                                        {
                                            _.label.toLocaleLowerCase() === 'email' &&
                                            <>
                                                {
                                                    isCopied ?
                                                        <svg className='w-4 h-4 shrink-0 bg-green-500 rounded-full text-white' focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"></path>
                                                        </svg>
                                                        :
                                                        <svg className='w-4 h-4 cursor-pointer text-gray-500 shrink-0' focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                            onClick={() => copyText(typeof _?.value === 'string' ? _.value : '')}>
                                                            <path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"></path>
                                                        </svg>
                                                }
                                            </>
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
