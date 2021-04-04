import React, {useState, useRef} from 'react'

import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'

/**
 * Grupo de botões de rádio
 * 
 * @param {
 *  label - Título do grupo de botões de rádio,
 *  name - propriedade HTML de agrupamento dos botões de rádio,
 *  options - botões: deve conter value e label,
 *  defaultValue - valor padrão que deve ser um índice de options,
 *  onChange - evento a ser executado quando houver alguma mudança no estado dos botões
 * } props 
 */
export const RadioButtonGroup = ({label, name, options, defaultValue, className='', onChange}) => {

    const [currentValue, setCurrentValue] = useState(defaultValue)

    const refs = Array(options.length)
    refs.fill(useRef())

    return (
        <FormControl className={'UI-radio-group '+className} component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup 
                aria-label="gender" 
                defaultValue={options[defaultValue].value !== undefined 
                                ? options[defaultValue].value
                                : options[defaultValue].label } 
                name={name} 
                onChange={() => onChange(refs[currentValue].current.value)}
            >
                {
                    options.map((item, key) => {
                        return (
                            <FormControlLabel 
                                key={key}
                                inputRef={refs[key]}
                                value={item.value !== undefined ? item.value : item.label}
                                control={<Radio />} 
                                label={item.label}
                                onClick={() => setCurrentValue(key)}
                            />
                        )
                    })
                }
            </RadioGroup>
        </FormControl>
    )
}

export const RadioButton = ({name, value, currentValue, onChange}) => {
    return (
        <Radio 
            name={name}
            checked={currentValue === value}
            value={value}
            onChange={onChange}
        />
    )
}

export default RadioButton