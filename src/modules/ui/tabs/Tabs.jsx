import React, {forwardRef} from 'react'

import MaterialTabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const Tabs = forwardRef(({currentTab, tabs, centered=false, className='', onChange}, ref) => {
    return (
        <MaterialTabs
            ref={ref}
            className={'UI-tabs '+className}
            value={currentTab}
            centered={centered}
            onChange={(evt, idTab) => onChange(idTab)}
        >
            {tabs.map((tab, key) => {
                return <Tab key={key} label={tab}  />
            })}
        </MaterialTabs>
    )
})

export default Tabs