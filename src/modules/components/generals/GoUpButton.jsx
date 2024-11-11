import React, {useState} from 'react';
import PropTypes from 'prop-types';

import { FloatingButton } from '../../ui/input/Button';

const GoUpButton = ({scrollRef}) => {

    const [animating, setAnimating] = useState(false)

    const goUp = () => {
        if(!animating) {
            setAnimating(true)
            let deltaTop = scrollRef.current.contentWrapperEl.scrollTop*0.03
            let scrollAnimation = setInterval(() => {
                scrollRef.current.contentWrapperEl.scrollTop -= deltaTop
                if(scrollRef.current.contentWrapperEl.scrollTop <= 0){
                    scrollRef.current.contentWrapperEl.scrollTop = 0;
                    setAnimating(false)
                    clearInterval(scrollAnimation)
                }
            }, 10)
        }
    }

    return (
        <FloatingButton 
            className='CP-go-up-button' 
            onClick={goUp}  
        >
            <img src="/assets/imgs/arrow.svg" alt="go up"  />
        </FloatingButton>
    );
};

GoUpButton.propTypes = {
    scrollRef: PropTypes.object.isRequired
};

export default GoUpButton;