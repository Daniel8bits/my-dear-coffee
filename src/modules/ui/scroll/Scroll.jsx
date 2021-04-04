import React from 'react'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

const Scroll = ({autoHide=true, children}) => {

    return (
        <SimpleBar autoHide={autoHide}>
            {children}
        </SimpleBar>
    )
}

export default Scroll