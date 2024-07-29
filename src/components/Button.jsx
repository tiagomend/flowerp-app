/**
 * Copyright (c) Tiago Mendonça
 */

import './css/Button.css';

/**
 * Renders a customizable button with various styling options.
 *
 * @param {string} [colorScheme='primary'] - The color scheme for the button. Defaults to 'primary'.
 * @param {string} label - The text content of the button.
 * @param {string} [mt] - Margin top value in pixels.
 * @param {string} [mb] - Margin bottom value in pixels.
 * @param {string} [ml] - Margin left value in pixels.
 * @param {string} [mr] - Margin right value in pixels.
 * @param {...any} props - Additional props to be passed to the button element.
 * @returns {JSX.Element} The Button component.
 */
const Button = ({ colorScheme = 'primary', label, mt, mb, ml, mr, ...props }) => {
  const styles = {
    marginTop: mt || '0px',
    marginBottom: mb || '0px',
    marginLeft: ml || '0px',
    marginRight: mr || '0px',
  };

  return (
    <button
      style={styles}
      className={`button ${colorScheme}`}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button;