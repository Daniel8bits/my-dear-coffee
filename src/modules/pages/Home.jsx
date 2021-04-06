import React from 'react';
import PropTypes from 'prop-types';

import Section from '../components/section/Section'

const Home = ({page}) => {
    return (
        <div className='PG-home'>
            {page.sections.map((section, key) => {
                return (
                    <Section 
                        key={key}
                        image={section.image}
                        title={section.title}
                        description={section.description}  
                    />
                )
            })}
        </div>
    );
};

Home.propTypes = {
    page: PropTypes.object.isRequired
};

export default Home;