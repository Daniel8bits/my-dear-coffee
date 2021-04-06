import React from 'react'
import {Switch, Route} from 'react-router-dom'

import {PagePathnames} from '../../utils/Dictionaries'

const ViewManager = ({items, className=''}) => {
    return (
        <div className={'view-manager '+className}>
            <Switch>
                {items.map((item, key) => {
                    return (
                        <Route exact={item.id === PagePathnames[0]} key={key} path={item.id}>
                            {item.item}
                        </Route>
                    )
                })}
            </Switch>
        </div>
    )
}

export default ViewManager