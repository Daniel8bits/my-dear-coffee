import React from 'react'

const Separator = ({label='', className=''}) => {
    return (
        <div className={'UI-separator '+className}>
            <div className='UI-inner'>
                {label !== '' && (<div className='UI-label'>{label}</div>)}
            </div>
        </div>
    )
}

export default Separator