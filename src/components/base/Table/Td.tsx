import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames';

interface PropsType {
  children?: ReactNode;
  col?: number;
  row?: number;
  isHover?: boolean;
  style?: {
    [key: string]: string | number;
  };
}

const Td: FunctionComponent<PropsType> = ({ children, style, col, row, isHover }: PropsType) => (
  <div
    className={classNames('table__td', {
      'table__td--hovered': isHover,
    })}
    data-col={col}
    data-row={row}
    style={style || {}}
  >
    {children}
  </div>
);

export default Td;
