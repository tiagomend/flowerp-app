/**
 * Copyright (c) Tiago Mendonça
 */

import './css/MainSide.css';

import Header from './Header';

/**
 * The main content section of the application, including
 * the header and main content area.
 *
 * @param {React.ReactNode} children - The main content to
 * be rendered within the section.
 * @returns {JSX.Element} The MainSide component.
 */
const MainSide = ({ children }) => {
  return (
    <section className='mainSide'>
      <Header />
      <main>{children}</main>
    </section>
  )
}

export default MainSide;