import React, {useState, useEffect} from 'react'

const ProgressDots = ({steps, currentStep, nextButton=null, previousButton=null}) => {

    const [dots, setDots] = useState(Array(steps))

    useEffect(() => {

        let dot = Array(steps);

        for(let i = 0; i < steps; i++){

            dot[i] = (<div key={i} className={i < currentStep ? 'UI-dot UI-checked' : 'UI-dot'}></div>)

        }

        setDots(dot)

    }, [currentStep, steps])

    return (
        <div className='UI-progress-dots'>
            {previousButton}
            {dots.map((item) => item)}
            {nextButton}
        </div>
    )

}

export default ProgressDots