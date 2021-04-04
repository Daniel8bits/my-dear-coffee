import React from 'react'

import {getAgeRating} from '../../../utils/dictionary/Dictionary'

const AgeRatingTag = ({value, className=''}) => {
    return (
        <div className={'UI-age-rating '+className}>
            <img src={`/assets/images/age-rating/${value}.png`} alt={getAgeRating(value)}  />
        </div>
    )
}

export default AgeRatingTag