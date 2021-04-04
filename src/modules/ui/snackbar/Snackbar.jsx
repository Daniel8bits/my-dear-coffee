import React from 'react'

import MaterialSnackbar from '@material-ui/core/Snackbar'

const Snackbar = ({className='', ...props}) => {
    return (
        <MaterialSnackbar {...props} className={'UI-snackbar '+className}  />
    )
}

export default Snackbar