import React from 'react'
import useStyle from '../hooks/useStyle'

import Scroll from '../ui/scroll/Scroll'
import ViewContainer from './ViewContainer'

const ScrolledViewContainer = ({height, scrollRef=null, className='', children}) => {

    const style = useStyle({
        scrolledViewContainer: {
            '& .simplebar-wrapper': {
                minHeight: height,
                maxHeight: height
            }
        }
    })

    return (
        <ViewContainer 
            className={className + ' ' + style.scrolledViewContainer} 
            height={height}
        >
            <Scroll ref={scrollRef}>
                {children}
            </Scroll>
        </ViewContainer>
    )
}

export default ScrolledViewContainer