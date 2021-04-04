import React from 'react'

const Card = ({backgroundImage, header=null, body=null, footer=null, onClick=null, className=''}) => {
    return (
        <div 
            className={'UI-card '+className} 
            style={{backgroundImage: `url(${backgroundImage})`}}
            onClick={onClick}
        >
            <div className='UI-inner'>
                {header !== null && <div className="UI-header">
                    {header}
                </div>}
                {body !== null && <div className="UI-body">
                    {body}
                </div>}
                {footer !== null && <div className="UI-footer">
                    {footer}
                </div>}
            </div>
        </div>
    )
}

/*

<div className='title'>{data.title}</div>
{!volume && <div className='genre'>{getGenre(data.genres[0])}</div>}
<div className='ratings'>
    <Rating value={data.rating.average} size='small' readOnly />
    {!volume && <AgeRatingTag value={data.ageRating}  />}
</div>
 */

export default Card