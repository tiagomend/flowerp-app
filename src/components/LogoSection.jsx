/**
 * Copyright (c) Tiago Mendonça
 */

import './css/LogoSection.css';
import logo from '../assets/logo.png';


/**
 * Renders the logo section of the SideBar.
 *
 * @returns {JSX.Element} The LogoSection component.
 */
const LogoSection = () => {
  return (
    <section className="logoSection">
      <img src={logo} alt="System Flowerp" />
    </section>
  )
}

export default LogoSection;