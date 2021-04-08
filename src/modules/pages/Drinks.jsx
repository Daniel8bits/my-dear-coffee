import React from 'react';
import PropTypes from 'prop-types';
import ContentPanel from '../components/contentpanel/ContentPanel';

const Drinks = ({page}) => {
    return (
        <div className='PG-drinks'>
            <ContentPanel
                title={page.title}
                content={page.drinks}
                source={page.source}
                thead={page.thead}
                table
            />
        </div>
    );
};

Drinks.propTypes = {
    page: PropTypes.object.isRequired
};

export default Drinks;