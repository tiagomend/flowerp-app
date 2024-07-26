/**
 * Copyright (c) Tiago Mendonça
 * 
 * Base component for all screens in the app.
 *
 * @param {React.ReactNode} children - The children to be rendered within the screen.
 * @returns {JSX.Element} The ScreenBase component.
 */

import './css/ScreenBase.css';

const ScreenBase = ({ children }) => {
  return (
    <div className="screenBase">{children}</div>
  )
}

export default ScreenBase;