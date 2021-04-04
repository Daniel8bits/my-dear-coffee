import React, {useState, useEffect, useMemo, memo} from 'react'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import {Select as MaterialSelect} from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'

export const Select = memo(({label, items, className='', MenuProps={}, onChange=null}) => {

    const [value, setValue] = useState('')

    useEffect(() => {
        if(onChange)
            onChange(value)
    }, [value])

    const menuItems = useMemo(() => {
        return items.map((item, key) => {
            return (
                <MenuItem 
                    key={key} 
                    value={item.value !== undefined ? item.value : item.label}
                    onClick={() => setValue(item.value !== undefined ? item.value : item.label)}
                >
                    {item.label}
                </MenuItem>
            )
        })
    }, [items])

    return (
        <FormControl 
            className={'UI-select '+className}
        >
            <InputLabel>{label}</InputLabel>
            <MaterialSelect
                value={value}
                MenuProps={{
                    ...MenuProps,
                    className: MenuProps.className !== undefined ? 
                        'UI-select-menu '+MenuProps.className :
                        'UI-select-menu'
                }}
            >
            {menuItems}
            </MaterialSelect>
        </FormControl>
    )
})

export default Select