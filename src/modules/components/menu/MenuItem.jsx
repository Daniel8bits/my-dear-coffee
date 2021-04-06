import React from 'react'
import PropTypes from 'prop-types'

import HomeIcon from '@material-ui/icons/Home'
import SportsRugbyIcon from '@material-ui/icons/SportsRugby';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {Link} from 'react-router-dom'

import api from '../../../utils/api'

export const MenuItemList = [
    {icon: <HomeIcon  />,        content: api.pages[0].name, viewId: api.pages[0].pathname},
    {icon: <SportsRugbyIcon  />, content: api.pages[1].name, viewId: api.pages[1].pathname},
    {icon: <FavoriteIcon  />,    content: api.pages[2].name, viewId: api.pages[2].pathname},
    {icon: <LocalCafeIcon  />,   content: api.pages[3].name, viewId: api.pages[3].pathname}
]

const MenuItem = ({icon, to, isActive, onClick, children}) => {
    return (
        <Link className={"CP-menu-item "+isActive} to={to}>
            <div onClick={onClick}>
                {icon}
                <span>{children}</span>
            </div>
        </Link>
    )
}

MenuItem.propTypes = {
    icon: PropTypes.node,
    to: PropTypes.string.isRequired,
    isActive: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string
}

export default MenuItem