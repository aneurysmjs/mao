
import React from 'react';

import './Table.scss';

const Table = ({ children, isFull }) => (
  <div className={`table ${isFull ? 'table--full' : ''}`}>
    <div className="table__tbody">
      { children }
    </div>
  </div>
);

export default Table;
