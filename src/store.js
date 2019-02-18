import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import searchReducer from 'reducers/search'
import movieList from './reducers/container'

const reducers = combineReducers({
  movieList,
  searchReducer,
})

const store = createStore(
  reducers,
  composeWithDevTools(),
)


export default store
