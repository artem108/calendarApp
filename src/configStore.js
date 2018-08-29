import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers.js'
import thunk from 'redux-thunk'

export default function configureStore() {
    const finalCreateStore = applyMiddleware(thunk)(createStore)

    const store = finalCreateStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    return store
}
