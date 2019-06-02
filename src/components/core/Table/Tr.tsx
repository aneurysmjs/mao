
import React from 'react';

interface PropsType {
  children: JSX.Element
};

export const Tr = (props: PropsType) => (
  <div className="table__tr">
    { props.children }
  </div>
);

export default Tr;
