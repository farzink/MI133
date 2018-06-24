import React from 'react'
import PropTypes from 'prop-types'
import './loader.css'



const Loader = ({ status }) => (
  <div className="overlay">
    <div style={{ display: (status ? 'block' : 'None') }} className="loader"></div>
  </div>
)

Loader.propTypes = {
  status: PropTypes.bool
}





export default Loader

