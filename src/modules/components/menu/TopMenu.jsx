import React, {useState} from 'react';

import Logo from '../generals/Logo'
import MenuItem, {MenuItemList} from './MenuItem'

import {useSelector, useDispatch} from 'react-redux'
import {PageMenuActions} from '../../../redux/PageMenu/PageMenu'

const TopMenu = () => {

    const dispatch = useDispatch()
    const page = useSelector(state => state.pageMenu.page)

    return (
        <div className='CP-topmenu'>
            <Logo  />
            <div className="CP-options">
                {
                    MenuItemList.map((value, index) => {
                        return (
                            <MenuItem 
                                key={index} 
                                icon={value.icon} 
                                to={value.viewId}
                                isActive={(page == index ? "active" : "")}
                                onClick={() => dispatch(PageMenuActions.setPage(index))}
                            >
                                {value.content}
                            </MenuItem>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TopMenu;