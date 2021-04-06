import React from 'react';
import PropTypes from 'prop-types';

import TopMenu from '../menu/TopMenu'

import api from '../../../utils/api'

const Header = ({page}) => {
    return (
        <header>
            <TopMenu  />
            <div 
                className='CP-header' 
                style={{backgroundImage: `url(${api.pages[page].header.image})`}}
            >
                <div className="CP-caption">
                    <h1> {api.pages[page].header.caption} </h1>
                    <h3> {api.pages[page].header.subcaption} </h3>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    page: PropTypes.number.isRequired
};

export default Header;