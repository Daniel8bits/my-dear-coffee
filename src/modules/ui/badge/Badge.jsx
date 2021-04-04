import React from 'react'

import MaterialBadge from '@material-ui/core/Badge'

const Badge = ({className='', ...props}) => {
    return (
        <MaterialBadge className={'UI-badge '+className} {...props}  />
    )
}

export default Badge