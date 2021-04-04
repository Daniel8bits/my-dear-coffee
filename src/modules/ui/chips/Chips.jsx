import React from 'react'

import MaterialChip from '@material-ui/core/Chip'

export const ChipGroup = ({items, onDelete=null}) => {
    return (
        <div className="UI-chip-group">
            {items.map((value, key) => {
                const onDel = onDelete ? () => onDelete(value) : undefined
                return (
                        <Chip key={value.label} onDelete={onDel} {...value}  />
                )
            })}
        </div>
    )
}

export const Chip = ({className='', ...props}) => {
    const classes = 'UI-chip '+className
    return (
        <MaterialChip className={classes} {...props}  />
    )
}