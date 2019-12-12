import React, { ReactNode, FunctionComponent } from 'react';

import './Layout.scss';

interface PropTypes {
  children?: ReactNode;
}

const Layout: FunctionComponent = ({ children }: PropTypes) => <main>{children}</main>;

export default Layout;
