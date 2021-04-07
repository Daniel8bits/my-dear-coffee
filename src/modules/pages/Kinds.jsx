import React from 'react';
import PropTypes from 'prop-types';

import ContentPanel from '../components/contentpanel/ContentPanel';

const Kinds = ({page}) => {
    return (
        <div className='PG-kinds'>
            <ContentPanel
                title={page.title}
                content={page.kinds}
                source={page.source}
            />
        </div>
    );
};

Kinds.propTypes = {
    page: PropTypes.object.isRequired
}

export default Kinds;