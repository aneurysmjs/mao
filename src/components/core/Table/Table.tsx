
import React from 'react';

import './Table.scss';

interface PropTypes {
  children: Array<JSX.Element> | JSX.Element,
  isFull: boolean
}

const Table = ({ children, isFull }: PropTypes) => (
  <div className={`table ${isFull ? 'table--full' : ''}`}>
    <div className="table__tbody">
      { children }
    </div>
  </div>
);

export default Table;
