import React from 'react'

import {Checkbox as MaterialCheckbox} from '@material-ui/core'

const Checkbox = ({label, checked, className='', onChange=null}) => {
    return (
        <div className={'UI-checkbox '+className}>
            <MaterialCheckbox
                checked={checked}
                onChange={onChange}
            />
            <div className='UI-label'>
                {label}
            </div>
        </div>
    )
}

export default Checkbox