/**
 * Copyright (c) Tiago Mendonça
 * 
 * A container component for sidebar content.
 *
 * @param {React.ReactNode} children - The content to be rendered within the sidebar.
 * @returns {JSX.Element} The SideBar component.
 */
import './css/SideBar.css';

const SideBar = ({ children }) => {
  return (
    <div className="sideBar">
      {children}
    </div>
  )
}

export default SideBar;