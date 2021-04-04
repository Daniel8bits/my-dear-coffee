import React, {useMemo} from 'react'

import Rating from './Rating'

import useStyle from '../../hooks/useStyle'

const RatingDetails = ({data, className=''}) => {

    const ratingTitle = [
        "awesome",
        "excellent",
        "good",
        "bad",
        "terrible"
    ]

    let totalRatingAmount = useMemo(() => {
        let t = 0
        data.rating.each.forEach((value) => {t += value})
        return t
    }, [data])

    const getWidth = i => ((20*data.rating.each[i])/totalRatingAmount)+'em'

    const classes =  useStyle({
        rate: {
            "&.UI-awesome::before": {
                width: getWidth(0)
            },
            "&.UI-excellent::before": {
                width: getWidth(1)
            },
            "&.UI-good::before": {
                width: getWidth(2)
            },
            "&.UI-bad::before": {
                width: getWidth(3)
            },
            "&.UI-terrible::before": {
                width: getWidth(4)
            }
        }
    });

    return (
        <div className={"UI-rating-details "+className}>
            <div className="UI-average">
                <div className="UI-number">
                    {data.rating.average}
                </div>
                <Rating value={data.rating.average} size='large' readOnly  />
            </div>
            <div className="UI-each">
                <ul>
                    {data.rating.each.map((value, key) => {
                        return (
                            <li key={key}>
                                <div className={classes.rate+' UI-rate UI-'+ratingTitle[key]}>
                                    {5-key}
                                </div>
                                {value}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="UI-rate-amount">
                <h3> Total de votos </h3>
                {totalRatingAmount}
            </div>
        </div>
    )
}

export default RatingDetails