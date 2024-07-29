/**
 * Copyright (c) Tiago Mendonça
 */

import './css/IconButton.css';

/**
 * Renders a button with an icon and customizable styles.
 *
 * @param {string} icon - The icon class name to be applied to the button.
 * @param {string} [colorScheme] - The color scheme for the button. Defaults to 'secondary'.
 * @param {...any} props - Additional props to be passed to the button element.
 * @returns {JSX.Element} The IconButton component.
 */
const IconButton = ({ icon, colorScheme, ...props }) => {
  return (
    <button
      className={`iconButton ${(colorScheme) ? colorScheme : 'secondary'}`}
      {...props}
    >
      <i className={`icon ${icon}`}></i>
    </button>
  )
}

export default IconButton;