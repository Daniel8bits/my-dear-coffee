import React from 'react'

import MaterialRating from '@material-ui/lab/Rating'

const Rating = ({value, onChange=null, size='medium', readOnly=false}) => {

    const handleChange = (evt, value) => {
        if(onChange) onChange(value)
    }
    return (
        <MaterialRating 
            className='UI-rating'
            value={value} 
            onChange={handleChange} 
            readOnly={readOnly} 
            size={size}
        />
    )
}

export default Rating