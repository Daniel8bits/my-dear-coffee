import React from 'react';

import MaterialGrid from '@material-ui/core/Grid'

const Grid = ({className='', ...props}) => {
    return (
        <MaterialGrid className={'UI-grid '+className} {...props}  />
    );
};

export default Grid;