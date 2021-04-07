import React from 'react';
import PropTypes from 'prop-types'

import ContentPanel from '../components/contentpanel/ContentPanel';

const Benefits = ({page}) => {
    return (
        <div className='PG-benefits'>
            <ContentPanel
                title={page.title}
                content={page.benefits}
                source={page.source}
            />
        </div>
    );
};

Benefits.propTypes = {
    page: PropTypes.object.isRequired
}

export default Benefits;