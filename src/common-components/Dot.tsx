interface DotProps {
    duration: string;
    index: number;
    firstActive?: boolean;
    showDot?: boolean;
}

const Dot = ({ duration, index, firstActive, showDot = true }: DotProps) => {    
    return (<div className='relative'>
        <div className={`border rounded-md px-2 mb-2 text-xs w-fit ${firstActive && index === 0 ? 'border-primary text-primary' : 'border-border-grey text-border-grey'}`}>
            {duration}
        </div>
        { showDot && <div className={` w-3 h-3 rounded-full absolute top-1 -left-[2.4rem] z-10 ${firstActive && index === 0 ? 'dot active' : 'dot'}`}></div>}
    </div>)
}

export default Dot;