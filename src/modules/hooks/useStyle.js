import {useMemo} from 'react'
import {makeStyles} from '@material-ui/styles'

const useStyle = (style) => {
    const madeStyle = useMemo(() => makeStyles(style), [style])
    return madeStyle();
}

export default useStyle