/**
 * Copyright (c) Tiago Mendonça
 */

import './css/Box.css'

/**
 * A container component that provides layout options for its children.

 * @param {string} [justify='space_between'] - The alignment of child elements within the container.
 * @param {React.ReactNode} children - The content to be rendered within the box.
 * @returns {JSX.Element} The Box component.
 */
const Box = ({ justify = 'space_between', children }) => {
  return (
    <div className={`box ${justify}`}>
      {children}
    </div>
  )
}

export default Box;