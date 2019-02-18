const initialState = [
  {
    id: '1',
    title: 'john wick',
    rating: 5,
    image: 'https://i.ebayimg.com/images/g/9GEAAOSwpP9Y6rhe/s-l300.jpg',
  },
]

const movieList = (state = initialState, action) => {
  if (action.type === 'ADD') { return state.concat({ ...action.newMovie }) }
  if (action.type === 'UPDATE') {
    return state.map((m) => {
      if (m.id === action.id) {
        return action.movie;
      }
      return m
    })
  }
  if (action.type === 'DELETE') {
    return state.filter((m) => {
      if (m.id === action.id) {
        return false
      }
      return true
    })
  }
  if (action.type === 'FILTER') {
    if (action.newTitle === '') {
      return initialState
    }
    return initialState.filter(e => e.title.includes(action.newTitle))
  }
  return state
}

export default movieList
