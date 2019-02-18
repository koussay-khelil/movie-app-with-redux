import React from 'react'
import Stars from 'movie/stars'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import './Card.scss'

const Card = ({
  movie = {},
  updateMovie,
  deleteMovie,
}) => (
  <div className="card" onDoubleClick={() => updateMovie(movie)}>

    <div
      className="header"
      style={{
        backgroundImage: `url(${movie.image})`,
      }}
    >
      <div className="delete" onClick={() => deleteMovie(movie.id)}>X</div>
      <div className="rate"> <Stars factor={movie.rating} /></div>

      <div className="title">{movie.title}</div>
    </div>
  </div>
)

// Card.propTypes = {
// }
const mapDispatchToProps = dispatch => ({
  deleteMovie: (id) => {
    dispatch({
      type: 'DELETE',
      id,
    })
  },
  updateMovie: (movie) => {
    dispatch({
      type: 'UPDATE',
      id: movie.id,
      movie: {
        title: prompt('Title', movie.title),
        image: prompt('Image', movie.image),
        rating: prompt('Rating', movie.rating),
      },
    })
  },
})
export default connect(null, mapDispatchToProps)(Card)
