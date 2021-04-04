import React, {useState, useEffect, forwardRef} from 'react'

import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import Grid from '@material-ui/core/Grid';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

import Button from '../../ui/input/Button'

export const SearchTextField = forwardRef(({onSearch, ...remainder}, ref) => {
    return (
        <div className='UI-textfield UI-search' style={{display: 'flex', alignItems: 'center'}}>
            <SimpleTextField 
                ref={ref} 
                fragment
                className='UI-textfield-input'
                {...remainder} 
            />
            <Button onClick={onSearch}>
                <SearchIcon  />
            </Button>
        </div>
    )
})

export const DateTextField = forwardRef(({label, required=false, disableFuture=false, error=false, onClose=null, onBlur=null}, ref) => {

    const [date, setDate] = useState(null)

    let classes = 'UI-textfield UI-date'
    classes += error ? ' UI-error' : ''

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                className={classes}
                variant="inline"
                format="yyyy/MM/dd"
                margin="normal"
                label={label}
                value={date}
                disableFuture={disableFuture}
                onChange={d => {setDate(d)}}
                onBlur={onBlur}
                onClose={onClose}
                required={required}
                InputProps={{
                    inputRef: ref,
                    disabled: true
                }}
                PopoverProps={{
                    className: 'UI-datepicker-popover'
                }}
            />
        </MuiPickersUtilsProvider>
    )
})

export const PasswordTextField = forwardRef(({label, error=false, errorText='', required=false, onChange=null, onBlur=null, onClick=null}, ref) => {

    const [visibility, setVisibility] = useState(false)

    let classes = 'UI-textfield UI-password'
    classes += error ? ' UI-error' : ''

    return (
        <div className={classes} style={{display: 'flex', alignItems: 'center'}}>
            <TextField 
                inputRef={ref}
                className='UI-textfield-input'
                type={visibility ? 'text' : 'password'}
                label={label}
                required={required}
                onChange={onChange}
                onClick={onClick}
                onBlur={onBlur}
                helperText={errorText}
            />
            <IconButton
                onClick={() => setVisibility(!visibility)}
                onMouseDown={event => event.preventDefault()}
                style={{marginTop: '.5em'}}
                className='UI-textfield-password-visibility'
            >
                {visibility ? <Visibility /> : <VisibilityOff />}
            </IconButton>
        </div>
    )
})

export const SimpleTextField = forwardRef((
    {label, type='text', error=false, errorText='', disabled=false, className='',
    required=false, inputValue={}, InputLabelProps={}, 
    startIcon=null, endIcon=null, onChange=null, onBlur=null, onClick=null}, ref) => {

    let classes = 'UI-textfield UI-simple'+(error ? ' UI-error' : '')

    return (
        <TextField 
            inputRef={ref}
            className={classes+' '+className}
            label={label}
            type={type}
            disabled={disabled}
            required={required}
            onClick={onClick}
            onBlur={onBlur}
            onChange={onChange}
            helperText={errorText}
            InputLabelProps={{
                ...InputLabelProps
            }}
            InputProps={{
                startAdornment: startIcon && (
                    <InputAdornment position='start'>
                        {startIcon}
                    </InputAdornment>
                ),
                endAdornment: endIcon && (
                    <InputAdornment position='end'>
                        {endIcon}
                    </InputAdornment>
                )
            }}
            {...inputValue}
        />
    )
})

export default SimpleTextField