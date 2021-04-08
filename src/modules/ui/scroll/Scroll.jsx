import React, { forwardRef } from 'react'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

const Scroll = forwardRef(({autoHide=true, children}, ref) => {

    return (
        <SimpleBar ref={ref} autoHide={autoHide}>
            {children}
        </SimpleBar>
    )
})

export default Scroll