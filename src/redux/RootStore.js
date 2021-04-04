import { createStore, combineReducers } from 'redux'

import PageMenuReducer from './PageMenu/PageMenu'

const reducers = combineReducers({
    pageMenu: PageMenuReducer
})

const store = createStore(reducers)

export default store