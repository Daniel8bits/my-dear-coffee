import React from 'react';
import PropTypes from 'prop-types';

const Section = ({image, title, description}) => {
    return (
        <section>
            <div className='CP-section'>
                <div className="CP-image" style={{backgroundImage: `url(${image})`}}></div>
                <div className='CP-description'>
                    <h2> {title} </h2>
                    <span>
                        {description}
                    </span>
                </div>
            </div>
        </section>
    );
};

Section.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Section;