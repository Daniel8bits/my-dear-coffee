import React from 'react'
import { 
    List as MaterialList,
    ListItem as MaterialListItem, 
    ListItemIcon as MaterialListItemIcon, 
    ListItemText as MaterialListItemText, 
    ListItemSecondaryAction as MaterialListItemSecondaryAction
} from '@material-ui/core'

export const ListItem = (props) => {
    const classes = props.className !== undefined ? 
        'UI-list-item '+props.className :
        'UI-list-item'
    return (
        <MaterialListItem {...props} className={classes} />
    )
}

export const ListItemIcon = (props) => {
    const classes = props.className !== undefined ? 
        'UI-list-item-icon '+props.className :
        'UI-list-item-icon'
    return (
        <MaterialListItemIcon {...props} className={classes} />
    )
}

export const ListItemText = (props) => {
    const classes = props.className !== undefined ? 
        'UI-list-item-text '+props.className :
        'UI-list-item-text'
    return (
        <MaterialListItemText {...props} className={classes} />
    )
}

export const ListItemSecondaryAction = (props) => {
    const classes = props.className !== undefined ? 
        'UI-list-item-secondary-action '+props.className :
        'UI-list-item-secondary-action'
    return (
        <MaterialListItemSecondaryAction {...props} className={classes} />
    )
}

const List = ({items, className='', children}) => {
    return (
        <MaterialList className={'UI-list '+className}>
            {children.position === 'top' && children.content}
            {children !== undefined && children.position === undefined && children /*default case*/}
            {items.map((item, key) => {

                let {
                    text,
                    icon,
                    second,
                    props,
                    textProps,
                    iconProps,
                    secondProps
                } = item

                return (
                    <ListItem key={key} {...props}>
                        {icon !== undefined && (
                            <ListItemIcon {...iconProps}>
                                {icon}
                            </ListItemIcon>
                        )}
                        <ListItemText primary={text} {...textProps} />
                        {second !== undefined && (
                            <ListItemSecondaryAction {...secondProps}>
                                {second}
                            </ListItemSecondaryAction>
                        )}
                    </ListItem>
                )
            })}
            {children.position === 'bottom' && children.content}
        </MaterialList>
    )
}

export default List