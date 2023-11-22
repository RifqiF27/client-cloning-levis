import thunk from 'redux-thunk'
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import productReducer from './reducers/productsReducer'
import categoryReducer from './reducers/categoryReducer'

const rootReducer = combineReducers({

    productReducer : productReducer,
    categoryReducer: categoryReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store