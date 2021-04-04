import React, { useState } from 'react'

import useOnClickOutside from "react-cool-onclickoutside"

/**
 * A popup that closes when you click outside.
 * 
 * @param {
 *  open - flag to open the popover or not
 *  pivot - the coords are found in relation of a pivot
 *  handleClose - pass the close function
 * } props
 */
function Popover({open, pivot, handleClose, children}) {

    const [x, setX] = useState(undefined)
    const [y, setY] = useState(undefined)
    const [loaded, setLoaded] = useState(false)

    const getCoords = () =>  {

        let p = document.getElementById(pivot)

        setX(p.getBoundingClientRect().left)
        setY(p.getBoundingClientRect().bottom)
        setLoaded(true)

    }

    const ref = useOnClickOutside(() => {
        handleClose()
    })

    if(open && !loaded) getCoords()

    return (
        <div 
        className='popover' 
        style={{
            position: 'absolute', 
            top: loaded ? y : '0px', 
            left: loaded ? x : '0px', 
            display: open && loaded ? 'flex' : 'none'
        }}
        ref={ref}
        >
            {children}
        </div>
    )

}

export default Popover