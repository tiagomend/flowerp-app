/**
 * Copyright (c) Tiago Mendonça
 */

import './css/RecordsTable.css';

/**
 * Renders a table with a heading and rows for displaying records.
 *
 * @param {string[]} heading - An array of strings representing the table header labels.
 * @param {React.ReactNode} children - The content to be rendered within the table body, typically representing individual records.
 * @returns {JSX.Element} The RecordsTable component.
 */
const RecordsTable = ({ heading, children }) => {
  return (
    <section className='recordsTable'>
      <table>
        <thead>
          <tr>
            <th className='index'>#</th>
            {heading.map((value, index) => (
              <th key={index}>{value}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {children}
        </tbody>
      </table>
    </section>
  )
}

export default RecordsTable;