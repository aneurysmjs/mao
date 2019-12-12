import React, { ReactNode, FunctionComponent } from 'react';

interface PropsType {
  children: ReactNode;
}

export const Tr: FunctionComponent<PropsType> = (props: PropsType) => (
  <div className="table__tr">{props.children}</div>
);

export default Tr;
