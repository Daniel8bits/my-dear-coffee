import React from 'react'
import {Switch, Route} from 'react-router-dom'

const ViewManager = ({items, className=''}) => {
    return (
        <div className={'view-manager '+className}>
            <Switch>
                {items.map((item, key) => {
                    return (
                        <Route exact={item.id === ''} key={key} path={'/'+item.id}>
                            {item.item}
                        </Route>
                    )
                })}
            </Switch>
        </div>
    )
}

export default ViewManager