import React, { ReactElement, ReactNode } from 'react';

import './Layout.scss';

interface PropTypes {
  children?: ReactNode;
}

const Layout = ({ children }: PropTypes): ReactElement => <main>{children}</main>;

export default Layout;
