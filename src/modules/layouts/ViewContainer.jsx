import React from 'react'

import useStyle from '../hooks/useStyle'

const ViewContainer = ({height, className='', children}) => {

    const style = useStyle({
        viewContainer: {
            height: height,
            overflow: 'hidden'
        }
    })

    return <div className={className + ' ' + style.viewContainer}>{children}</div>
}

export default ViewContainer