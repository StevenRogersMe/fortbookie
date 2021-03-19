import React from 'react';
// UI
import Spinner from 'components/spinner';
import ErrorIndicator from 'components/error-indicator';
// Styles
import './index.sass';

const Table = ({ content, loading, data, error, retry }) => {
  const colSpan = content.length;

  return (
    <div className="table">
      <table className="table__table">
        <thead className="table__head">
          <tr>
            {content.map(({ title }, idx) => (
              <th key={idx}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table__body">
          {error &&
            <tr>
              <th colSpan={colSpan}>
                <ErrorIndicator retry={retry} />
              </th>
            </tr>
          }
          {loading &&
            <tr>
              <th colSpan={colSpan}>
                <Spinner boxed light />
              </th>
            </tr>
          }
          {data && data.map((item, idx) => (
            <tr key={idx}>
              {content.map(({ render }, tdIdx) => (
                <td key={tdIdx}>{render(item)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
