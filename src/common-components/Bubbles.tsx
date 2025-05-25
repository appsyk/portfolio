import React from 'react'

const Bubbles = () => {
    const bubble = [...Array(25).keys()].map(() => {
        const widthCheck = Math.round(Math.random()*1000); 
        const durCheck = Math.round(Math.random()*100 / 2)       
        const width = widthCheck > 200 ? Math.round(Math.random()*100) : widthCheck.toFixed(0)
        const left = Math.round(Math.random()*100)
        const delay = Math.round(Math.random()*100 / 7)
        const duration = durCheck < 10 ? 25 : durCheck
        return {
            width,
            left,
            delay,
            duration
        }
    })    
    
    return (
        <ul className="bg-boxes">
            {
                bubble.map((_, index) => (
                    <li key={index} style={{width: `${_.width}px`, height: `${_.width}px`, animationDelay: `${_.delay}s`, left: `${_.left}%`, animationDuration: `${_.duration}s`}}></li>
                ))
                }
        </ul>
    )
}

export default Bubbles
