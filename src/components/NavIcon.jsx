/* Copyright (c) Tiago Mendonça */

import './css/NavIcon.css';

/**
 * Renders a navigation icon button.
 *
 * @param {string} icon - The icon name to be applied to the button.
 * @param {function} onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} The NavIcon component.
 */
const NavIcon = ({ icon, onClick }) => {
  return (
    <button className='navIcon' onClick={onClick}>
      <i className={`icon ${icon}`}></i>
    </button>
  )
}

export default NavIcon;