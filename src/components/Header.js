import PropTypes from 'prop-types'
import Button from "./Button"

import React from 'react'

const Header = ({title}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='ADD' />
    </header>
  )
}
Header.defaultProps = {
  title:'Task Tracker',
}
Header.propTypes = {
  title:PropTypes.string.isRequired,
}
// CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: 'black'
// }

export default Header
