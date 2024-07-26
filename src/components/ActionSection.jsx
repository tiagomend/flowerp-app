import './css/ActionSection.css';


/**
 * Renders a section with an icon, heading, and a collection of action buttons.
 *
 * @param {string} icon - The icon class name to be applied to the section.
 * @param {string} heading - The heading text for the section.
 * @param {React.ReactNode} children - The action buttons to be rendered within the section.
 * @returns {JSX.Element} The ActionSection component.
 */
const ActionSection = ({ icon, heading, children }) => {
  return (
    <section className="actions">
      <div>
        <i className={`icon ${icon}`}></i>
        <h2>{heading}</h2>
      </div>
      <div>
        {children}
      </div>
    </section>
  )
}

export default ActionSection;