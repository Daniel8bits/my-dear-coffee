import React from 'react'
import Logo from '../generals/Logo'

import MenuItem, {MenuItemList} from '../menu/MenuItem'

import {useSelector, useDispatch} from 'react-redux'
import {PageMenuActions} from '../../../redux/PageMenu/PageMenu'

import api from '../../../utils/api'

const Footer = () => {

    const dispatch = useDispatch()
    const page = useSelector(state => state.pageMenu.page)

    return (
        <footer>
            <div className='CP-footer'>
                <Logo  />
                <div className="CP-options">
                    {
                        MenuItemList.map((value, index) => {
                            return (
                                <MenuItem 
                                    key={index} 
                                    icon={value.icon} 
                                    to={value.viewId}
                                    isActive={(page === index ? "active" : "")}
                                    onClick={() => dispatch(PageMenuActions.setPage(index))}
                                >
                                    {value.content}
                                </MenuItem>
                            )
                        })
                    }
                </div>
            </div>
            <div className='CP-credits'>
                <span> {api.credits} </span>
            </div>
        </footer>
    )
}

export default Footer