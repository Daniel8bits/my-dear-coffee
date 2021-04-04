import React from 'react'
import PropTypes from 'prop-types'

import HomeIcon from '@material-ui/icons/Home'
import SportsRugbyIcon from '@material-ui/icons/SportsRugby';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {Link} from 'react-router-dom'

export const MenuItemList = [
    {icon: <HomeIcon  />,        content: "Home",       viewId: "/"},
    {icon: <SportsRugbyIcon  />, content: "Kinds",      viewId: "/kinds"},
    {icon: <FavoriteIcon  />,       content: "Benefits",   viewId: "/benefits"},
    {icon: <LocalCafeIcon  />,        content: "Drinks",     viewId: "/drinks"}
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