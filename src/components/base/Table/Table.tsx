import React, { ReactNode, FunctionComponent } from 'react';

import './Table.scss';

interface PropsType {
  children: ReactNode;
  isFull: boolean;
}

const Table: FunctionComponent<PropsType> = ({ children, isFull }: PropsType) => (
  <div className={`table ${isFull ? 'table--full' : ''}`}>
    <div className="table__tbody">{children}</div>
  </div>
);

export default Table;
