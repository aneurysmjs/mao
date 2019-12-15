import React, { FunctionComponent, ReactNode } from 'react';

interface PropsType {
  children?: ReactNode;
  style?: {
    [key: string]: string | number;
  };
  col?: number;
  row?: number;
}

const Td: FunctionComponent<PropsType> = ({ children, style, col, row }: PropsType) => (
  <div className="table__td" data-col={col} data-row={row} style={style || {}}>
    {children}
  </div>
);

export default Td;
