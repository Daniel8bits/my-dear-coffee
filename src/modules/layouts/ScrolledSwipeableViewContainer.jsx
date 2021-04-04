import React from 'react'
import ScrolledViewContainer from './ScrolledViewContainer'

const ScrolledSwipeableViewContainer = ({views, current, height, className=''}) => {

    let currentView = current < 0 ? 0 : (current >= views.length ? views.length-1 : current)

    return (
        <ScrolledViewContainer className={'swipeable-view-container '+className} height={height}>
            {views[currentView]}
        </ScrolledViewContainer>
    )
}

export default ScrolledSwipeableViewContainer