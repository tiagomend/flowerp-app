/**
 * Copyright (c) Tiago Mendonça
 */

import './css/Input.css';

/**
 * A flexible input component that can render different input types.

 * @param {string} [as='input'] - The HTML element to render as the input. Defaults to 'input'.
 * @param {string} [type='text'] - The type attribute of the input element. Defaults to 'text'.
 * @param {...any} props - Additional props to be passed to the input element.
 * @returns {JSX.Element} The Input component.
 */
const Input = ({ as = 'input', type = 'text', ...props }) => {
  const Element = as;

  return (
    <Element type={type} className='form-control' {...props} />
  )
}

export default Input;