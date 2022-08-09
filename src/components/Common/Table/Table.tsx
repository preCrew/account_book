import React from 'react';
import { TTableData } from '.';

interface TableProps {
  headers: string[];
  rows: TTableData[];
}

const Table = ({ headers, rows }: TableProps) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={`T_${header}`}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ columns, id }) => (
            <tr key={id}>
              {columns.map(({ key, render }) => (
                <td key={key}>{render}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
