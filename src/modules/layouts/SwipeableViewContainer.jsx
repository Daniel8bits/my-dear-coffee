import React from 'react'
import ViewContainer from './ViewContainer'

const SwipeableViewContainer = ({views, current, height, className=''}) => {

    let currentView = current < 0 ? 0 : (current >= views.length ? views.length-1 : current)

    return (
        <ViewContainer className={'swipeable-view-container '+className} height={height}>
            {views[currentView]}
        </ViewContainer>
    )
}

/*

import React, {useState, useEffect, useRef} from 'react'
import useStyle from '../hooks/useStyle'

TODO: implementar a animação da transição de páginas

const [animating, setAnimating] = useState(false)
const [current, setCurrent] = useState(startFrom)

// 0 -> left, 1 -> center, 2 -> right
let refs = [useRef(), useRef(), useRef()]

const apply = (callback) => {
    for(let i = 0; i < refs.length; i++)
        callback(refs[i].current, i)
}

const updateSwiper = () => {
    let n = -1
    apply((elem, i) => {
        elem.innerHTML = views[current + n++]
    })
}

const style = useStyle({
    leftSlider: {
        left: '-'+width,
        '&.prev-active': {
            left: 0
        }
    },
    centerSlider: {
        left: '-'+width,
        '&.next-active': {
            left: 'calc( -'+width+' * 2)'
        },
        '&.prev-active': {
            left: 0
        }
    },
    rightSlider: {
        left: '-'+width,
        '&.next-active': {
            left: 'calc( -'+width+' * 2)'
        }
    },
})

useEffect(() => {

    if(go == 1 && !animating) {

        setAnimating(true)

        apply((elem, i) => elem.classList.add('prepare'))
        refs[1].current.classList.add(style.centerSlider['&.next-active'])
        refs[2].current.classList.add(style.rightSlider['&.next-active'])

        setTimeout(() => {

            apply((elem, i) => elem.classList.remove('prepare'))
            refs[1].current.classList.remove(style.centerSlider['&.next-active'])
            refs[2].current.classList.remove(style.rightSlider['&.next-active'])
            setCurrent(current+1)
            updateSwiper()

            setAnimating(false)

        }, 1050)

    }

    if(go == -1 && !animating) {

    }

    onAnimationStart()

}, [go, animating, onAnimationStart, current])

<div className='wrapper'>
    <div ref={refs[0]} className={style.leftSlider}>
        {current > 0 && views[current-1]}
    </div>
    <div ref={refs[1]} className={style.centerSlider}>
        {views[current]}
    </div>
    <div ref={refs[2]} className={style.rightSlider}>
        {views[current+1]}
    </div>
</div>

*/
export default SwipeableViewContainer