import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames';

interface PropsType {
  children?: ReactNode;
  data?: {
    [K: string]: string | number;
  };
  col?: number;
  row?: number;
  isHover?: boolean;
  style?: {
    [key: string]: string | number;
  };
}

const Td: FunctionComponent<PropsType> = ({
  children,
  style,
  col,
  row,
  isHover,
  data,
}: PropsType) => (
  <div
    className={classNames('table__td', {
      'table__td--hovered': isHover,
    })}
    {...data}
    style={style || {}}
  >
    {children}
  </div>
);

export default Td;
