/**
 * A container component for navigation elements.
 *
 * @param {React.ReactNode} children - The navigation elements to be rendered within the nav element.
 * @returns {JSX.Element} The Nav component.
 */
const Nav = ({ children }) => {
  return (
    <nav>{children}</nav>
  )
}

export default Nav;